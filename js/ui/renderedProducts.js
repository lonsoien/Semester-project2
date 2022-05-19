export function renderProduct(json) {
    const resultContainer = document.querySelector(".container-products"); 
    resultContainer.innerHTML = ""; 

    json.forEach(function (product) {
        resultContainer.innerHTML += `<a class="products" href="productdetail.html?id=${product.id}">
        <h4>${product.title}</h4>
        <img src=${product.image.url}>
        <p>${product.description}</p>
        <p>Price: ${product.price}</p>
        </a>`; 
    });

}