import { productsUrl } from "./constans/api.js";

document.getElementById("link-back").onclick = function () {
        location.href = "products.html";
    };

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
        <button class="add-to-cart">ADD TO CART</button>
        </div>`; 

        console.log(details); 

        const favButton = document.querySelector(".detailproducts button"); 
        console.log(event); 

        favButton.addEventListener("click", handleClick); 

        function handleClick() {
                console.log(event); 
        }
        

})(); 



