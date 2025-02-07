fetch('anime_data.json')
  .then(response => response.json())
  .then(data => {
    const container = document.querySelector('.container');

    const completedAnime = data.anime_data.filter(anime => anime.status === 'completed');

    if (completedAnime.length === 0) {
      container.innerHTML = '<p>No Result</p>';
      return;
    }

    let cardsHTML = '';

    completedAnime.forEach(anime => {
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
  .catch(error => console.error('Error loading anime data:', error));







fetch("anime_data.json")
  .then(response => response.json())
  .then(data => {
    const container = document.querySelector(".container");
    const genreContainer = document.querySelector(".filter-genre");
    const completedAnime = data.anime_data.filter(anime => anime.status === "completed");

    if (completedAnime.length === 0) {
      container.innerHTML = "<p>No Result</p>";
      return;
    }

    // Generate unique genres
    let allGenres = new Set();
    completedAnime.forEach(anime => {
      anime.genres.forEach(genre => allGenres.add(genre));
    });

    // Create genre checkboxes
allGenres.forEach(genre => {
  const wrapper = document.createElement("div");
  wrapper.classList.add("genre-option");

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.classList.add("genre-checkbox");
  checkbox.value = genre;
  checkbox.id = genre;

  const label = document.createElement("label");
  label.setAttribute("for", genre);
  label.textContent = genre;

  wrapper.appendChild(checkbox);
  wrapper.appendChild(label);
  genreContainer.appendChild(wrapper);
});


const clearButton = document.querySelector(".clear-filter");

// Function to clear filters
clearButton.addEventListener("click", () => {
  document.querySelectorAll(".genre-checkbox").forEach(checkbox => {
    checkbox.checked = false;
  });
  document.querySelector(".filter-rating .active")?.classList.remove("active");
  renderCards(completedAnime);
});


    // Function to render anime cards
    function renderCards(filteredAnime) {
      if (filteredAnime.length === 0) {
        container.innerHTML = "<p>No Result</p>";
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
            ${anime.genres.join(' • ')}
          </span>
        </a>
        `;
      });

      container.innerHTML = cardsHTML;
    }

    // Function to filter anime by selected genres
    function filterCards() {
      const selectedGenres = Array.from(document.querySelectorAll(".genre-checkbox:checked"))
        .map(checkbox => checkbox.value);

      let filteredAnime = completedAnime.filter(anime =>
        selectedGenres.every(genre => anime.genres.includes(genre))
      );

      renderCards(filteredAnime);
    }

    // Event listener for genre checkboxes
    document.querySelectorAll(".genre-checkbox").forEach(checkbox => {
      checkbox.addEventListener("change", () => {
        filterCards();
      });
    });

    // Sorting function based on rating
    function sortAnime(order) {
      const selectedGenres = Array.from(document.querySelectorAll(".genre-checkbox:checked"))
        .map(checkbox => checkbox.value);

      let filteredAnime = completedAnime.filter(anime =>
        selectedGenres.every(genre => anime.genres.includes(genre))
      );

      if (order === "top-rated") {
        filteredAnime.sort((a, b) => parseFloat(b.rating.imdb) - parseFloat(a.rating.imdb));
      } else if (order === "underrated") {
        filteredAnime.sort((a, b) => parseFloat(a.rating.imdb) - parseFloat(b.rating.imdb));
      }

      renderCards(filteredAnime);
    }

    // Event listeners for sorting buttons
    document.querySelectorAll(".filter-rating button").forEach(button => {
      button.addEventListener("click", () => {
        document.querySelector(".filter-rating .active")?.classList.remove("active");
        button.classList.add("active");

        const sortType = button.dataset.sort;
        sortAnime(sortType);
      });
    });

    // Initial rendering of all anime
    renderCards(completedAnime);
  })
  .catch(error => console.error("Error loading anime data:", error));
  



  
    

let filterButton = document.querySelector(".filter-btn");
let filterHeader = document.querySelector(".filter-header");
let filter = document.querySelector(".filter");

const headerHeight = window.getComputedStyle(filterHeader).height;

filter.style.maxHeight = headerHeight;

filterButton.onclick = function () {
  filter.classList.toggle("active");

  if (filter.classList.contains("active")) {
    filter.style.maxHeight = "1000px";
  } else {
    filter.style.maxHeight = headerHeight;
  }
};








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




