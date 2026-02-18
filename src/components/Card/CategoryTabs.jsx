export default function CategoryTabs({ categories, active, onChange }) {
  return (
    <div className="menu__categories">
      {categories.map(cat => (
        <button
          key={cat}
          className={`menu__category-btn ${active === cat ? "menu__category-btn--active" : ""}`}
          onClick={() => onChange(cat)}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
