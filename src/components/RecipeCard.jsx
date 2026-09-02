import { memo } from 'react';
import { Heart, Clock, Users } from 'lucide-react';

const DIFFICULTY_COLORS = {
  'Très Facile': '#10b981',
  'Facile': '#3b82f6',
  'Moyen': '#f59e0b',
  'Difficile': '#ef4444',
};

function RecipeCard({ recipe, isFavorite, onSelect, onToggleFavorite }) {
  const diffColor = DIFFICULTY_COLORS[recipe.difficulty] || '#3b82f6';

  return (
    <article
      className="recipe-card paper-card"
      onClick={() => onSelect(recipe)}
      id={`recipe-card-${recipe.id}`}
      role="button"
      tabIndex={0}
      onKeyDown={e => e.key === 'Enter' && onSelect(recipe)}
      aria-label={`Voir la recette ${recipe.shortTitle}`}
    >
      {/* Image */}
      <div className="recipe-card-img-wrap">
        <img
          src={recipe.image}
          alt={recipe.shortTitle}
          className="recipe-card-img"
          loading="lazy"
          decoding="async"
          width="280"
          height="210"
          onError={e => { e.target.src = `https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=800&q=80`; }}
        />
        <div className="recipe-card-img-overlay" />
        {/* Difficulty badge */}
        <span className="recipe-difficulty-badge" style={{ background: diffColor }}>
          {recipe.difficulty}
        </span>
        {/* Category label */}
        <span className="recipe-category-badge">{recipe.categoryLabel}</span>
        {/* Favorite btn */}
        <button
          id={`fav-btn-${recipe.id}`}
          className={`recipe-fav-btn ${isFavorite ? 'favorited' : ''}`}
          onClick={e => { e.stopPropagation(); onToggleFavorite(recipe.id); }}
          aria-label={isFavorite ? 'Retirer des favoris' : 'Ajouter aux favoris'}
        >
          <Heart size={18} fill={isFavorite ? '#ef4444' : 'none'} color={isFavorite ? '#ef4444' : 'white'} />
        </button>
      </div>

      {/* Body */}
      <div className="recipe-card-body">
        <div className="recipe-card-pdf-title">{recipe.title}</div>
        <h2 className="recipe-card-title">{recipe.shortTitle}</h2>

        <div className="recipe-card-meta">
          <span className="meta-item">
            <Clock size={13} />
            {recipe.prepTime}
          </span>
          <span className="meta-sep">·</span>
          <span className="meta-item">
            <Clock size={13} />
            {recipe.cookTime}
          </span>
          <span className="meta-sep">·</span>
          <span className="meta-item">
            <Users size={13} />
            {recipe.servings} pers.
          </span>
        </div>

        {/* Handwritten note teaser */}
        {recipe.note && (
          <div className="recipe-card-note">
            <span className="note-arrow">↳</span>
            <span className="note-text">{recipe.note}</span>
          </div>
        )}

        <div className="recipe-card-footer">
          <div className="recipe-tags">
            {recipe.tags.slice(0, 3).map(tag => (
              <span key={tag} className="tag-pill">#{tag}</span>
            ))}
          </div>
          <button className="btn btn-primary btn-sm">Voir la recette</button>
        </div>
      </div>
    </article>
  );
}

export default memo(RecipeCard);
