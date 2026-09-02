import { useState } from 'react';
import { X, Plus } from 'lucide-react';

const COMMON_INGREDIENTS = [
  'poulet', 'bœuf', 'lardons', 'saumon', 'œufs', 'tomate', 'oignon', 'ail',
  'pâtes', 'riz', 'pommes de terre', 'crème fraîche', 'fromage', 'mozzarella',
  'parmesan', 'chèvre', 'avocats', 'courgettes', 'champignons', 'carottes',
  'épinards', 'cheddar', 'beurre', 'huile d\'olive', 'citron'
];

export default function FridgeMode({ selected, onChange, onClose }) {
  const [customInput, setCustomInput] = useState('');

  const toggle = (ingredient) => {
    if (selected.includes(ingredient)) {
      onChange(selected.filter(i => i !== ingredient));
    } else {
      onChange([...selected, ingredient]);
    }
  };

  const addCustom = () => {
    const val = customInput.trim().toLowerCase();
    if (val && !selected.includes(val)) {
      onChange([...selected, val]);
    }
    setCustomInput('');
  };

  return (
    <div className="fridge-panel paper-card">
      <div className="fridge-header">
        <div className="fridge-title">
          <span style={{ fontSize: '1.4rem' }}>🧊</span>
          <span>Mon Frigo — Qu'est-ce que j'ai ?</span>
        </div>
        <button className="btn btn-icon" onClick={onClose} id="fridge-close-btn" aria-label="Fermer le frigo">
          <X size={18} />
        </button>
      </div>

      <p className="fridge-subtitle">
        Sélectionne les ingrédients que tu as pour voir les recettes correspondantes :
      </p>

      <div className="fridge-chips">
        {COMMON_INGREDIENTS.map(ing => (
          <button
            key={ing}
            id={`fridge-chip-${ing.replace(/[\s']/g, '-')}`}
            className={`fridge-chip ${selected.includes(ing) ? 'selected' : ''}`}
            onClick={() => toggle(ing)}
          >
            {selected.includes(ing) ? '✓ ' : '+ '}{ing}
          </button>
        ))}
      </div>

      <div className="fridge-custom-row">
        <input
          id="fridge-custom-input"
          type="text"
          className="fridge-custom-input"
          placeholder="Ajouter un ingrédient..."
          value={customInput}
          onChange={e => setCustomInput(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && addCustom()}
        />
        <button className="btn btn-primary btn-sm" onClick={addCustom} id="fridge-add-btn">
          <Plus size={16} /> Ajouter
        </button>
      </div>

      {selected.length > 0 && (
        <div className="fridge-selected">
          <strong>Ingrédients sélectionnés :</strong>
          <div className="fridge-selected-chips">
            {selected.map(s => (
              <span key={s} className="fridge-selected-chip">
                {s}
                <button onClick={() => toggle(s)} aria-label={`Retirer ${s}`}>×</button>
              </span>
            ))}
          </div>
          <button className="btn btn-secondary btn-sm" onClick={() => onChange([])} id="fridge-clear-btn">
            Tout effacer
          </button>
        </div>
      )}
    </div>
  );
}
