import { useState, useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight, Timer, Check, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function CookingMode({ recipe, ratio, onClose }) {
  const [stepIndex, setStepIndex] = useState(0);
  const [timerSeconds, setTimerSeconds] = useState(0);
  const [timerRunning, setTimerRunning] = useState(false);
  const [timerHasFinished, setTimerHasFinished] = useState(false);
  const [timerInput, setTimerInput] = useState('5');
  const [completedSteps, setCompletedSteps] = useState({});

  // Flatten all steps
  const allSteps = recipe.instructionGroups.flatMap((g, gi) =>
    g.steps.map((s, si) => ({ text: s, group: g.title, key: `${gi}-${si}` }))
  );
  const currentStep = allSteps[stepIndex];
  const isCompleted = !!completedSteps[currentStep?.key];

  useEffect(() => {
    if (!timerRunning || timerSeconds <= 0) return;
    const interval = setInterval(() => {
      setTimerSeconds(s => {
        if (s <= 1) {
          setTimerRunning(false);
          setTimerHasFinished(true);
          try {
            if ('vibrate' in navigator) navigator.vibrate([200, 100, 200]);
          } catch {}
          return 0;
        }
        return s - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [timerRunning, timerSeconds]);

  const startTimer = () => {
    const mins = Math.max(1, parseInt(timerInput) || 5);
    setTimerSeconds(mins * 60);
    setTimerRunning(true);
    setTimerHasFinished(false);
  };

  const resetTimer = () => {
    setTimerRunning(false);
    setTimerSeconds(0);
    setTimerHasFinished(false);
  };

  const formatTime = (s) => {
    const m = Math.floor(s / 60);
    const sec = s % 60;
    return `${m}:${sec.toString().padStart(2, '0')}`;
  };

  const toggleCurrent = () => {
    setCompletedSteps(prev => ({ ...prev, [currentStep.key]: !prev[currentStep.key] }));
  };

  const handleFinish = () => {
    try {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch {}
    setTimeout(onClose, 800);
  };

  // Keyboard navigation
  const handleKeyDown = useCallback(e => {
    if (e.key === 'ArrowRight' && stepIndex < allSteps.length - 1) {
      setStepIndex(i => i + 1);
    } else if (e.key === 'ArrowLeft' && stepIndex > 0) {
      setStepIndex(i => i - 1);
    } else if (e.key === ' ' && e.target.tagName !== 'INPUT') {
      e.preventDefault();
      toggleCurrent();
    } else if (e.key === 'Escape') {
      onClose();
    }
  }, [stepIndex, allSteps.length, currentStep, onClose]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  return (
    <div className="cooking-mode-overlay" id="cooking-mode-overlay">
      <div className="cooking-mode-inner">
        {/* Header */}
        <div className="cooking-header">
          <div>
            <div className="cooking-pdf-title">{recipe.title}</div>
            <h2 className="cooking-title">{recipe.shortTitle}</h2>
          </div>
          <button className="btn btn-icon" onClick={onClose} id="cooking-close-btn" aria-label="Quitter le mode cuisine">
            <X size={22} />
          </button>
        </div>

        {/* Progress bar */}
        <div className="cooking-progress-wrap">
          <div className="cooking-progress-bar" style={{ width: `${((stepIndex + 1) / allSteps.length) * 100}%` }} />
          <span className="cooking-progress-label">Étape {stepIndex + 1} sur {allSteps.length}</span>
        </div>

        {/* Step display */}
        <div className="cooking-step-area">
          <div className="cooking-group-label">{currentStep?.group}</div>
          <div className={`cooking-step-text ${isCompleted ? 'completed' : ''}`}>
            {currentStep?.text}
          </div>
          <button
            className={`btn cooking-check-btn ${isCompleted ? 'done' : ''}`}
            onClick={toggleCurrent}
            id="cooking-step-check-btn"
          >
            <Check size={20} />
            {isCompleted ? 'Étape validée ✓' : 'Marquer comme fait (Espace)'}
          </button>
        </div>

        {/* Navigation */}
        <div className="cooking-nav">
          <button
            className="btn btn-secondary cooking-nav-btn"
            onClick={() => setStepIndex(i => Math.max(0, i - 1))}
            disabled={stepIndex === 0}
            id="cooking-prev-btn"
          >
            <ChevronLeft size={22} /> Précédent
          </button>

          <div className="cooking-dots">
            {allSteps.map((_, i) => (
              <button
                key={i}
                className={`cooking-dot ${i === stepIndex ? 'active' : ''} ${completedSteps[allSteps[i].key] ? 'done' : ''}`}
                onClick={() => setStepIndex(i)}
                id={`cooking-dot-${i}`}
                aria-label={`Aller à l'étape ${i + 1}`}
              />
            ))}
          </div>

          {stepIndex < allSteps.length - 1 ? (
            <button
              className="btn btn-primary cooking-nav-btn"
              onClick={() => setStepIndex(i => i + 1)}
              id="cooking-next-btn"
            >
              Suivant <ChevronRight size={22} />
            </button>
          ) : (
            <button className="btn cooking-finish-btn" onClick={handleFinish} id="cooking-finish-btn">
              <Sparkles size={18} /> 🎉 Bon appétit !
            </button>
          )}
        </div>

        {/* Timer */}
        <div className="cooking-timer-panel">
          <Timer size={18} />
          <span>Minuteur :</span>
          <input
            type="number"
            className="timer-input"
            value={timerInput}
            onChange={e => setTimerInput(e.target.value)}
            min={1}
            max={120}
            id="timer-minutes-input"
            aria-label="Minutes"
          />
          <span>min</span>
          <button
            className="btn btn-primary btn-sm"
            onClick={timerRunning ? resetTimer : startTimer}
            id="timer-start-btn"
          >
            {timerRunning ? 'Arrêter' : 'Démarrer'}
          </button>
          {timerSeconds > 0 && (
            <span className={`timer-display ${timerSeconds <= 10 ? 'urgent' : ''}`}>
              ⏱ {formatTime(timerSeconds)}
            </span>
          )}
          {timerHasFinished && (
            <span className="timer-done">⏰ Temps écoulé !</span>
          )}
        </div>
      </div>
    </div>
  );
}
