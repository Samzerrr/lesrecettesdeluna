import RecipeCard from './RecipeCard';
import { UtensilsCrossed } from 'lucide-react';

export default function RecipeGrid({ recipes, favorites, onSelect, onToggleFavorite }) {
  if (recipes.length === 0) {
    return (
      <div className="empty-state">
        <UtensilsCrossed size={56} className="empty-icon" />
        <h3>Aucune recette trouvée</h3>
        <p>Essaie un autre ingrédient ou une autre catégorie !</p>
      </div>
    );
  }

  return (
    <div className="recipe-grid">
      {recipes.map(recipe => (
        <RecipeCard
          key={recipe.id}
          recipe={recipe}
          isFavorite={favorites.includes(recipe.id)}
          onSelect={onSelect}
          onToggleFavorite={onToggleFavorite}
        />
      ))}
    </div>
  );
}
