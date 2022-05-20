import { productsUrl } from "./constans/api.js";

const queryString = document.location.search; 

const params = new URLSearchParams(queryString);

const id = params.get("id"); 

const detailProductsUrl =  productsUrl + id; 

console.log(detailProductsUrl); 


(async function() { 
        const response = await fetch(detailProductsUrl);
        const details = await response.json();

        const detailContainer = document.querySelector(".product-detail");

        detailContainer.innerHTML += `<div class="detailproducts">
        <h4>${details.title}</h4>
        <img src=${details.image.url}>
        <p>${details.description}</p>
        <p>Price: ${details.price}</p>
        <button class="cart"ADD TO CART</button>
        </div>`; 

        console.log(details); 
})(); 

document.getElementById("link-back").onclick = function () {
        location.href = "products.html";
    };