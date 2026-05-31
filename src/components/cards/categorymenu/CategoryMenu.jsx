import React, { Component } from 'react'

export class CategoryMenu extends Component {

    constructor(props) {
        super(props)
       
        this.state = {
             
            categoriesm: [
        { key: 'all', name: 'all' },
        { key: 'breakfast', name: 'Breakfast' },
        { key: 'main', name: 'Main Dishes' },
        { key: 'drinks', name: 'Drinks' },
        { key: 'dessert', name: 'Desserts' },
    ]
        }
    }
    render() {
        return (
            <div className='categoriesm'>
                {this.state.categoriesm.map(el => (
                    <div 
                        key={el.key} 
                        onClick={() => this.props.chooseCategory(el.key)} 
                        className={`categoriess ${this.props.activeCategory === el.key ? 'active' : ''}`}
                    >
                        {el.name}
                    </div>
                ))}
            </div>
        )
    }
}

export default CategoryMenu