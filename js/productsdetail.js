import { productsUrl } from "./constans/api.js";
import { getExistingFavs } from "./utils/favsFunction.js"; 

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
        <button class="add-to-cart" data-title="${details.title}" data-image="${details.image.url}" data-price="${details.price}">ADD TO CART</button>
        </div>`; 

        console.log(details); 

        const favButton = document.querySelector(".detailproducts button");  

        favButton.addEventListener("click", handleClick); 

        function handleClick() {
                this.classList.toggle("add-to-cart");
                
                const title = this.dataset.title;
                const image = this.dataset.image;
                const price = this.dataset.price; 
                

                const currentFavs = getExistingFavs();
                
                const productExists = currentFavs.find(function(fav) {
                        return fav.title === title; 
                }); 

                if (productExists === undefined) {
                        const product = {title: title, image: image, price: price};
                        currentFavs.push(product);
                        saveFavs(currentFavs);
                }  
                else {
                        const newFavs = currentFavs.filter(fav => fav.title !== title);
                        saveFavs(newFavs); 
                }
        }

        function getExistingFavs () {
                const favs = localStorage.getItem("favorites");
                console.log(favs); 

                if (favs === null) {
                        return []; 
                }
                else {
                        return JSON.parse(favs); 
                }
        }

        function saveFavs(favs) {
                localStorage.setItem("favorites", JSON.stringify(favs)); 
        }


})(); 



