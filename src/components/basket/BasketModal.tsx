import React from 'react';
import icon from "../../icons/arrowBasket.svg";
import cardStore from "../../store/cardStore";
import {observer} from "mobx-react-lite";
import {NavLink} from "react-router-dom";
import {toJS} from "mobx";

const BasketModal: React.FC = () => {


    const count = cardStore.priceList.reduce((acc: number, card: any) => {
        if (card.cardCount > 0) acc = acc + card.cardCount
        return acc
    }, 0)

    const price = cardStore.priceList.reduce((acc: any, card: any) => {
        if (card.cardCount > 0) acc = acc + Number(card.price) * card.cardCount
        return acc
    }, 0)


    return (
        <NavLink to="/cart">

            <div className='basket-modal-body'>
                <div className="header-basket-modal">

                    <span> <strong> Корзина </strong> </span>
                    <img src={icon} alt=""/>

                </div>

                <div className="price-group-basket-modal">
                    <div className='count-service-modal'>
                        <span> Количество услуг в корзине  </span> <span> <strong>  {count}</strong>  </span>
                    </div>
                    <div className='order-sum-modal'>
                        <span> Сумма заказа </span> <span> <strong> {price} </strong>  </span>
                    </div>

                </div>
            </div>
        </NavLink>

    );
};

export default observer(BasketModal);