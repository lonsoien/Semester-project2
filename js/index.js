import { homeUrl } from "./api.js";

const bannerUrl = homeUrl + "home"; 

(async function () {
    const bannerImg = document.querySelector(".container"); 

    try {
        const response = await fetch(bannerUrl);
        const json = await response.json();
        console.log(json); 

        bannerImg.innerHTML = ""; 

        json.forEach(function (banner) {
            bannerImg.innerHTML += `
            <div>${banner.image}</div>
            <p>${banner.id}</p>`; 
        });
    } catch (error){
        console.log(error);
    } 
})(); 

