import CategoryList from '../../components/Categories/Categorieslist'
import PriceFilter from '../../components/PriceFilter/PriceFilter'
import { useEffect, useState } from 'react';
import { getSizeCategories } from '../../api/SizeCategories';
import type {SizeCategory} from '../../api/SizeCategories'
import ssb from '../../assets/ssb.png'
import ProductCard from '../../components/ProductCard/ProductCard';

export default function Shop() {

    const [SizeCategories, setSizeCategories] = useState<SizeCategory[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

      useEffect(() => {
        getSizeCategories()
          .then(setSizeCategories)
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
    <section className="shop">
        <div className="shop__container container">
            <div className="shop__wrapper">
            <CategoryList />
            <PriceFilter/>
            <div className="shop__sizecat">
                    <h3 className="shop__sizecat-title">
                        Size
                    </h3>
                    <ul className="shop__sizecat-list list-reset">
                        {SizeCategories.map((SizeCategory) => (
                            <li key ={SizeCategory.id} className="shop__sizecat-item">
                                <button className="shop__sizecat-btn btn-reset">
                                    {SizeCategory.SizeName} ({SizeCategory.product_count})
                                </button>
                            </li>
                        ))}
                    </ul>
                    </div>
                       <img src={ssb} alt=""  className='shop__sizecat-pt' />
            </div>
            <div className="shop__product-grid">
                <ProductCard/>
            </div>
        </div>
    </section>
  )
}
