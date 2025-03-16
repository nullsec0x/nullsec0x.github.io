let displayedMemes = []; 

async function generateMeme() {
    try {
        const response = await fetch("https://meme-api.com/gimme/memes");
        const data = await response.json();

        if (displayedMemes.includes(data.url)) {
            console.log("Meme already displayed, fetching new meme...");
            generateMeme();
        } else {
            displayedMemes.push(data.url);

            
            if (data.url.endsWith(".jpg") || data.url.endsWith(".png") || data.url.endsWith(".gif")) {
                document.getElementById("meme-img").src = data.url;
                document.getElementById("meme-title").textContent = data.title;
            } else {
                generateMeme();
            }
        }
    } catch (error) {
        console.error("Error fetching meme:", error);
        document.getElementById("meme-title").textContent = "Failed to load meme 😢";
    }
}
