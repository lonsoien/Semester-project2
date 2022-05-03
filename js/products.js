import { productUrl } from "./api.js";

const productsUrl = productUrl + "products"; 

(async function () {
    const resultContainer = document.querySelector(".container-products"); 

    try {
        const response = await fetch(productsUrl);
        const json = await response.json(); 
        console.log(json); 
         
        resultContainer.innerHTML = ""; 

        json.forEach(function (product) {
            resultContainer.innerHTML += `<a class="product" href="productdetail.html?id=${product.id}">
            <h4>${product.title}</h4>
            <img src=http://semesterproject2-louise.herokuapp.com/products${product.image.url} alt="${product.image.alternativeText}">
            <p>${product.description}</p>
            <p>${product.price}</p>
            </a>`; 
            console.log(product);
        });
    } catch (error){
        console.log(error); 
    }
})(); 