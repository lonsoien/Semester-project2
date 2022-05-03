import { baseUrl } from "./api.js";

const productsUrl = baseUrl + "products"; 

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
            <img src="http://semesterproject2-louise.herokuapp.com/products/"${product.image.id} alt="${product.image.url}">
            <p>${product.description}</p>
            <p>Price: ${product.price}</p>
            </a>`; 
            console.log(product);
        });
    } catch (error){
        console.log(error); 
    }
})(); 