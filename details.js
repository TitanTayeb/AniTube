// Function to get URL parameters
function getURLParams() {
    const params = new URLSearchParams(window.location.search);
    return {
        name: params.get("name"),
        genres: params.get("genres") ? params.get("genres").split("%2C+") : []
    };
}

// Function to fetch anime data
async function fetchAnimeData() {
    try {
        const response = await fetch("anime_data.json");
        const data = await response.json();
        return data.anime_data;
    } catch (error) {
        console.error("Error fetching anime data:", error);
    }
}

// Function to update the page content
async function updatePageContent() {
    const { name } = getURLParams();
    const animeData = await fetchAnimeData();

    // Find the matching anime by English name
    const anime = animeData.find(anime => anime.name.english === name);

    if (anime) {
        document.querySelector(".about-name").textContent = anime.name.english;
        document.querySelector(".anime-album").src = anime.album;
        document.querySelector(".banner-img").src = anime.banner;

        // Fill in the details section
        document.querySelector(".name-en").innerHTML = `<b>English name :</b> ${anime.name.english}`;
        document.querySelector(".name-jp").innerHTML = `<b>Japanese :</b>  ${anime.name.japanese}`;
        document.querySelector(".duration").innerHTML = `<b>Duration :</b>  ${anime.duration}`;
        document.querySelector(".mal-rating").innerHTML = `<b>MAL score :</b>  ${anime.rating.mal}`;
        document.querySelector(".imdb-rating").innerHTML = `<b>IMDb rating :</b>  ${anime.rating.imdb}`;
        document.querySelector(".status").innerHTML = `<b>Status :</b>  ${anime.status}`;
        document.querySelector(".release").innerHTML = `<b>Release year :</b>  ${anime.year}`;
        document.querySelector(".details").style.backgroundImage = `url(${anime.background})`;

        // Populate genres with anchor tags, keeping them in the same line
        const genreTags = anime.genres.map(genre => 
            `<a href="results.html?genre=${encodeURIComponent(genre)}" style="display: inline-block; margin-right: 5px;">
                <i class="fi fi-ss-tags"></i>${genre}
            </a>`
        ).join(" ");

        document.querySelector(".genre").innerHTML = `<b>Genres :</b>    ${genreTags}`;

        // Studio and writer links
        document.querySelector(".studio").innerHTML = `<b>Studio :</b>    <a href="collection.html?type=studio&name=${encodeURIComponent(anime.studio)}">${anime.studio}</a>`;
        document.querySelector(".writer").innerHTML = `<b>Writer :</b>    <a href="collection.html?type=writer&name=${encodeURIComponent(anime.writer)}">${anime.writer}</a>`;

        // Update the Watch Now button link
        document.querySelector(".watch-now").onclick = () => {
            window.location.href = `player.html?name=${encodeURIComponent(anime.name.english)}&genres=${encodeURIComponent(anime.genres.join(", "))}`;
        };
    } else {
        console.error("Anime not found");
    }
}

// Function to load the plot description
async function loadPlot() {
    try {
        const params = new URLSearchParams(window.location.search);
        const animeName = params.get("name");

        const response = await fetch("anime_data.json");
        const data = await response.json();
        const anime = data.anime_data.find(anime => anime.name.english === animeName);

        if (anime && anime.plot) {
            const plotElement = document.querySelector(".description #plot");
            const viewMoreBtn = document.querySelector(".description #view-more");

            const fullPlot = anime.plot;
            const maxLength = 150;
            let isExpanded = false;

            function updatePlotDisplay() {
                plotElement.textContent = isExpanded 
                    ? fullPlot 
                    : fullPlot.substring(0, maxLength) + (fullPlot.length > maxLength ? "..." : "");

                viewMoreBtn.textContent = isExpanded ? "View Less" : "View More";
                viewMoreBtn.style.display = fullPlot.length > maxLength ? "inline-block" : "none";
            }

            viewMoreBtn.addEventListener("click", () => {
                isExpanded = !isExpanded;
                updatePlotDisplay();
            });

            updatePlotDisplay();
        } else {
            document.querySelector(".description #plot").textContent = "Plot not available.";
        }
    } catch (error) {
        console.error("Error fetching plot:", error);
        document.querySelector(".description #plot").textContent = "Failed to load plot.";
    }
}

