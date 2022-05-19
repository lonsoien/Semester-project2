export function searchProducts() {
    search.onkeyup = function (event) {
        console.log(event); 
    }
    
    const searchValue = event.target.value.trim().toLowerCase(); 
    
    const filteredProducts = productsUrl.filter(function (product) {
        if (product.title.toLowerCase().startsWith(searchValue)) {
            return true; 
        }
    }); 
    
    console.log(filteredProducts); 
}
