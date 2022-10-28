import React, {useEffect, useState} from 'react';
import Card from "../../custom/cards/Card";
import {PriceService} from "../../services/requests";

const Main = () => {

    const [data, setData] = useState<any[]>()

    async function getPrice () {
        const response = await PriceService.priceList()
        setData(response.data.price_list)

    }
    console.log(data)




    useEffect(() => {

        getPrice()
    }, [])

    return (
        <div>
        <div className='main-input' > <input type='search' placeholder='Поиск'/>  </div>

            <div className='main-text'>
                Из-за ежедневного использования повседневная одежда быстро изнашивается и нуждается в  профессиональном уходе.
                То, что чаще носится, должно и чаще чиститься! Подбирать для повседневной одежды правильные программы обработки – это задача профессионалов.
            </div>
            <div className='cards-group'>
                {!data ? ' Нет товаров' : data.map((item: { id: React.Key | null | undefined; name: any; price: any; }) =>
                    <Card key={item.id} title={item.name} price={item.price}/>)}


            </div>

        </div>
    );
};

export default Main;