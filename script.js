document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('anime-container');
    const genreSpans = document.querySelectorAll('.Genre span');
    const typeButtons = document.querySelectorAll('.type button');
    const selectedGenreBox = document.querySelector('.selected-genre');
    const selectedGenreText = document.getElementById('selected-genre-text');
    const clearGenreButton = document.getElementById('clear-genre');
    const searchInput = document.querySelector('.engine input[type="search"]');
    const searchResults = document.querySelector('.search-results');
    const selectedSearchBox = document.querySelector('.selected-search');
    const selectedSearchText = document.getElementById('selected-search-text');
    const clearSearchButton = document.getElementById('clear-search');
    const body = document.querySelector('.body');
    
    
window.onload = function () {
    const carousel = document.querySelector('.carousel');
    const prevButton = document.querySelector('.carousel-prev');
    const nextButton = document.querySelector('.carousel-next');
    const numContainers = 10;  // Number of carousel containers
    let currentIndex = 0;
    let autoSlideInterval;

    // Shuffle function to randomize anime data
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    // Create a unique set of anime for carousel containers
    function getUniqueAnimeData(animeData, num) {
        const shuffled = shuffleArray([...animeData]); // Clone and shuffle
        return shuffled.slice(0, num); // Take only the first `num` elements
    }

    function createCarouselContainer(animeData) {
        const container = document.createElement('div');
        container.classList.add('carousel-container');
        container.style.backgroundImage = `url(${encodeURI(animeData.img)})`;

        const card = document.createElement('div');
        card.classList.add('carousel-card');

        const img = document.createElement('img');
        img.classList.add('slider-img');
        img.src = encodeURI(animeData.img);
        img.alt = animeData.name;

        const slider = document.createElement('div');
        slider.classList.add('slider');

        const sliderDetails = document.createElement('div');
        sliderDetails.classList.add('slider-details');

        const title = document.createElement('h3');
        title.classList.add('slider-title');
        title.textContent = animeData.name;

        const typeDuration = document.createElement('p');
        typeDuration.classList.add('slider-type');
        typeDuration.textContent = `${animeData.type} • ${animeData.duration} • ${animeData.genre.join(', ')}`;

        const watchNowButton = document.createElement('button');
        watchNowButton.classList.add('watch-now');
        watchNowButton.textContent = 'Watch Now';
        watchNowButton.addEventListener('click', () => {
            window.location.href = `player.html?name=${encodeURIComponent(animeData.name)}&genre=${encodeURIComponent(animeData.genre.join(', '))}&type=${encodeURIComponent(animeData.type)}&video=${encodeURIComponent(animeData.video)}`;
        });

        sliderDetails.appendChild(title);
        sliderDetails.appendChild(typeDuration);
        slider.appendChild(sliderDetails);
        slider.appendChild(watchNowButton);

        card.appendChild(img);
        card.appendChild(slider);

        container.appendChild(card);
        return container;
    }

    function populateCarousel() {
        const uniqueAnimeData = getUniqueAnimeData(animes, numContainers);
        carousel.innerHTML = ''; // Clear existing containers

        uniqueAnimeData.forEach(anime => {
            const container = createCarouselContainer(anime);
            carousel.appendChild(container);
        });

        updateCarouselBackground(); // Initial background update
    }

    function updateCarouselBackground() {
        const containers = document.querySelectorAll('.carousel-container');
        const containerWidth = carousel.offsetWidth;
        const scrollPosition = carousel.scrollLeft;

        // Calculate the exact index of the container fully in view
        const newIndex = Math.round(scrollPosition / containerWidth);

        // Safeguard for out-of-bounds indices
        if (newIndex >= 0 && newIndex < containers.length) {
            carousel.style.backgroundImage = containers[newIndex].style.backgroundImage;
        }
    }

    function scrollToContainer(index) {
        const containerWidth = carousel.offsetWidth;
        carousel.scrollTo({
            left: containerWidth * index,
            behavior: 'smooth'
        });
        updateCarouselBackground();
    }

    function loopCarousel() {
        if (currentIndex < numContainers - 1) {
            currentIndex++;
        } else {
            currentIndex = 0; // Loop back to the first container
        }
        scrollToContainer(currentIndex);
    }

    prevButton.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = numContainers - 1; // Loop to the last container
        }
        scrollToContainer(currentIndex);
    });

    nextButton.addEventListener('click', () => {
        if (currentIndex < numContainers - 1) {
            currentIndex++;
        } else {
            currentIndex = 0; // Loop back to the first container
        }
        scrollToContainer(currentIndex);
    });

    let startX;

    carousel.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
        clearInterval(autoSlideInterval); // Pause auto slide on swipe
    });

    carousel.addEventListener('touchend', (e) => {
        const endX = e.changedTouches[0].clientX;
        const diffX = startX - endX;

        if (diffX > 50) {
            nextButton.click();
        } else if (diffX < -50) {
            prevButton.click();
        }

        autoSlideInterval = setInterval(loopCarousel, 5000); // Restart auto slide
    });

    carousel.addEventListener('scroll', updateCarouselBackground);

    // Start auto sliding every 5 seconds
    autoSlideInterval = setInterval(loopCarousel, 5000);

    populateCarousel();
};    
    
    
      
    

    // Scroll to top button functionality
    const scrollToTopButton = document.createElement('button');
    scrollToTopButton.id = 'scrollToTopButton';
    scrollToTopButton.innerHTML = '<i class="fi fi-sr-angle-circle-up"></i>';
    document.body.appendChild(scrollToTopButton);

    let scrollTimeout;

    window.addEventListener('scroll', () => {
        clearTimeout(scrollTimeout);

        if (window.scrollY > 200) {
            scrollToTopButton.classList.add('show');
            scrollToTopButton.classList.remove('hide');
        } else {
            scrollToTopButton.classList.remove('show');
            scrollToTopButton.classList.add('hide');
        }

        scrollTimeout = setTimeout(() => {
            scrollToTopButton.classList.remove('show');
            scrollToTopButton.classList.add('hide');
        }, 2000);
    });

    scrollToTopButton.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    
    
    // card creation
    

    function createCard(anime) {
    const card = document.createElement('a');
    card.classList.add('card');
    card.href = `player.html?name=${encodeURIComponent(anime.name)}&genre=${encodeURIComponent(anime.genre.join(', '))}&type=${encodeURIComponent(anime.type)}&video=${encodeURIComponent(anime.video)}`;

    const img = document.createElement('img');
    img.src = anime.img;
    img.alt = anime.name;
    card.appendChild(img);

    const ratingsContainer = document.createElement('div');
    ratingsContainer.classList.add('ratings-container');

    const yellowBox = document.createElement('div');
    yellowBox.classList.add('rating-box', 'yellow-box');
    yellowBox.textContent = anime.ratings.yellow;
    ratingsContainer.appendChild(yellowBox);

    const blueBox = document.createElement('div');
    blueBox.classList.add('rating-box', 'blue-box');
    blueBox.textContent = anime.ratings.blue;
    ratingsContainer.appendChild(blueBox);

    card.appendChild(ratingsContainer);

    const title = document.createElement('h5');
    title.textContent = anime.name;
    card.appendChild(title);

    const typeDuration = document.createElement('p');
    typeDuration.classList.add('type-duration');

    const type = document.createElement('span');
    type.classList.add('type');
    type.textContent = anime.type;
    typeDuration.appendChild(type);

    const bullet = document.createElement('span');
    bullet.classList.add('bullet');
    bullet.textContent = '•';
    typeDuration.appendChild(bullet);

    const duration = document.createElement('span');
    duration.classList.add('duration');
    duration.textContent = anime.duration;
    typeDuration.appendChild(duration);

    card.appendChild(typeDuration);

    const genre = document.createElement('p');
    genre.classList.add('genre');
    genre.textContent = anime.genre.join(', '); // Join array into a string
    card.appendChild(genre);

    return card;
}




    function displayAnimes(filteredAnimes) {
        container.innerHTML = '';
        if (filteredAnimes.length > 0) {
            filteredAnimes.forEach(anime => {
                const card = createCard(anime);
                container.appendChild(card);
            });
        } else {
            container.innerHTML = '<p>No results found</p>';
        }
    }
    
    
    function filterAnimes(genre, type) {
    return animes.filter(anime => {
        // Ensure genres is an array
        const genres = anime.genre || []; // Use an empty array if genre is undefined
        // Check if genre is included in the anime's genres array
        const matchesGenre = genre === 'All' || genres.includes(genre);
        // Check if type matches
        const matchesType = type === 'All' || anime.type.toLowerCase() === type.toLowerCase();
        return matchesGenre && matchesType;
    });
}


    function updateButtonStyles() {
        typeButtons.forEach(button => {
            const type = button.textContent.trim().toLowerCase();
            if (type.includes('series') && selectedType === 'series') {
                button.classList.add('active');
            } else if (type.includes('movies') && selectedType === 'movie') {
                button.classList.add('active');
            } else {
                button.classList.remove('active');
            }
        });
    }

    function showSelectedGenreBox(genre) {
        selectedGenreText.textContent = `Showing anime from the '${genre}' genre`;
        selectedGenreBox.style.display = 'flex';
    }

    function hideSelectedGenreBox() {
        selectedGenreBox.style.display = 'none';
        selectedGenreText.textContent = '';
    }

    let selectedGenre = 'All';
    let selectedType = 'movie';

    genreSpans.forEach(span => {
        span.addEventListener('click', () => {
            selectedGenre = span.getAttribute('data-genre');
            displayAnimes(filterAnimes(selectedGenre, selectedType));
            if (selectedGenre !== 'All') {
                showSelectedGenreBox(selectedGenre);
            } else {
                hideSelectedGenreBox();
            }
        });
    });

    typeButtons.forEach(button => {
        button.addEventListener('click', () => {
            const type = button.textContent.trim().toLowerCase();
            if (type.includes('series')) {
                selectedType = 'series';
            } else if (type.includes('movies')) {
                selectedType = 'movie';
            }
            updateButtonStyles();
            displayAnimes(filterAnimes(selectedGenre, selectedType));
        });
    });

    clearGenreButton.addEventListener('click', () => {
        selectedGenre = 'All';
        hideSelectedGenreBox();
        displayAnimes(filterAnimes(selectedGenre, selectedType));
    });

    // Search functionality
