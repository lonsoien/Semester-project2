
 export function getExistingFavs () {
    const favs = localStorage.getItem("favorites");
    console.log(favs); 

    if (favs === null) {
        return []; 
    }
    else {
        return JSON.parse(favs); 
    }
}