import { Search, X } from 'lucide-react';

export default function SearchBar({ value, onChange }) {
  return (
    <div className="search-wrapper">
      <div className="search-inner">
        <Search className="search-icon" size={22} />
        <input
          id="recipe-search-input"
          type="text"
          className="search-input"
          placeholder="Rechercher une recette, un ingrédient... (ex : poulet, tomate, pâtes)"
          value={value}
          onChange={e => onChange(e.target.value)}
          autoComplete="off"
        />
        {value && (
          <button
            id="search-clear-btn"
            className="search-clear-btn"
            onClick={() => onChange('')}
            aria-label="Effacer la recherche"
          >
            <X size={18} />
          </button>
        )}
      </div>
    </div>
  );
}
