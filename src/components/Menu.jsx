/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Popup } from 'semantic-ui-react';

const CardComponent = ({ title, id, image, removeFromCard }) => (
    <div class="ui selection middle aligned list">
        <div class="item">
            <div class="right floated content">
                <button className="button" onClick={removeFromCard.bind(this, id)}>Удалить</button>
            </div>
            <img src={image} class="ui avatar image" />
            <div class="content">
                {title}
            </div>
        </div>
  </div>
 
)

const MenuComponent = ({totalPrice, count, items}) => (
    <div className='menu-header'>
        <div className='menu-left'>
            <span>Магазин книг</span>
        </div>
        <div className="menu-right">
            <span>Итого: &nbsp; <b>{totalPrice}</b> usd</span>
        </div>
        <Popup
        trigger={
          <div className='menu-right'>
            <span>Корзина (<b>{count}</b>)</span>
          </div>
        }
        content={items.map(book => <CardComponent {...book} />)}
        on="click"
        hideOnScroll
      />  
        
    </div>   
);

export default MenuComponent;