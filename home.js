document.addEventListener("DOMContentLoaded", () => {
    const carousel = document.querySelector(".carousel");
    const prevButton = document.querySelector(".prev-btn");
    const nextButton = document.querySelector(".next-btn");
    const numContainers = 10;
    let currentIndex = 0;
    let autoSlideInterval;

    async function loadCarousel() {
        const response = await fetch("anime_data.json");
        const data = await response.json();
        const animeData = data.anime_data;

        // Filter anime with status "completed"
        const completedAnimeData = animeData.filter(anime => anime.status === "completed");

        // Get unique anime data from the completed animes
        const uniqueAnimeData = getUniqueAnimeData(completedAnimeData, numContainers);

        populateCarousel(uniqueAnimeData);
        startAutoSlide();
    }

    function getUniqueAnimeData(animeData, num) {
        const shuffled = [...animeData].sort(() => Math.random() - 0.5);
        return shuffled.slice(0, num);
    }

    function populateCarousel(uniqueAnimeData) {
        carousel.innerHTML = "";

        uniqueAnimeData.forEach((anime) => {
            const container = document.createElement("div");
            container.classList.add("carousel-container");
            container.style.backgroundImage = `url(${anime.banner})`;

            container.innerHTML = `
                <a href="#" class="carousel-card">
                    <img class="card-album" src="${anime.album}" alt="${anime.name.english}" loading="lazy">
                    <div class="card-info">
                        <h3 class="card-name">${anime.name.english}</h3>
                        <span class="card-plot">${anime.plot}</span>
                        <span class="card-duration"><i class="fi fi-ss-clock-three"></i><p>${anime.duration}</p></span>
                        <span class="card-genre">
                           <i class="fi fi-ss-tags"></i> <p>${anime.genres.join(", ")}</p>
                        </span>
                    </div>
                </a>`;

            carousel.appendChild(container);

            const carouselCard = container.querySelector(".carousel-card");
            carouselCard.addEventListener("click", (e) => {
                e.preventDefault();
                const queryParams = new URLSearchParams({
                    name: anime.name.english,
                    genres: anime.genres.join(", "),
                });

                window.location.href = `details.html?${queryParams.toString()}`;
            });
        });

        updateCarouselBackground();
    }

    function updateCarouselBackground() {
        const containers = document.querySelectorAll(".carousel-container");
        const containerWidth = carousel.offsetWidth;
        const scrollPosition = carousel.scrollLeft;

        const newIndex = Math.round(scrollPosition / containerWidth);

        if (newIndex >= 0 && newIndex < containers.length) {
            carousel.style.backgroundImage = containers[newIndex].style.backgroundImage;
        }
    }

    function scrollToContainer(index) {
        const containerWidth = carousel.offsetWidth;
        carousel.scrollTo({
            left: containerWidth * index,
            behavior: "smooth",
        });
        updateCarouselBackground();
    }

    function loopCarousel() {
        currentIndex = (currentIndex + 1) % numContainers;
        scrollToContainer(currentIndex);
    }

    prevButton.addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + numContainers) % numContainers;
        scrollToContainer(currentIndex);
    });

    nextButton.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % numContainers;
        scrollToContainer(currentIndex);
    });

    let startX;

    carousel.addEventListener("touchstart", (e) => {
        startX = e.touches[0].clientX;
        clearInterval(autoSlideInterval);
    });

    carousel.addEventListener("touchend", (e) => {
        const endX = e.changedTouches[0].clientX;
        const diffX = startX - endX;

        if (diffX > 50) {
            nextButton.click();
        } else if (diffX < -50) {
            prevButton.click();
        }

        autoSlideInterval = setInterval(loopCarousel, 5000);
    });

    carousel.addEventListener("scroll", updateCarouselBackground);

    function startAutoSlide() {
        autoSlideInterval = setInterval(loopCarousel, 5000);
    }

    loadCarousel();
});



/* code for upcoming anime */

fetch('anime_data.json')
  .then(response => response.json())
  .then(data => {
    const upcomingBox = document.querySelector('.upcoming-box');
    
    // Filter anime with status "upcoming"
    const upcomingAnimes = data.anime_data.filter(anime => anime.status === "upcoming");

    // Iterate over the filtered upcoming anime data and create cards
    upcomingAnimes.forEach(anime => {
      const upcomingCard = document.createElement('div');
      upcomingCard.classList.add('upcoming-card');
      
      upcomingCard.addEventListener("click", (e) => {
        e.preventDefault();

        // Create query parameters using anime's name and genres
        const queryParams = new URLSearchParams({
            name: anime.name.english,
            genre: anime.genres.join(", "), // Join the genres into a string
        });

        // Redirect to the details page with query parameters
        window.location.href = `details.html?${queryParams.toString()}`;
      });

      // Set the innerHTML for the upcoming card
      upcomingCard.innerHTML = `
        <img class="upcoming-img" src="${anime.album}" alt="${anime.name.english}">
        <span class="upcoming-release">
          <i class="fi fi-ss-calendar-clock"></i>
          <p class="release-date">${anime.year}</p>
        </span>
      `;
      
      // Append the card to the upcoming box
      upcomingBox.appendChild(upcomingCard);
    });
  })
  .catch(error => console.error('Error fetching anime data:', error));

// Smooth scrolling setup
const scrollContainer = document.querySelector('.upcoming-box');
let isScrolling;

