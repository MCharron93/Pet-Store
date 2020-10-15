import { ProxyState } from "../AppState.js";
import Merchandise from "../Models/Merchandise.js";

class MerchandiseService {
  constructor() {
    // console.log("Service connected")
    // console.log(temp)
  }

  addCart(id) {
    let tempItem = ProxyState.merchandise.find(i => i.id == id)
    ProxyState.cart = [...ProxyState.cart, tempItem]
    // console.log(ProxyState.cart)
  }
  buyItem(id) {
    //cash
    //stock
    //delete from cart

    let tempItem = ProxyState.merchandise.find(i => i.id == id)
    let cashOnHand = ProxyState.cashOnHand
    let price = parseInt(tempItem.price)
    if (ProxyState.cashOnHand > price) {
      //buy item
      cashOnHand -= price
      tempItem.stock--
      // ProxyState.cart.filter(c => c.id == id)

    }

    console.log(tempItem.stock);
  }
}

export const merchandiseService = new MerchandiseService()
