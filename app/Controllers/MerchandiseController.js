import { ProxyState } from "../AppState.js";
import { merchandiseService } from "../Services/MerchandiseService.js";


//Private
function _draw() {
  // console.log("Controller Connected")

  let template = ''
  let merch = ProxyState.merchandise
  merch.forEach(m => template += m.Template)
  document.getElementById('merchandise').innerHTML = template
}


//Public
export default class MerchandiseController {
  constructor() {
    ProxyState.on("merchandise", _draw);
    _draw()

  }

  addCart(id) {
    merchandiseService.addCart(id)
  }

  buyItem(id) {
    merchandiseService.buyItem(id)
  }
}
