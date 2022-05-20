import { getExistingFavs } from "./utils/favsFunction.js";

const addedInCart = getExistingFavs();
console.log(addedInCart);

const cartContainer = document.querySelector(".cart-container");

if(addedInCart.length === 0) {
    cartContainer.innerHTML = "Empty Cart!";
}

productsCart.forEach((products) => {

    cartContainer.innerHTML += `   
                <div class="cart-products">
                <div class="cart-header">
                <p>Products In Cart<p>
                <p>Qty<p>
                <p>Price<p> 
                </div>

                <div class="cart-productsInCart">
                <img src="${product.image}" class="cart-image">
                 <h4>${product.title}</h4>
                 <h4>${product.price}kr</h4>
                </div>
                                            
              </div>`;
});





