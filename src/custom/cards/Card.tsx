import React from 'react';
// @ts-ignore
import card from './card.module.css'
import basket from '../../icons/basket.svg'
import more from '../../icons/moer.svg'
import Counter from "../count/Counter";
import cardStore from "../../store/cardStore";
import {observer} from "mobx-react-lite";
import {toJS} from 'mobx'

interface CardProps {
    title: string;
    price: number;
    id: number | string;
    item: any
}

const Card: React.FC<CardProps> =  ({title, price, id, item} ) => {


    const priceList = cardStore.priceList

     const currentCard = priceList.filter((card: any) => +card.id === +id)[0]

    return (
        <>
        <div className={card.body}>
            <div className={card.titleGroup}>
                <div className={card.title}> {decodeURI (title)}</div>
                <div><img src={more} alt=""/></div>
            </div>
            <div className={card.priceGroup}>
                <div className={card.price}> {price}₽</div>
                <div id={item.id}  className={  card.basket }>
                    {currentCard?.cardCount > 0
                            ? <Counter currentCount={currentCard.cardCount} id={item?.id} width='91px' height='41px' />
                            : <img src={basket} onClick={() => cardStore.addToCard(item?.id)} alt=""/>}
                </div>
            </div>
        </div>
        </>
    );
};

export default  observer (Card) ;