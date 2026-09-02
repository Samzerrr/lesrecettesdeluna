import { useState, useMemo } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import CategoryFilter from './components/CategoryFilter';
import RecipeGrid from './components/RecipeGrid';
import RecipeModal from './components/RecipeModal';
import FridgeMode from './components/FridgeMode';
import { RECIPES, CATEGORIES } from './data/recipes';

function App() {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [favorites, setFavorites] = useState(() => {
    try { return JSON.parse(localStorage.getItem('mes-recettes-favorites') || '[]'); }
    catch { return []; }
  });
  const [showFavoritesOnly, setShowFavoritesOnly] = useState(false);
  const [showFridgeMode, setShowFridgeMode] = useState(false);
  const [fridgeIngredients, setFridgeIngredients] = useState([]);
  const [difficultyFilter, setDifficultyFilter] = useState('all');

  const toggleFavorite = (id) => {
    setFavorites(prev => {
      const next = prev.includes(id) ? prev.filter(f => f !== id) : [...prev, id];
      localStorage.setItem('mes-recettes-favorites', JSON.stringify(next));
      return next;
    });
  };

  const filteredRecipes = useMemo(() => {
    return RECIPES.filter(r => {
      const searchLower = search.toLowerCase().trim();
      const matchesSearch = !searchLower ||
        r.shortTitle.toLowerCase().includes(searchLower) ||
        r.title.toLowerCase().includes(searchLower) ||
        r.tags.some(t => t.includes(searchLower)) ||
        r.ingredientGroups.some(g => g.items.some(i => i.name.toLowerCase().includes(searchLower)));
      const matchesCategory = activeCategory === 'all' || r.category === activeCategory;
      const matchesFavorite = !showFavoritesOnly || favorites.includes(r.id);
      const matchesDifficulty = difficultyFilter === 'all' || r.difficulty === difficultyFilter;
      const matchesFridge = fridgeIngredients.length === 0 ||
        fridgeIngredients.some(fi =>
          r.ingredientGroups.some(g => g.items.some(i => i.name.toLowerCase().includes(fi.toLowerCase())))
        );
      return matchesSearch && matchesCategory && matchesFavorite && matchesDifficulty && matchesFridge;
    });
  }, [search, activeCategory, showFavoritesOnly, favorites, difficultyFilter, fridgeIngredients]);

  return (
    <div className="app-wrapper">
      <Header
        favoritesCount={favorites.length}
        showFavoritesOnly={showFavoritesOnly}
        onToggleFavorites={() => setShowFavoritesOnly(p => !p)}
        onToggleFridge={() => setShowFridgeMode(p => !p)}
        showFridgeMode={showFridgeMode}
      />

      <main className="app-container">
        <div className="hero-section">
          <SearchBar value={search} onChange={setSearch} />
          <div className="filter-row">
            <CategoryFilter
              categories={CATEGORIES}
              active={activeCategory}
              onChange={setActiveCategory}
            />
            <div className="difficulty-filter">
              {['all', 'Très Facile', 'Facile', 'Moyen'].map(d => (
                <button
                  key={d}
                  className={`diff-btn ${difficultyFilter === d ? 'active' : ''}`}
                  onClick={() => setDifficultyFilter(d)}
                >
                  {d === 'all' ? 'Toutes difficultés' : d}
                </button>
              ))}
            </div>
          </div>
        </div>

        {showFridgeMode && (
          <FridgeMode
            selected={fridgeIngredients}
            onChange={setFridgeIngredients}
            onClose={() => setShowFridgeMode(false)}
          />
        )}

        <div className="results-info">
          <span className="results-count">
            {filteredRecipes.length} recette{filteredRecipes.length !== 1 ? 's' : ''}
            {search && <span> pour "<strong>{search}</strong>"</span>}
            {activeCategory !== 'all' && <span> • 🏷️ {CATEGORIES.find(c => c.id === activeCategory)?.name}</span>}
            {difficultyFilter !== 'all' && <span> • ⚡ {difficultyFilter}</span>}
            {showFavoritesOnly && <span> • ❤️ Favoris</span>}
            {fridgeIngredients.length > 0 && <span> • 🧊 Frigo ({fridgeIngredients.length})</span>}
          </span>
          {(search || activeCategory !== 'all' || difficultyFilter !== 'all' || showFavoritesOnly || fridgeIngredients.length > 0) && (
            <button
              className="btn btn-secondary btn-sm reset-filters-btn"
              onClick={() => {
                setSearch('');
                setActiveCategory('all');
                setDifficultyFilter('all');
                setShowFavoritesOnly(false);
                setFridgeIngredients([]);
              }}
            >
              Réinitialiser les filtres
            </button>
          )}
        </div>

        <RecipeGrid
          recipes={filteredRecipes}
          favorites={favorites}
          onSelect={setSelectedRecipe}
          onToggleFavorite={toggleFavorite}
        />
      </main>

      <footer className="site-footer">
        <div className="app-container footer-inner">
          <div className="footer-brand">
            <span className="footer-logo">👩‍🍳</span>
            <strong>Les recettes de Luna</strong>
            <span>• Carnet de recettes illustré</span>
          </div>
          <p className="footer-note">Fait avec amour • 22 recettes gourmandes & faciles</p>
        </div>
      </footer>

      {selectedRecipe && (
        <RecipeModal
          recipe={selectedRecipe}
          isFavorite={favorites.includes(selectedRecipe.id)}
          onToggleFavorite={() => toggleFavorite(selectedRecipe.id)}
          onClose={() => setSelectedRecipe(null)}
        />
      )}
    </div>
  );
}

export default App;
