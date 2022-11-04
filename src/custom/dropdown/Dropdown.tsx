import React from 'react';
// @ts-ignore
import drop from './dropdown.module.css'
import bottom from '../../icons/bottomArrow.svg'

const Dropdown = () => {
    return (
        <div className={drop.body}>
                    <div className={drop.drop_btn} >
                      <span> RU       </span>
                        <img src={bottom} alt=""/>
                    </div>

            <div className={drop.drop_content}>
                <a href="#"> ENG </a>
                <a href="#"> MOL </a>


            </div>

        </div>
    );
};

export default Dropdown;