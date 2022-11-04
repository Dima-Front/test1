import React from 'react';

// @ts-ignore
import count from './count.module.css'
import plus from '../../icons/plus.svg'
import minus from '../../icons/minus.svg'
import {observer} from "mobx-react-lite";
import cardStore from "../../store/cardStore";

interface CounterProps {
    width: string;
    height: string;
    id: number;
    currentCount: number;
    className?: any;
}


const Counter: React.FC<CounterProps> = observer(({width, height, id, currentCount} ) => {

    return (
        <div className={count.body} style={{width: width, height: height}}>
            <div onClick={() => cardStore.removeFromCard(id)}
                 className={count.minus}>
                <img src={minus} alt=""/>
            </div>
            <span> <strong> {currentCount} </strong>   </span>
            <div onClick={() => cardStore.addToCard(id)}>
                <img src={plus} alt=""/>
            </div>
        </div>
    );

})

export default Counter;