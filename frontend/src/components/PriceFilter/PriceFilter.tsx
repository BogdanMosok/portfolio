import { useState } from 'react';
import './PriceFilter.scss';



export default function PriceFilter() {
    const [minPrice, setMinPrice] = useState(39);
    const [maxPrice, setMaxPrice] = useState(1230);
    return (
        <div className="pricefilter">
            <h3 className="pricefilter__title">
                Price Range
            </h3>

            <div className="pricefilter__content">
                <div className="pricefilter__range-slider">
                    <div className="pricefilter__range_track"></div>
                    <div className="pricefilter__range-fill" />

                    <input
                        type="range"
                        className="pricefilter__rangeMin"
                        min="39"
                        max="1230"
                        step="10"
                        value={minPrice}
                        onChange={(e) => setMinPrice(Number(e.target.value))}
                    />

                    <input
                        type="range"
                        className="pricefilter__rangeMax"
                        min="39"
                        max="1230"
                        step="10"
                        value={maxPrice}
                        onChange={(e) => setMaxPrice(Number(e.target.value))}
                    />
                </div>

                <h4 className="pricefilter__price">
                    Price:{' '}
                    <span className="pricefilter__priceValue">
                        ${minPrice} - ${maxPrice}
                    </span>
                </h4>
                <button className="pricefilter__btn btn-reset">
                    Filter
                </button>
            </div>
        </div>

    );
}