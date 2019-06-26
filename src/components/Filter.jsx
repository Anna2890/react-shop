
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { setSearchQuery } from '../actions/filter';


const Filter = ({setFilter, filterBy, searchQuery, setSearchQuery}) => {
    
    return (
    <div className="secondary_menu">
            <a name='all' className='item' active = {filterBy === 'all'}
                 onClick={setFilter.bind(this, 'all')}>Все
            </a>
            <a  name='price_high' className="item" active = {filterBy === 'price_high'}
                 onClick={setFilter.bind(this, 'price_high')}>Цена (дорогие)
            </a>
            <a  name='price_low' className="item" active = {filterBy === 'price_low'}
                 onClick={setFilter.bind(this, 'price_low')}>Цена (дешевые)
            </a>
            <a  name='author' className="item" active = {filterBy === 'author'}
                 onClick={setFilter.bind(this, 'author')}>Автор
            </a>
            <input value={searchQuery} onChange={e => setSearchQuery(e.target.value)} icon='search' type="text" placeholder='Поиск по книгам...'/>
        </div>
    )
}
export default Filter;






