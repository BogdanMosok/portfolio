import { useEffect, useState } from 'react';
import { getCategories } from '../../api/Categories';
import type { Category } from '../../api/Categories';

export default function CategoryList() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getCategories()
      .then(setCategories)
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="categoires">
    <h3 className="categories__title">Categories</h3>
    <ul className="categories__list list-reset">
      {categories.map((category) => (
        <li key={category.id} className="categories__item">
      <button className="categories__btn btn-reset">
        {category.name} ({category.product_count})
      </button>
        </li>
      ))}
    </ul>
    </div>
  );
  
}