import { getExistingFavs } from "./utils/favsFunction.js";

const favInCart = getExistingFavs();

const cartContainer = document.querySelector(".container-products");

if(favInCart.length === 0) {
    cartContainer.innerHTML = "You shopping cart is currently empty!";
}

const cartPrice = document.querySelector(".cart-price"); 

let total = 0; 

favInCart.forEach((favourites) => {
    cartContainer.innerHTML += `<div class="detailproducts">
                <img src="${favourites.image}">
                 <h4>${favourites.title}</h4>
                 <p>${favourites.price}kr</p>
                </div>`;   

                total += parseInt(favourites.price);
                cartPrice.innerHTML = `<p>${total}</p>`
              
});


document.getElementById("link-back").onclick = function () {
    location.href = "products.html";
};