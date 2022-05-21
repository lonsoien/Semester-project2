import { getExistingFavs } from "./utils/favsFunction.js";

const addedInCart = getExistingFavs();

const clearButton = document.querySelector("#clear");

if(addedInCart.length === 0) {
    cartContainer.innerHTML = "You shopping cart is currently empty!";
}

const cartContainer = document.querySelector(".container-products");

addedInCart.forEach((favourites) => {
    cartContainer.innerHTML += `<div class="detailproducts">
                <img src="${favourites.image}">
                 <h4>${favourites.title}</h4>
                 <p>${favourites.price}kr</p>
                </div>`                                    
              
});


document.getElementById("link-back").onclick = function () {
    location.href = "products.html";
};



/*
<div class="cart-products">
<div class="cart-header">
<p>Products In Cart<p>
<p>Qty<p>
<p>Price<p> 
</div> </p>

*/

