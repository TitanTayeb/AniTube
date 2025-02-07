document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".container");
  const searchInfo = document.querySelector(".search-info h4");

  const params = new URLSearchParams(window.location.search);
  const query = params.get("query");
  const genre = params.get("genre");

  fetch("anime_data.json")
    .then(response => response.json())
    .then(data => {
      let filteredAnime = [];

      if (query) {
  searchInfo.innerHTML = `Showing search results for ${query}`;
        filteredAnime = data.anime_data.filter(anime =>
          anime.name.english.toLowerCase().includes(query.toLowerCase()) ||
          anime.name.japanese.toLowerCase().includes(query.toLowerCase())
        );
      } else if (genre) {
  searchInfo.innerHTML = `Showing movies from ${genre} genre`;
        filteredAnime = data.anime_data.filter(anime =>
          anime.genres.some(g => g.toLowerCase() === genre.toLowerCase())
        );
      }

      if (filteredAnime.length === 0) {
  container.innerHTML = '<p class="no-result"><i class="fi fi-ss-drawer-empty"></i>No Results</p>';
  return;
}

      let cardsHTML = "";

      filteredAnime.forEach(anime => {
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

      container.innerHTML = cardsHTML;
    })
    .catch(error => console.error("Error loading anime data:", error));
});









let touchStartX = 0;
        let touchEndX = 0;

        function handleGesture() {
            if (touchStartX - touchEndX > 100) {
                window.location.href = "category.html";  // Swipe left
            } else if (touchEndX - touchStartX > 100) {
                window.location.href = "Home.html";  // Swipe right
            }
        }

        document.addEventListener("touchstart", (e) => {
            touchStartX = e.touches[0].clientX;
        });

        document.addEventListener("touchend", (e) => {
            touchEndX = e.changedTouches[0].clientX;
            handleGesture();
        });
        
