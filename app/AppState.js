// import Value from "./Models/Value.js"
// import Cart from "./Models/Cart.js"
import Merchandise from "./Models/Merchandise.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {
  // /** @type {Value[]} */
  // values = []

  /**@type {Merchandise[]} */
  merchandise = [new Merchandise({ title: 'Cat', price: 20, stock: 10 }), new Merchandise({ title: "Dog", price: 50, stock: 10 }), new Merchandise({ title: "Fish", price: 15, stock: 10 })]

  // /**@type {Cart[]} */
  cart = []

  cashOnHand = 100

}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
