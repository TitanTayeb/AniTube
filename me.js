document.addEventListener("DOMContentLoaded", async () => {
    const container = document.querySelector(".container");

    // Get saved anime list from localStorage
    let savedAnimes = JSON.parse(localStorage.getItem("savedAnimes")) || [];

    if (savedAnimes.length === 0) {
        container.innerHTML = "<p>No Result</p>";
        return;
    }

    try {
        const response = await fetch("anime_data.json");
        const data = await response.json();
        const animeData = data.anime_data;

        let cardsHTML = "";

        savedAnimes.forEach(savedAnime => {
            // Find the full anime details from the data
            const anime = animeData.find(anime => anime.name.english === savedAnime.name);
            
            if (anime) {
                const queryParams = new URLSearchParams({
                    name: anime.name.english,
                    genre: anime.genres.join(", "),
                });

                // If the anime is upcoming, show the release year, otherwise show duration
                const info = anime.status.toLowerCase() === "upcoming" 
                    ? `<span class="card-release"><i class="fi fi-ss-calendar"></i><p>${anime.year}</p></span>`
                    : `<span class="card-duration"><i class="fi fi-ss-clock-three"></i><p>${anime.duration}</p></span>`;

                cardsHTML += `
                    <a class="card" href="details.html?${queryParams.toString()}">
                      <img class="card-album" src="${anime.album}" alt="${anime.name.english}">
                      <div class="details">
                        <h5 class="card-name">${anime.name.english}</h5>
                        ${info}
                        <span class="card-genre">
                          <i class="fi fi-ss-tags"></i><p>${anime.genres.join(', ')}</p>
                        </span>
                      </div>
                    </a>
                `;
            }
        });

        container.innerHTML = cardsHTML;
    } catch (error) {
        console.error("Error loading anime data:", error);
        container.innerHTML = "<p>Failed to load anime data.</p>";
    }
});








let touchStartX = 0;
        let touchEndX = 0;

        function handleGesture() {
            if (touchStartX - touchEndX > 100) {
                window.location.href = ".html";  // Swipe left
            } else if (touchEndX - touchStartX > 100) {
                window.location.href = "category.html";  // Swipe right
            }
        }

        document.addEventListener("touchstart", (e) => {
            touchStartX = e.touches[0].clientX;
        });

        document.addEventListener("touchend", (e) => {
            touchEndX = e.changedTouches[0].clientX;
            handleGesture();
        });