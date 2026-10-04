import { Heart, Refrigerator } from 'lucide-react';

export default function Header({ favoritesCount, showFavoritesOnly, onToggleFavorites, onToggleFridge, showFridgeMode }) {
  return (
    <header className="site-header">
      <div className="header-inner app-container">
        <div className="header-brand">
          <div className="header-logo">
            <img src="./logo.png" alt="Les recettes de Luna" className="logo-image" />
          </div>
          <div>
            <h1 className="pdf-title">Les recettes de Luna</h1>
            <p className="header-subtitle">Carnet gourmand illustré</p>
          </div>
        </div>

        <div className="header-actions">
          <button
            id="fridge-mode-btn"
            className={`btn btn-secondary header-action-btn ${showFridgeMode ? 'active' : ''}`}
            onClick={onToggleFridge}
            title="Mode Frigo"
          >
            <Refrigerator size={18} />
            <span>Mon Frigo</span>
          </button>

          <button
            id="favorites-btn"
            className={`btn btn-secondary header-action-btn ${showFavoritesOnly ? 'active' : ''}`}
            onClick={onToggleFavorites}
            title="Mes favoris"
          >
            <Heart size={18} fill={showFavoritesOnly ? '#ef4444' : 'none'} color={showFavoritesOnly ? '#ef4444' : 'currentColor'} />
            <span>Favoris</span>
            {favoritesCount > 0 && (
              <span className="favorites-badge">{favoritesCount}</span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
