import { getExistingFavs } from "./utils/favsFunction.js";

const addedInCart = getExistingFavs();

console.log(addedInCart);

const cartContainer = document.querySelector(".container-products");

if(addedInCart.length === 0) {
    cartContainer.innerHTML = "Empty Cart!";
}

addedInCart.forEach((favorites) => {
    cartContainer.innerHTML += `<div class="detailproducts">
                <img src="${favorites.image}">
                 <h4>${favorites.title}</h4>
                 <p>${favorites.price}kr</p>
                </div>`                                          
              
});



/*
<div class="cart-products">
<div class="cart-header">
<p>Products In Cart<p>
<p>Qty<p>
<p>Price<p> 
</div> </p>

*/

