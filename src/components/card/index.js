import React from 'react';
import ContentLoader from "react-content-loader";
import styles from './style.module.scss'
import AppContext from "../contextx";

import heartLiked from '../../assets/heart-liked.svg'
import heartUnliked from '../../assets/heart-unliked.svg'
import btnChecked from '../../assets/btn-checked.svg'
import btnPlus from '../../assets/btn-plus.svg'

/**
 * Card Component
 *
 * @param {string} id - идентификатор карточки
 * @param {function} onFavorite - обработчик клика по кнопке "Добавить в избранное"
 * @param {string} imageUrl - ссылка на изображение карточки
 * @param {string} title - заголовок карточки
 * @param {number} price - цена карточки
 * @param {function} onPlus - обработчик клика по кнопке "Добавить в корзину"
 * @param {boolean} loading - флаг загрузки контента
 */


function Card(
    {
        id,
        onFavorite,
        imageUrl,
        title,
        price,
        onPlus,
        loading = false
    }) {

    const {isItemAdded, isItemFavorites} = React.useContext(AppContext);

    /**

     Обрабатывает событие onClick кнопки "Добавить в корзину" и вызывает функцию oneplus с указанием идентификатора товара, названия, URL-адреса изображения и цены.
     @returns {void}
     */
    const onClickPlus = () => {
        onPlus({id, title, imageUrl, price});
    }
    /**

     Обрабатывает событие onClick кнопки "Избранное" и вызывает функцию "Включить избранное" с идентификатором элемента, заголовком, URL-адресом изображения и ценой.
     @returns {void}
     */
    const onClickFavorite = () => {
        onFavorite({id, title, imageUrl, price});
    }


    return (
        <div className={styles.card}>
            {
                loading ? <ContentLoader
                        speed={1.5}
                        width={210}
                        height={230}
                        viewBox="0 0 210 230"
                        backgroundColor="#f3f3f3"
                        foregroundColor="#ecebeb"
                    >
                        <rect x="0" y="0" rx="10" ry="10" width="150" height="90"/>
                        <rect x="0" y="104" rx="5" ry="5" width="150" height="15"/>
                        <rect x="0" y="133" rx="5" ry="5" width="100" height="15"/>
                        <rect x="0" y="173" rx="5" ry="5" width="70" height="17"/>
                        <rect x="118" y="159" rx="5" ry="5" width="32" height="32"/>
                    </ContentLoader> :
                    <>
                        <div className={styles.favorite} onClick={onFavorite}>
                            <img onClick={onClickFavorite}
                                 src={isItemFavorites(id) ? heartLiked : heartUnliked}
                                 alt="heart-unliked"/>
                        </div>
                        <img width={320} height={240} src={imageUrl} alt='Services'/>

                        <h5 className={styles.cardTitleText}>{title}</h5>

                        <div className={styles.cardBox}>
                            <div className={styles.cardPrice}>

                                <b className={styles.cardText}> <span className={styles.cardSpan}>Цена: </span>{price} руб.</b>
                            </div>
                            <div>
                                <img className={styles.plus} onClick={onClickPlus}
                                     src={isItemAdded(id) ? btnChecked : btnPlus}
                                     alt='Plus'/>
                            </div>
                        </div>


                    </>


            }
        </div>
    );
}

export default Card;