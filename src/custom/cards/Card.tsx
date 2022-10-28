import React from 'react';
// @ts-ignore
import card from './card.module.css'
import basket from '../../icons/basket.svg'
import more from '../../icons/moer.svg'

// @ts-ignore
const Card = ({title, price}) => {
    return (
        <div className={card.body}>
            <div className={card.titleGroup}>
                <div className={card.title}> {decodeURI (title)}</div>
                <div><img src={more} alt=""/></div>
            </div>

            <div className={card.priceGroup}>
                <div className={card.price}> {price}</div>
                <div className={card.basket}><img src={basket} alt=""/></div>
            </div>


        </div>
    );
};

export default Card;