// Function to update the media section (trailer, download, screenshots)
async function updateMediaSection() {
    try {
        const params = new URLSearchParams(window.location.search);
        const animeName = params.get("name");

        const response = await fetch("anime_data.json");
        const data = await response.json();

        const anime = data.anime_data.find(anime => anime.name.english === animeName);

        if (anime) {
            // Update the trailer iframe source
            document.querySelector("#trailer").href = anime.trailer;

            // Update the download button link
            document.querySelector(".download-btn").href = anime.download;

            // Clear previous screenshots
            const screenshotsContainer = document.querySelector(".screenshots");
            screenshotsContainer.innerHTML = "";

            // Populate the screenshots section with new images
            anime.screenshots.forEach(screenshot => {
                const img = document.createElement("img");
                img.src = screenshot;
                img.alt = "Screenshot";
                img.loading = "lazy";
                screenshotsContainer.appendChild(img);
            });
        } else {
            console.error("Anime not found");
        }
    } catch (error) {
        console.error("Error fetching anime data:", error);
    }
}

// Ensure all functions run after the page is loaded
document.addEventListener("DOMContentLoaded", () => {
    updatePageContent();
    loadPlot();    
    updateMediaSection();
});






document.querySelector(".share").addEventListener("click", async () => {
    const animeTitle = document.querySelector(".about-name").textContent || "Check this out!";
    
    if (navigator.share) {
        try {
            await navigator.share({
                title: animeTitle,
                url: window.location.href
            });
            console.log("URL shared successfully!");
        } catch (error) {
            console.error("Error sharing:", error);
        }
    } else {
        alert("Your device does not support the share feature.");
    }
});






document.addEventListener("DOMContentLoaded", async () => {
    const saveBtn = document.querySelector(".save");
    const { name } = getURLParams();
    const animeData = await fetchAnimeData();
    
    // Find anime by name
    const anime = animeData.find(anime => anime.name.english === name);

    if (anime) {
        checkSavedAnime(anime);
    }

    saveBtn.addEventListener("click", () => {
        toggleSaveAnime(anime);
    });
});

// Function to check if the anime is saved and update button state
function checkSavedAnime(anime) {
    let savedAnimes = JSON.parse(localStorage.getItem("savedAnimes")) || [];
    const isSaved = savedAnimes.some(saved => saved.name === anime.name.english);

    if (isSaved) {
        document.querySelector(".save").classList.add("active");
    } else {
        document.querySelector(".save").classList.remove("active");
    }
}

// Function to toggle anime save/unsave
function toggleSaveAnime(anime) {
    let savedAnimes = JSON.parse(localStorage.getItem("savedAnimes")) || [];
    const animeIndex = savedAnimes.findIndex(saved => saved.name === anime.name.english);

    if (animeIndex > -1) {
        // Remove the anime if already saved
        savedAnimes.splice(animeIndex, 1);
        document.querySelector(".save").classList.remove("active");
    } else {
        // Save the anime
        savedAnimes.push({
            name: anime.name.english,
            genres: anime.genres
        });
        document.querySelector(".save").classList.add("active");
    }

    // Store updated saved animes in localStorage
    localStorage.setItem("savedAnimes", JSON.stringify(savedAnimes));
}

// Function to get URL parameters
function getURLParams() {
    const params = new URLSearchParams(window.location.search);
    return {
        name: params.get("name"),
        genres: params.get("genres") ? params.get("genres").split("%2C+") : []
    };
}

// Function to fetch anime data from JSON
async function fetchAnimeData() {
    try {
        const response = await fetch("anime_data.json");
        const data = await response.json();
        return data.anime_data;
    } catch (error) {
        console.error("Error fetching anime data:", error);
        return [];
    }
}