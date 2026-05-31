import React from 'react';
import eggmenu1 from '../../assets/menuegg.png';
import pizzam from '../../assets/pizzamenu.png';
import martinezmenu from '../../assets/martinezmenu.png';
import cakem from '../../assets/cakemenu.png';
import mintm from '../../assets/mintmenu.png';
import icem from '../../assets/icemenu.png';
import burgerm from '../../assets/burgermenu.png';
import waffm from '../../assets/wafflesmenu.png';
import ProductCard from '../../components/cards/productcard/ProductCard';
import CategoryMenu from '../../components/cards/categorymenu/CategoryMenu';

class HeroMenu extends React.Component {
  constructor(props) {
    super(props);

    const initialItems = [
      { id: 1, title: 'Fried Eggs', desc: 'Made with eggs, lettuce, salt, oil \n and other ingredients.', price: '9.99', img: eggmenu1, category: 'breakfast' },
      { id: 2, title: 'Hawaiian Pizza', desc: 'Made with eggs, lettuce, salt, oil \n and other ingredients.', price: '15.99', img: pizzam, category: 'main' },
      { id: 3, title: 'Martinez Cocktail', desc: 'Made with eggs, lettuce, salt, oil \n and other ingredients.', price: '7.25', img: martinezmenu, category: 'drinks' },
      { id: 4, title: 'Butterscotch Cake', desc: 'Made with eggs, lettuce, salt, oil \n and other ingredients.', price: '20.99', img: cakem, category: 'dessert' },
      { id: 5, title: 'Mint Lemonade', desc: 'Made with eggs, lettuce, salt, oil \n and other ingredients.', price: '5.89', img: mintm, category: 'drinks' },
      { id: 6, title: 'Chocolate Icecream', desc: 'Made with eggs, lettuce, salt, oil \n and other ingredients.', price: '18.05', img: icem, category: 'dessert' },
      { id: 7, title: 'Cheese Burger', desc: 'Made with eggs, lettuce, salt, oil \n and other ingredients.', price: '12.55', img: burgerm, category: 'main' },
      { id: 9, title: 'Classic Waffles', desc: 'Made with eggs, lettuce, salt, oil \n and other ingredients.', price: '12.99', img: waffm, category: 'breakfast' },
    ];

    this.state = {
      items: initialItems,
      currentItems: initialItems,
      activeCategory: 'all'
    };

    this.chooseCategory = this.chooseCategory.bind(this);
  }

  chooseCategory(category) {
    if (category === 'all') {
      this.setState({
        currentItems: this.state.items,
        activeCategory: 'all'
      });
    } else {
      this.setState({
        currentItems: this.state.items.filter(el => el.category === category),
        activeCategory: category
      });
    }
  }

  render() {
    return (
      <section className='heromenu'>
        <div className="heromenu__container container">
          <h1 className='heromenu__title'>Our Menu</h1>
          <p className="heromenu__descr">
            We consider all the drivers of change gives you the components <br/> you need to change to create a truly happens.
          </p>
          
          <CategoryMenu 
            chooseCategory={this.chooseCategory} 
            activeCategory={this.state.activeCategory} 
          />
          
          <ProductCard items={this.state.currentItems} />
        </div>
      </section>
    );
  }
}

export default HeroMenu;