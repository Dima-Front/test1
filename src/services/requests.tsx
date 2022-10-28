import axios from "axios";


export class PriceService {
    static async priceList () {
        return await axios.get(`https://himinfo.net/cl/test/api/?PriceList`)
    }
    static async priceTree (id: any) {
        return await axios.get(`https://himinfo.net/cl/test/api/?PriceTree=${encodeURIComponent(id)}`)
    }

}

