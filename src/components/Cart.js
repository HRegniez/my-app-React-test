import '../styles/Cart.css'
import ShoppingList from './ShoppingList';


function Cart() {
    const monsteraPrice = 8
    const ivyPrice = 10
    const flowerPrice = 15
    return (<div className="lpar-cart">
        <h2>Panier</h2>
        <ul>
        <li>Monstera : {monsteraPrice}€</li>
         <li>Lierre : {ivyPrice}€</li>
         <li>Fleurs : {flowerPrice}€</li>
        </ul>
          Total : {monsteraPrice + ivyPrice + flowerPrice }€
          <ShoppingList />
          </div>
          
        )
    }

    export default Cart