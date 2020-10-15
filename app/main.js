import MerchandiseController from "./Controllers/MerchandiseController.js"
import CartController from "./Controllers/CartController.js"
// import ValuesController from "./Controllers/ValuesController.js";

class App {
  merchandiseController = new MerchandiseController();

  cartController = new CartController()
}

window["app"] = new App();
