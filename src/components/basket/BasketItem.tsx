import React from 'react';
import krest from "../../icons/krest.svg";
import Counter from "../../custom/count/Counter";
import cardStore from "../../store/cardStore";
import {observer} from "mobx-react-lite";
import {toJS} from "mobx";

interface BasketItemProps {
    title: string;
    desc: string;
    id: number
}

const BasketItem: React.FC<BasketItemProps> = observer(({title, desc, id} ) => {


    const cards = cardStore.priceList
    const currentCard = cards.filter((card: any) => +card.id === id)[0]
    const currentPrice = Number(currentCard.price)  *  Number(currentCard.cardCount)




    return (
        <div className="card-basket">



            <span className='basket-title'> {decodeURI(desc?.slice(3))} </span>
            <div className='line'></div>
            <img onClick={() => cardStore.removeItem(id)}  className='krest' src={krest} alt=""/>
            <div className='card-basket-body'>

                <span className='basket-description'> {decodeURI(title)}  </span>

                <div className='counter-group-basket'>
                    <span className='basket-price'>  <strong> {currentPrice}₽ </strong>   </span>
                    <Counter className='counter-comp' width='67px' height='26px' id={id} currentCount={currentCard.cardCount}/>
                </div>

            </div>
            <div className='line'></div>

        </div>
    );
});

export default BasketItem;