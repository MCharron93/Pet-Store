import { ProxyState } from "../AppState.js"
import { generateId } from "../Utils/GenerateId.js"

export default class Merchandise {
    constructor({ title, price, stock }) {
        this.title = title
        this.price = price
        this.stock = stock
        this.id = generateId()
    }

    get Template() {

        return /*html*/`
        <div class="col-3 p-2">

        <div class="card">
        <img src="https://placehold.it/200" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${this.title}</h5>
          <p class="card-text">${this.price}</p>
          <p class="itemStock">In stock: ${this.stock}</p>
        <button onclick="app.merchandiseController.addCart('${this.id}')">Add to Cart</button>
        </div>
      </div>
        </div>
        `
    }

    get Cart() {

        return /*html*/`
        <div class="col-3 p-2">

        <div class="card">
        <img src="https://placehold.it/200" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${this.title}</h5>
          <p class="card-text">${this.price}</p>
          <button onclick="app.merchandiseController.buyItem('${this.id}')"></button>
          </div>
        `
    }
}
