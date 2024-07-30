import { Component } from "react";
import './shopitem.css'

export class ShopItemClass extends Component {
    shopItem = {
        brand: 'Tiger of Sweden',
        title: 'Leonard coat',
        description: 'Minimalistic coat in cotton-blend',
        descriptionFull: 'Men\'s minimalistic overcoat in cotton-blend. Features a stand-up collar, concealed front closure and single back vent. Slim fit with clean, straight shape. Above-knee length.',
        price: 399,
        currency: '£'
    };
  
    render() {
        return (
            <div className="main-content"> 
            <h2>{this.shopItem.brand}</h2>
            <h1>{this.shopItem.title}</h1>
            <h3>{this.shopItem.description}</h3>
            <div className="description">{this.shopItem.descriptionFull}</div>
            <div className="highlight-window mobile"><div className="highlight-overlay"></div></div>
            <div className="divider"></div>
            <div className="purchase-info">
                <div className="price">{this.shopItem.currency}{this.shopItem.price}</div>
                <button>Добавить в корзину</button>
            </div>
            </div>
        );
    }
}
