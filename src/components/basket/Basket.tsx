import React, {useEffect} from 'react';
import icon from '../../icons/arrowBasket.svg'
import {NavLink} from "react-router-dom";
import cardStore from "../../store/cardStore";
import BasketItem from "./BasketItem";
import {observer} from "mobx-react-lite";
import {toJS} from "mobx";


const Basket: React.FC = observer(() => {

    const count = cardStore.priceList.reduce((acc: number, card: any) => {
        if (card.cardCount > 0) acc = acc + card.cardCount
        return acc
    }, 0)

    const price = cardStore.priceList.reduce((acc: any, card: any) => {
        if (card.cardCount > 0) acc = acc + Number(card.price) * card.cardCount
        return acc
    }, 0)

    const sortedCards = cardStore.sortedCards

    useEffect(() => {
        cardStore.getSortedCards()

    }, [count, price])


    return (
        <div className='main-body'>

            <div className='body-basket'>
                <div className="header-basket">
                    <span> <strong> Корзина </strong> </span>
                    <NavLink to='/'>
                        <img src={icon} alt=""/>
                    </NavLink>

                </div>

                <div className="price-group-basket">
                    <div className='count-service'>
                        <span> Количество услуг в корзине  </span> <span> {count} </span>
                    </div>
                    <div className='order-sum'>
                        <span> Сумма заказа </span> <span> {price} {price ? '₽' : null} </span>
                    </div>

                </div>

                {count ? sortedCards.map((card: any) => <BasketItem key={card.id} title={card.name} id={card.id}
                                                                     desc={card.top_parent}
                                                                   />) : null}

                <button className='basket-button'> Оформить заказ</button>

            </div>
        </div>
    );
});

export default Basket;