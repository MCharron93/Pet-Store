import { ProxyState } from "../AppState.js";
import { cartService } from "../Services/CartService.js"


function _drawCart() {
  // console.log("cart connected")

  let template = ''
  let cart = ProxyState.cart
  cart.forEach(c => template += c.Cart)
  document.getElementById('cart').innerHTML = template
}


export default class CartController {
  constructor() {
    _drawCart()
    ProxyState.on("cart", _drawCart)
  }


}