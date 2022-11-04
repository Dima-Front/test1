import {action, makeAutoObservable, observable} from 'mobx';
import {PriceService} from "../services/requests";
import {toJS} from 'mobx'


class CardStore {

    constructor() {
        makeAutoObservable(this)
    }
    price = 0;
    priceList: any = [];
    sortedList: any = [];
    treeItems = [];
    sortedCards= []

    getSortedCards() {
        this.sortedCards = this.priceList.filter((card:any) =>  card.cardCount > 0)
    }

    removeItem(id: number) {

        this.removeAllFromCard(id)
        this.sortedCards = this.sortedCards.filter((card:any) => card.id !== id)

    }

    getPriceList() {

        PriceService.priceList().then(res => (this.priceList = res.data.price_list))
    }

    getCardPriceList(folderId: string) {
        this.sortedList = this.priceList.filter((card: any) => folderId === card.folder_id)

    }



    getTreeItems() {
        PriceService.priceTree('12').then(res => this.treeItems = res.data.price)
    }


    addToCard(id: number) {

        this.priceList = this.priceList.map((card: any) => {
            if (id === +card.id) {
                card.cardCount = card.cardCount > 0 ? card.cardCount + 1 : 1

                return card
            }

            return card
        })
    }

    removeAllFromCard(id:number) {
        this.priceList = this.priceList.map((card: any) => {
            if (id === +card.id) {
                card.cardCount =  0
                return card
            }

            return card
        })
    }

    removeFromCard(id: number) {
        this.priceList = this.priceList.map((card: any) => {
            if (id === +card.id) {
                card.cardCount = card.cardCount > 0 ? card.cardCount - 1 : 0
                return card
            }

            return card
        })
    }

    createTree(tree: any) {
        const temp: any = []

        tree.map((el: { parent: any; }) => {
            !el.parent && temp.push(el)
        })

        temp.map((elParrent: any, index: any) => {
            tree.map((el: any) => {
                if (elParrent.folder_id === el.parent) {
                    temp[index] = {
                        ...temp[index],
                        children: !temp[index].children ? [el] : [...temp[index].children, el]
                    }
                }
            })
        })
        return temp
    }


}

export default new CardStore;