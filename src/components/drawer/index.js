import React from 'react';
import './style.scss';
import AppContext from "../contextx";

import btnRemove from '../../assets/btn-remove.svg'
import arrow from '../../assets/arrow.svg'

/**

 Функциональный компонент Drawer, представляющий корзину покупок на сайте.

 @param {Function} onClose - Функция, вызываемая при закрытии корзины.

 @param {Function} onRemove - Функция, вызываемая при удалении товара из корзины.

 @param {Array} items - Массив объектов, представляющих товары в корзине.

 @returns {JSX.Element} - Возвращает разметку корзины с товарами.
 */
function Drawer({onClose, onRemove, items = []}) {
    /**

     Объект, представляющий контекст приложения, включающий в себя список товаров в корзине.
     @type {Object}
     */
    const {cartItems} = React.useContext(AppContext);
    /**

     Переменная, содержащая общую стоимость всех товаров в корзине.
     @type {number}
     */
    const totalPrice = cartItems.reduce((sum, obj) => obj.price + sum, 0);

    const handleOrder = () => {
        // Вывести сообщение о успешном оформлении заказа
        alert('Заказ успешно оформлен!');
    }

    return (
        <div className="overlay">
            <div className='drawer'>
                <h2 className='drawerLabel'>Корзина
                    <img onClick={onClose} className='removeBtn' src={btnRemove} alt="Remove"/>
                </h2>

                <div className="items">
                    {items.map((obj) => (
                        <div key={obj.id} className="cartItem">
                            <div style={{backgroundImage: `url(${obj.imageUrl})`}} className="cartItemImg"></div>
                            <div className='cartBox'>
                                <p className='cartBoxTitle'>{obj.title}</p>
                                <b className='cartBoxPrice'>{obj.price}</b>
                            </div>
                            <img onClick={() => onRemove(obj.id)} className='removeBtn' src={btnRemove}
                                 alt="Remove"/>
                        </div>
                    ))}
                </div>

                <div className="cartTotalBlock">
                    <ul className='cartUl'>
                        <li className='cartLi'>
                            <span>Итог:</span>
                            <div className='void'></div>
                            <b>{totalPrice} руб.</b>
                        </li>
                        {/*<li className='cartLi'>*/}
                        {/*    <span>Налог 3%:</span>*/}
                        {/*    <div className='void'></div>*/}
                        {/*    <b>{totalPrice * 0.03} руб.</b>*/}
                        {/*</li>*/}
                    </ul>
                    <button className='greenButton' onClick={handleOrder}>Оформить заказ <img className='arrow' src={arrow} alt="Arrow"/>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Drawer;