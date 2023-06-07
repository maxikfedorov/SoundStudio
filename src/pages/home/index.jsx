/**
 * Компонент главной страницы приложения.
 * Отображает список товаров, управляет поиском, добавлением товаров в корзину и закладки.
 * @param {Object} props - пропсы компонента.
 * @param {Array} props.items - массив товаров.
 * @param {string} props.searchValue - текущее значение поискового запроса.
 * @param {Function} props.setSearchValue - функция для установки значения поискового запроса.
 * @param {Function} props.onChangeSearchInput - функция для обработки изменения поискового запроса.
 * @param {Function} props.onAddToFavorite - функция для добавления товара в закладки.
 * @param {Function} props.onAddToCart - функция для добавления товара в корзину.
 * @param {boolean} props.isLoading - флаг загрузки.
 * @returns {JSX.Element} - возвращает JSX разметку компонента.
 */

import React, {useState} from 'react';
import Card from "../../components/card";
import './style.scss';
import AppContext from "../../components/contextx";

import search from '../../assets/search.svg'
import btnRemove from '../../assets/btn-remove.svg'


function Home({}) {

    const {
        items,
        searchValue,
        setSearchValue,
        onChangeSearchInput,
        onAddToFavorite,
        onAddToCart,
        isLoading
        // eslint-disable-next-line react-hooks/rules-of-hooks
    } = React.useContext(AppContext);

    const renderItems = () => {
        const filtredItems = items.filter(item =>
            item.title.toLowerCase().includes(searchValue.toLowerCase()));
        return (isLoading ? [...Array(10)] : filtredItems).map((item, index) => (
                <Card
                    key={index}
                    onFavorite={(obj) => onAddToFavorite(obj)}
                    onPlus={(obj) => onAddToCart(obj)}
                    loading={isLoading}
                    {...item}
                />
            )
        )
    }

    return (
        <div className='content'>
            <div className='page'>
                <h1 className='text'>{searchValue ? `Поиск по запросу: ${searchValue}` : 'Доступные услуги'}</h1>
                <div className='search-block'>
                    <img src={search} alt="Search"/>
                    {searchValue &&
                        <img onClick={() => setSearchValue('')} className='clear' src={btnRemove}
                             alt="Clear"/>}
                    <input className='headerInput' onChange={onChangeSearchInput} value={searchValue} placeholder='Поиск...'/>
                </div>
            </div>

            <div className="box">
                {renderItems()}

            </div>
        </div>
    );
}

export default Home;