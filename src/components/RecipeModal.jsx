import { useState, useEffect, useCallback } from 'react';
import {
  X, Heart, Clock, Users, ChefHat, Check, Minus, Plus,
  Maximize, BookOpen, ShoppingBasket, Timer
} from 'lucide-react';
import CookingMode from './CookingMode';

const DIFFICULTY_COLORS = {
  'Très Facile': '#10b981',
  'Facile': '#3b82f6',
  'Moyen': '#f59e0b',
  'Difficile': '#ef4444',
};

function scaleQty(qty, ratio) {
  if (qty === null) return null;
  const scaled = qty * ratio;
  // Round to sensible precision
  if (scaled >= 100) return Math.round(scaled);
  if (scaled >= 10) return Math.round(scaled * 2) / 2;
  return Math.round(scaled * 4) / 4;
}

export default function RecipeModal({ recipe, isFavorite, onToggleFavorite, onClose }) {
  const [servingsMultiplier, setServingsMultiplier] = useState(1);
  const [checkedIngredients, setCheckedIngredients] = useState({});
  const [completedSteps, setCompletedSteps] = useState({});
  const [activeTab, setActiveTab] = useState('ingredients');
  const [cookingMode, setCookingMode] = useState(false);

  const baseServings = recipe.servings;
  const currentServings = Math.round(baseServings * servingsMultiplier);
  const ratio = servingsMultiplier;

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  const handleKeyDown = useCallback(e => {
    if (e.key === 'Escape') onClose();
  }, [onClose]);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  const toggleIngredient = (key) => {
    setCheckedIngredients(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const toggleStep = (key) => {
    setCompletedSteps(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const totalIngredients = recipe.ingredientGroups.reduce((acc, g) => acc + g.items.length, 0);
  const checkedCount = Object.values(checkedIngredients).filter(Boolean).length;

  const totalSteps = recipe.instructionGroups.reduce((acc, g) => acc + g.steps.length, 0);
  const completedCount = Object.values(completedSteps).filter(Boolean).length;
  const progressPct = totalSteps > 0 ? Math.round((completedCount / totalSteps) * 100) : 0;

  if (cookingMode) {
    return <CookingMode recipe={recipe} ratio={ratio} onClose={() => setCookingMode(false)} />;
  }

  return (
    <div className="modal-backdrop" onClick={onClose} id="recipe-modal-backdrop">
      <div className="modal-content recipe-modal" onClick={e => e.stopPropagation()} id="recipe-modal-content">

        {/* Hero Image */}
        <div className="modal-hero">
          <img
            src={recipe.image}
            alt={recipe.shortTitle}
            className="modal-hero-img"
            loading="eager"
            decoding="async"
            onError={e => { e.target.src = 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=1200&q=80'; }}
          />
          <div className="modal-hero-overlay" />

          {/* Close & Favorite */}
          <div className="modal-hero-actions">
            <button className="btn btn-icon modal-close-btn" onClick={onClose} id="modal-close-btn" aria-label="Fermer">
              <X size={20} />
            </button>
            <button
              className={`btn btn-icon modal-fav-btn ${isFavorite ? 'favorited' : ''}`}
              onClick={onToggleFavorite}
              id="modal-fav-btn"
              aria-label="Favoris"
            >
              <Heart size={20} fill={isFavorite ? '#ef4444' : 'none'} color={isFavorite ? '#ef4444' : 'currentColor'} />
            </button>
          </div>

          {/* Title overlay */}
          <div className="modal-hero-text">
            <div className="modal-pdf-title">{recipe.title}</div>
            <h2 className="modal-title">{recipe.shortTitle}</h2>
            <div className="modal-meta-row">
              <span className="modal-meta-chip">
                <Clock size={14} /> {recipe.prepTime} prép.
              </span>
              <span className="modal-meta-chip">
                <Clock size={14} /> {recipe.cookTime} cuisson
              </span>
              <span className="modal-meta-chip" style={{ background: DIFFICULTY_COLORS[recipe.difficulty] }}>
                <ChefHat size={14} /> {recipe.difficulty}
              </span>
              <button
                className="btn cooking-mode-btn"
                onClick={() => setCookingMode(true)}
                id="cooking-mode-btn"
              >
                <Maximize size={15} /> Mode Cuisine
              </button>
            </div>
          </div>
        </div>

        {/* Body */}
        <div className="modal-body">
          {/* Portions scaler */}
          <div className="portions-scaler">
            <div className="portions-label">
              <Users size={18} />
              <span>Portions :</span>
              <strong className="portions-count">{currentServings} personne{currentServings > 1 ? 's' : ''}</strong>
            </div>
            <div className="portions-btns">
              {[0.5, 1, 2, 4].map(m => (
                <button
                  key={m}
                  id={`portion-btn-${m}`}
                  className={`portion-btn ${servingsMultiplier === m ? 'active' : ''}`}
                  onClick={() => setServingsMultiplier(m)}
                >
                  {m === 0.5 ? '½' : `×${m}`}
                </button>
              ))}
            </div>
          </div>

          {/* Handwritten note */}
          {recipe.note && (
            <div className="modal-note-box">
              <span className="modal-note-arrow">↳</span>
              <span className="modal-note-text">{recipe.note}</span>
            </div>
          )}

          {/* Tabs */}
          <div className="modal-tabs">
            <button
              id="tab-ingredients"
              className={`modal-tab ${activeTab === 'ingredients' ? 'active' : ''}`}
              onClick={() => setActiveTab('ingredients')}
            >
              <ShoppingBasket size={16} /> Ingrédients
              {checkedCount > 0 && <span className="tab-badge">{checkedCount}/{totalIngredients}</span>}
            </button>
            <button
              id="tab-instructions"
              className={`modal-tab ${activeTab === 'instructions' ? 'active' : ''}`}
              onClick={() => setActiveTab('instructions')}
            >
              <BookOpen size={16} /> Préparation
              {completedCount > 0 && <span className="tab-badge">{progressPct}%</span>}
            </button>
          </div>

          {/* Progress bar (instructions tab) */}
          {activeTab === 'instructions' && totalSteps > 0 && (
            <div className="progress-bar-wrap">
              <div className="progress-bar" style={{ width: `${progressPct}%` }} />
              <span className="progress-label">{completedCount}/{totalSteps} étapes</span>
            </div>
          )}

          {/* Ingredients Tab */}
          {activeTab === 'ingredients' && (
            <div className="tab-content">
              {recipe.ingredientGroups.map((group, gi) => (
                <div key={gi} className="ingredient-group">
                  <h4 className="ingredient-group-title">{group.name}</h4>
                  <ul className="ingredient-list">
                    {group.items.map((item, ii) => {
                      const key = `${gi}-${ii}`;
                      const isChecked = !!checkedIngredients[key];
                      const scaledQty = scaleQty(item.qty, ratio);
                      return (
                        <li
                          key={key}
                          className={`ingredient-item ${isChecked ? 'checked' : ''}`}
                          onClick={() => toggleIngredient(key)}
                          id={`ingredient-${recipe.id}-${key}`}
                        >
                          <div className="custom-checkbox">
                            {isChecked && <Check size={12} />}
                          </div>
                          <span className="ingredient-qty">
                            {scaledQty !== null ? `${scaledQty} ${item.unit}` : ''}
                          </span>
                          <span className="ingredient-name">{item.name}</span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              ))}
            </div>
          )}

          {/* Instructions Tab */}
          {activeTab === 'instructions' && (
            <div className="tab-content">
              {recipe.instructionGroups.map((group, gi) => (
                <div key={gi} className="instruction-group">
                  <h4 className="instruction-group-title">{group.title}</h4>
                  {group.steps.map((step, si) => {
                    const key = `${gi}-${si}`;
                    const isCompleted = !!completedSteps[key];
                    const globalIdx = recipe.instructionGroups.slice(0, gi).reduce((acc, g) => acc + g.steps.length, 0) + si + 1;
                    return (
                      <div
                        key={key}
                        className={`step-item ${isCompleted ? 'completed' : ''}`}
                        onClick={() => toggleStep(key)}
                        id={`step-${recipe.id}-${key}`}
                      >
                        <div className="step-number">
                          {isCompleted ? <Check size={14} /> : globalIdx}
                        </div>
                        <p className="step-text">{step}</p>
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