searchInput.addEventListener('input', () => {
    const searchText = searchInput.value.toLowerCase();
    if (searchText) {
        const matchingAnimes = animes.filter(anime => {
            const nameMatches = anime.name.toLowerCase().includes(searchText);
            const genresMatch = anime.genre.some(genre => genre.toLowerCase().includes(searchText));
            const typeMatches = anime.type.toLowerCase().includes(searchText);
            return nameMatches || genresMatch || typeMatches;
        });

        displaySearchResults(searchText, matchingAnimes);
        body.style.opacity = '0.5';
        searchResults.style.display = 'flex';
    } else {
        searchResults.style.display = 'none';
        body.style.opacity = '1';
    }
});

    function displaySearchResults(searchText, matchingAnimes) {
    searchResults.innerHTML = '';

    // Search for current searchText
    const searchLink = document.createElement('a');
    searchLink.href = '#';
    searchLink.classList.add('result');
    searchLink.innerHTML = `Search for '${searchText}'`;
    searchLink.addEventListener('click', () => {
        displayAnimes(matchingAnimes);
        searchResults.style.display = 'none';
        body.style.opacity = '1';
        showSelectedSearchBox(searchText);
    });
    searchResults.appendChild(searchLink);

    // Create result elements similar to .card, but without ratings
    matchingAnimes.slice(0, 5).forEach(anime => {
        const resultLink = document.createElement('a');
        resultLink.href = `player.html?name=${encodeURIComponent(anime.name)}&genre=${encodeURIComponent(anime.genre.join(', '))}&type=${encodeURIComponent(anime.type)}&video=${encodeURIComponent(anime.video)}`;

        resultLink.classList.add('result');

        const img = document.createElement('img');
        img.src = anime.img;
        img.alt = anime.name;
        resultLink.appendChild(img);

        const content = document.createElement('div');
        content.classList.add('result-content');

        const title = document.createElement('h5');
        title.textContent = anime.name;
        content.appendChild(title);

        // Create and append type and duration
        const typeDuration = document.createElement('p');
        typeDuration.classList.add('type-duration');

        const type = document.createElement('span');
        type.classList.add('type');
        type.textContent = anime.type;
        typeDuration.appendChild(type);

        const bullet = document.createElement('span');
        bullet.classList.add('bullet');
        bullet.textContent = '•';
        typeDuration.appendChild(bullet);

        const duration = document.createElement('span');
        duration.classList.add('duration');
        duration.textContent = anime.duration;
        typeDuration.appendChild(duration);

        content.appendChild(typeDuration);

        // Create and append genre
        const genre = document.createElement('p');
        genre.classList.add('genre');
        genre.textContent = anime.genre.join(', '); // Join array into a string
        content.appendChild(genre);

        resultLink.appendChild(content);

        resultLink.addEventListener('click', () => {
            searchResults.style.display = 'none';
            body.style.opacity = '1';
            showSelectedSearchBox(anime.name);
        });

        searchResults.appendChild(resultLink);
    });

    // Create and append the cancel button
    const cancelButton = document.createElement('button');
    cancelButton.textContent = 'Cancel';
    cancelButton.classList.add('cancel-search');
    cancelButton.addEventListener('click', () => {
        searchResults.style.display = 'none';
        searchInput.value = '';
        body.style.opacity = '1';
    });
    searchResults.appendChild(cancelButton);
}
    
    
    

    function showSelectedSearchBox(searchText) {
        selectedSearchText.textContent = `Showing search results for '${searchText}'`;
        selectedSearchBox.style.display = 'flex';
    }

    function hideSelectedSearchBox() {
        selectedSearchBox.style.display = 'none';
        selectedSearchText.textContent = '';
    }

    clearSearchButton.addEventListener('click', () => {
        searchInput.value = '';
        searchResults.style.display = 'none';
        body.style.opacity = '1';
        hideSelectedSearchBox();
        displayAnimes(filterAnimes(selectedGenre, selectedType));
    });

    // Display only movies initially
    updateButtonStyles();
    displayAnimes(filterAnimes(selectedGenre, selectedType));
});

// Toggle search input visibility
let search = document.querySelector(".search");
let engine = document.querySelector(".head");
search.onclick = function () {
    engine.classList.toggle("on");
};