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
        document.querySelector(".duration").innerHTML = `<i class="fi fi-ss-clock-three"></i> <p>${anime.duration}</p>`;
        document.querySelector(".mal-rating").innerHTML = `<b>MAL score :</b>  ${anime.rating.mal}`;
        document.querySelector(".imdb-rating").innerHTML = `<b>IMDb rating :</b>  ${anime.rating.imdb}`;
        document.querySelector(".status").innerHTML = `<b>Status :</b>  ${anime.status}`;
        document.querySelector(".release").innerHTML = `<i class="fi fi-ss-calendar"></i><p>${anime.year}</p>`;
        document.querySelector(".recommended").innerHTML = `Similar to <p>${anime.name.english}</p>`;
        document.querySelector(".ss-details").innerHTML = `${anime.name.english}`;
        document.querySelector(".details").style.backgroundImage = `url(${anime.background}), url('https://i.ibb.co.com/hs6rfnX/images.jpg')`;

        // Populate genres with anchor tags, keeping them in the same line
        const genreTags = anime.genres.map(genre => 
            `<a href="results.html?genre=${encodeURIComponent(genre)}" >
                <i class="fi fi-ss-tags"></i><p>${genre}</p>
            </a>`
        ).join(" ");

        document.querySelector(".genre").innerHTML = `${genreTags}`;

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
            // Update the trailer link source
            document.querySelector("#trailer").href = anime.trailer;
            
            // Update the wiki link source
            document.querySelector("#wiki").href = anime.wiki;

            // Update the download button link
            document.querySelector(".details .download-btn").href = anime.download;

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







// Function to update the Language Section
async function updateLanguageSection() {
    const { name } = getURLParams();
    const animeData = await fetchAnimeData();

    const anime = animeData.find(anime => anime.name.english === name);

    if (anime) {
        const langContainer = document.querySelector(".lang");
        langContainer.innerHTML = "";

        const availableLanguages = [];
        if (anime.video.japanese && anime.video.japanese.toLowerCase() !== "n/a") availableLanguages.push("japanese");
        if (anime.video.english && anime.video.english.toLowerCase() !== "n/a") availableLanguages.push("english");
        if (anime.video.hindi && anime.video.hindi.toLowerCase() !== "n/a") availableLanguages.push("hindi");

        if (availableLanguages.length === 0) {
            langContainer.innerHTML = `<span><p class="na">not available</p></span>`;
        } else {
            if (availableLanguages.includes("japanese")) {
                const span = document.createElement("span");
                const icon = document.createElement("i");
                const p = document.createElement("p");

                icon.className = "fi fi-ss-subtitles";
                p.textContent = "1";

                span.appendChild(icon);
                span.appendChild(p);
                langContainer.appendChild(span);
            }

            if (availableLanguages.includes("english") || availableLanguages.includes("hindi")) {
                const span = document.createElement("span");
                const icon = document.createElement("i");
                const p = document.createElement("p");

                icon.className = "fi fi-ss-microphone";
                p.textContent = availableLanguages.includes("english") && availableLanguages.includes("hindi") ? "2" : "1";

                span.appendChild(icon);
                span.appendChild(p);
                langContainer.appendChild(span);
            }
        }
    } else {
        console.error("Anime not found");
    }
}

async function fetchAnimeData() {
    try {
        const response = await fetch("anime_data.json");
        const data = await response.json();
        return data.anime_data;
    } catch (error) {
        console.error("Error fetching anime data:", error);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    updateLanguageSection();
});




fetch('anime_data.json')
  .then(response => response.json())
  .then(data => {
    const container = document.querySelector('.container');
    
    const urlParams = new URLSearchParams(window.location.search);
    const currentAnimeName = urlParams.get('name');
    const currentAnimeGenres = urlParams.get('genre').split(', ');
    
    const currentAnime = data.anime_data.find(anime => anime.name.english === currentAnimeName);
    const currentAnimeStudio = currentAnime.studio;
    
    // Helper function to count genre matches
    const countGenreMatches = (animeGenres) => {
      return animeGenres.filter(genre => currentAnimeGenres.includes(genre)).length;
    };

    // Sort anime by matching studio first, then by genre matches
    let matchedAnime = data.anime_data.filter(anime => anime.name.english !== currentAnimeName);

    matchedAnime = matchedAnime.map(anime => {
      const genreMatches = countGenreMatches(anime.genres);
      const studioMatch = anime.studio === currentAnimeStudio ? 1 : 0;
      return { anime, genreMatches, studioMatch };
    });

    // Sort by studio match first, then genre matches
    matchedAnime.sort((a, b) => {
      if (a.studioMatch !== b.studioMatch) return b.studioMatch - a.studioMatch;
      return b.genreMatches - a.genreMatches;
    });

    // Limit to 6 anime, respecting studio and genre priorities
    matchedAnime = matchedAnime.slice(0, 6);

    // Create HTML for the cards
    let cardsHTML = '';
    matchedAnime.forEach(({ anime }) => {
      const queryParams = new URLSearchParams({
        name: anime.name.english,
        genre: anime.genres.join(", "),
      });

      cardsHTML += `
        <a class="card" href="details.html?${queryParams.toString()}">
          <span class="card-rating">
            <i class="fi fi-ss-star"></i><p>${anime.rating.mal}</p>
          </span>
          <img class="card-album" src="${anime.album}" alt="${anime.name.english}">
          <h5 class="card-name">${anime.name.english}</h5>
          <span class="card-duration">
            ${anime.duration}
          </span>
          <span class="card-genre">
            ${anime.genres.join(', ')}
          </span>
        </a>
      `;
    });

    if (matchedAnime.length === 0) {
      container.innerHTML = '<p>No matching results</p>';
    } else {
      container.innerHTML = cardsHTML;
    }
  })
  .catch(error => console.error('Error loading anime data:', error));
