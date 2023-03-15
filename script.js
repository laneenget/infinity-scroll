
// Unsplash API
const count = 10;
const apiKey = '3328a6a54d08026bf3f10f849af885ba'
const apiUrl = `https:://flicker.photos.getPopular/?api_key=${apiKey}&per_page=${count}`;



// Get photos from Unsplash API
async function getPhotos() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        console.log(data);    
    } catch (error) {
        // catch error
    }
}

// On Load
getPhotos();