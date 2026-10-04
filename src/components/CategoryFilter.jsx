import { Utensils, Flame, Wheat, Pizza, Salad, Sandwich, Leaf, Soup, Cake } from 'lucide-react';

const ICON_MAP = { Utensils, Flame, Wheat, Pizza, Salad, Sandwich, Leaf, Soup, Cake };

export default function CategoryFilter({ categories, active, onChange }) {
  return (
    <div className="category-filter-scroll">
      <div className="category-filter-track">
        {categories.map(cat => {
          const Icon = ICON_MAP[cat.icon] || Utensils;
          return (
            <button
              key={cat.id}
              id={`category-btn-${cat.id}`}
              className={`category-pill ${active === cat.id ? 'active' : ''}`}
              onClick={() => onChange(cat.id)}
            >
              <Icon size={15} />
              <span>{cat.name}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
