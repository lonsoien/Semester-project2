
const bannerImg = document.querySelector(".hero-banner"); 

const url = "http://semesterproject2-louise.herokuapp.com/home"; 

async function fetchBanner() {
        const response = await fetch(url);
        const json = await response.json();
        
        console.log(json); 

        bannerImg.innerHTML += `<div class="hero-banner">
        <img src="https://res.cloudinary.com/ds11k4hlu/image/upload/v1650892531/small_large_jakob_owens_Jz_J_Syb_P_Fb3s_unsplash_0840f6de0c_04bc925498.jpg"${json.hero_banner.url} alt="hero banner image">
        </div>`; 
    }

    fetchBanner(); 

