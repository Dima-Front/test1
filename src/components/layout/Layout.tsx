import React, {useEffect} from 'react';
import Aside from "../aside/Aside";
import Main from "../main/Main";
import cardStore from "../../store/cardStore";
import BasketModal from "../basket/BasketModal";
import { useNavigate } from 'react-router-dom';
import {observer} from "mobx-react-lite";
import {toJS} from "mobx";


const Layout: React.FC = observer(() => {
    const priceList = cardStore.priceList;
    const sortedList = cardStore.sortedList
    const tree = cardStore.createTree(cardStore.treeItems)


    const showCart = priceList.filter((card: any) => card.cardCount > 0)

    let navigate = useNavigate();

    useEffect(() => {
        cardStore.getPriceList()
        cardStore.getTreeItems()
    }, [navigate])

    return (
        <div className='page-body'>
            <Aside tree={tree}/>
            <Main data={ sortedList.length > 0 ? sortedList : priceList}/>
            {showCart.length ? <BasketModal  /> : null}
        </div>

    );
});

export default Layout;