scrollContainer.addEventListener('scroll', function() {
  window.clearTimeout(isScrolling);
  isScrolling = setTimeout(function() {
    // You can add logic here to load more cards if needed
  }, 500);
});
/* upcoming anime code end */




// Fetch the anime data from the JSON file
fetch('anime_data.json')
  .then(response => response.json())
  .then(data => {
    const trendingBox = document.querySelector('.trending-box');
    const trendingMovies = data.anime_data.filter(anime => anime.trending === true); // Filter only trending anime

    // If there are no trending anime, show a message
    if (trendingMovies.length === 0) {
      trendingBox.innerHTML = '<p>No trending anime available</p>';
      return;
    }

    // Generate the HTML for the trending cards
    let trendingCardsHTML = '';

    // Loop through the trending movies and create the HTML for each card
    trendingMovies.slice(0, 5).forEach(anime => {
    
    
    const queryParams = new URLSearchParams({
        name: anime.name.english,
        genre: anime.genres.join(", "), // Join the genres into a string
      });
    
    
    
      trendingCardsHTML += `
        <a class="trending-card" href="details.html?${queryParams.toString()}">
          <img class="trending-album" src="${anime.album}" alt="${anime.name.english}">
          <div class="trending-details">
            <h5 class="trending-name">${anime.name.english}</h5>
            <span class="trending-studio">
              <i class="fi fi-ss-camera-movie"></i><p>${anime.studio}</p>
            </span>
            <span class="trending-duration">
              <i class="fi fi-ss-clock-three"></i><p>${anime.duration}</p>
            </span>
            <span class="trending-genre">
              <i class="fi fi-ss-tags"></i><p>${anime.genres.join(', ')}</p>
            </span>
          </div>
        </a>
      `;
    });

    // Insert the generated HTML into the .trending-box
    trendingBox.innerHTML = trendingCardsHTML;
  })
  .catch(error => console.error('Error loading anime data:', error));





// Fetch the anime data from the JSON file
fetch("anime_data.json")
  .then((response) => response.json())
  .then((data) => {
    const topBox = document.querySelector(".top-box");
    const imdbButton = document.querySelector(".sort-imdb");
    const malButton = document.querySelector(".sort-mal");

    let sortBy = "imdb"; // Default sorting by IMDb rating

    function renderTopAnime(sortKey) {
      // Filter only completed anime and sort by the selected rating key
      let topMovies = data.anime_data
        .filter((anime) => anime.status.toLowerCase() === "completed")
        .sort((a, b) => parseFloat(b.rating[sortKey]) - parseFloat(a.rating[sortKey]))
        .slice(0, 10); // Get top 10 anime

      // If there are no completed anime, show a message
      if (topMovies.length === 0) {
        topBox.innerHTML = "<p>No completed top anime available</p>";
        return;
      }

      // Generate the HTML for the top cards
      let topCardsHTML = topMovies
        .map((anime, index) => {
          // Create query parameters using anime's name and genres
          const queryParams = new URLSearchParams({
            name: anime.name.english,
            genre: anime.genres.join(", "), // Join the genres into a string
          });

          return `
            <a class="top-card" href="details.html?${queryParams.toString()}">
              <span class="top-rank ${index < 3 ? "top-rank-highlight" : ""}">${index + 1}</span>
              <img class="top-album" src="${anime.album}" alt="${anime.name.english}">
              <div class="top-details">
                <h5 class="top-name">${anime.name.english}</h5>
                <span class="top-rating">
                  <i class="fi fi-ss-star"></i> ${anime.rating[sortKey]}
                </span>
              </div>
            </a>
          `;
        })
        .join("");

      // Insert the generated HTML into the .top-box
      topBox.innerHTML = topCardsHTML;

      // Update button styles
      updateButtonStyles(sortKey);
    }

    function updateButtonStyles(activeKey) {
      if (activeKey === "imdb") {
        imdbButton.style.backgroundColor = "#F7B801";
        malButton.style.backgroundColor = "";
      } else {
        malButton.style.backgroundColor = "#118AB2";
        imdbButton.style.backgroundColor = "";
      }
    }

    // Initial rendering with IMDb rating
    renderTopAnime(sortBy);

    // Event listeners to switch sorting between IMDb and MAL
    imdbButton.addEventListener("click", () => {
      sortBy = "imdb";
      renderTopAnime(sortBy);
    });

    malButton.addEventListener("click", () => {
      sortBy = "mal";
      renderTopAnime(sortBy);
    });
  })
  .catch((error) => console.error("Error loading anime data:", error));
  
  
  
  
  
  
  
  
let touchStartX = 0;
let touchEndX = 0;

function handleGesture() {
    if (touchStartX - touchEndX > 100) {
        window.location.href = "library.html";  // Swipe left
    } else if (touchEndX - touchStartX > 100) {
        window.location.href = "#";  // Swipe right
    }
}

// Detect touch start on the document
document.addEventListener("touchstart", (e) => {
    // Only detect swipe if it's not in the excluded areas
    if (e.target.closest(".carousel-wrapper")) {
        return;
    }

    touchStartX = e.touches[0].clientX;
});

// Detect touch end on the document
document.addEventListener("touchend", (e) => {
    if (e.target.closest(".carousel-wrapper")) {
        return;  // Skip if inside excluded areas
    }

    touchEndX = e.changedTouches[0].clientX;
    handleGesture();
});