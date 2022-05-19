 import { baseUrl } from "./constans/api.js";
 import { searchProducts } from "./searchProducts.js";
 import { renderProduct } from "./renderedProducts.js";

const productsUrl = baseUrl + "products/"; 

async function getProducts() {

    try {
        const response = await fetch(productsUrl);
        const json = await response.json(); 
        console.log(json); 

        searchProducts(json); 
        renderProduct(json); 

    } catch (error){
        console.log(error); 
    }
}
getProducts();
