document.addEventListener('DOMContentLoaded', () => {
    function getQueryParams() {
        const params = new URLSearchParams(window.location.search);
        return {
            name: params.get('name'),
            genre: params.get('genre'),
            type: params.get('type'),
            video: params.get('video')
        };
    }

    const { name, genre, type, video } = getQueryParams();
    console.log("Query Parameters:", { name, genre, type, video });

    const videoPlayer = document.getElementById('video-player');
    const animeNameElem = document.getElementById('anime-name');
    const animeGenreElem = document.getElementById('anime-genre');
    const downloadLink = document.getElementById('download-link');
    const searchInput = document.querySelector('.engine input[type="search"]');
    const searchResults = document.querySelector('.search-results');
    const body = document.querySelector('.body');
    const clearSearchButton = document.querySelector('.clear-search');

    const langButtons = {
        japanese: document.getElementById('btn-japanese'),
        english: document.getElementById('btn-english'),
        hindi: document.getElementById('btn-hindi')
    };

    // Ensure elements are found before accessing them
    if (!videoPlayer || !animeNameElem || !animeGenreElem || !downloadLink) {
        console.error("One or more elements are missing in the DOM.");
        return;
    }

    // Find the anime data by name
    const anime = animes.find(anime => anime.name === name);
    console.log("Found Anime:", anime);

    if (anime) {
        videoPlayer.src = anime.japanese || ''; // Default to Japanese video if available
        animeNameElem.textContent = anime.name;
        animeGenreElem.textContent = `${anime.type} • ${anime.genre}`;
        downloadLink.href = anime.download ? anime.download : ''; // Update download link
    } else {
        console.log('Anime not found');
        videoPlayer.src = '';
        animeNameElem.textContent = 'Anime Name Not Available';
        animeGenreElem.textContent = 'Genre • Type Not Available';
        downloadLink.href = ''; // Ensure download link is empty
    }

    // Function to reset button background styles
    function resetButtonStyles() {
        langButtons.japanese.style.background = ''; // Reset to default
        langButtons.english.style.background = '';
        langButtons.hindi.style.background = '';
    }

    // Event listeners for language buttons
    langButtons.japanese.addEventListener('click', () => {
        if (anime.japanese) {
            videoPlayer.src = anime.japanese;
            resetButtonStyles();
            langButtons.japanese.style.background = '#40ffb6';
            console.log('Switched to Japanese video');
        }
    });

    langButtons.english.addEventListener('click', () => {
        if (anime.english) {
            videoPlayer.src = anime.english;
            resetButtonStyles();
            langButtons.english.style.background = '#40ffb6';
            console.log('Switched to English video');
        }
    });

    langButtons.hindi.addEventListener('click', () => {
        if (anime.hindi) {
            videoPlayer.src = anime.hindi;
            resetButtonStyles();
            langButtons.hindi.style.background = '#40ffb6';
            console.log('Switched to Hindi video');
        }
    });

    // Search functionality
    searchInput.addEventListener('input', () => {
        const searchText = searchInput.value.trim().toLowerCase().replace(/\s+/g, ' ');
        if (searchText) {
            const searchWords = searchText.split(' ');

            const matchingAnimes = animes.map(anime => {
                let score = 0;
                const nameLower = anime.name.toLowerCase();

                // Check if any word matches in name
                searchWords.forEach(word => {
                    if (nameLower.includes(word)) {
                        score += 3;
                    }
                });

                // Check if any word matches in genres
                searchWords.forEach(word => {
                    anime.genre.forEach(genre => {
                        if (genre.toLowerCase().includes(word)) {
                            score += 2;
                        }
                    });
                });

                // Check if any word matches in type
                searchWords.forEach(word => {
                    if (anime.type.toLowerCase().includes(word)) {
                        score += 1;
                    }
                });

                return { ...anime, score };
            });

            // Sort by score in descending order
            matchingAnimes.sort((a, b) => b.score - a.score);

            // Filter out animes with a score of 0
            const filteredAnimes = matchingAnimes.filter(anime => anime.score > 0);

            displaySearchResults(searchText, filteredAnimes);
            body.style.opacity = '0.5';
            searchResults.style.display = 'flex';
        } else {
            searchResults.style.display = 'none';
            body.style.opacity = '1';
        }
    });

    function highlightText(text, searchWords) {
        const regex = new RegExp(`(${searchWords.join('|')})`, 'gi');
        return text.replace(regex, match => `<span class="highlight">${match}</span>`);
    }

    function displaySearchResults(searchText, matchingAnimes) {
        searchResults.innerHTML = '';

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

        if (matchingAnimes.length === 0) {
            const noResultsMessage = document.createElement('p');
            noResultsMessage.textContent = 'No results found';
            searchResults.appendChild(noResultsMessage);
        } else {
            matchingAnimes.slice(0, 5).forEach(anime => {
                const resultLink = document.createElement('a');
                resultLink.href = `player.html?name=${encodeURIComponent(anime.name)}&genre=${encodeURIComponent(anime.genre.join(', '))}&type=${encodeURIComponent(anime.type)}&video=${encodeURIComponent(anime.japanese)}`;
                resultLink.classList.add('result');

                const img = document.createElement('img');
                img.src = anime.img;
                img.alt = anime.name;
                resultLink.appendChild(img);

                const content = document.createElement('div');
                content.classList.add('result-content');

                const title = document.createElement('h5');
                title.innerHTML = highlightText(anime.name, searchText.split(' '));
                content.appendChild(title);

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

                const genre = document.createElement('p');
                genre.classList.add('genre');
                genre.innerHTML = highlightText(anime.genre.join(', '), searchText.split(' '));
                content.appendChild(genre);

                resultLink.appendChild(content);

                resultLink.addEventListener('click', () => {
                    searchResults.style.display = 'none';
                    body.style.opacity = '1';
                    showSelectedSearchBox(anime.name);
                });

                searchResults.appendChild(resultLink);
            });
        }

        const cancelButton = document.createElement('button');
        cancelButton.textContent = 'Cancel';
        cancelButton.classList.add('cancel-search');
        cancelButton.addEventListener('click', () => {
            searchResults.style.display = 'none';
            searchInput.value = '';
            body.style.opacity = '1';
            hideSelectedSearchBox();
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
        displayAnimes(filterAnimes(selectedGenre, selectedType)); // Adjust as needed
    });

});



document.addEventListener('DOMContentLoaded', () => {
    function getUrlParameter(name) {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get(name);
    }

    function getRandomAnimes(animes, count) {
        const shuffled = animes.sort(() => 0.5 - Math.random());
        return shuffled.slice(0, count);
    }

    function getFilteredAnimesByGenre(genreList) {
        const genres = genreList.split(',').map(g => g.trim()); // Convert the genre list from the URL parameter
        return animes.filter(anime => anime.genre.some(g => genres.includes(g)));
    }

    function createCard(anime) {
        const card = document.createElement('a');
        card.classList.add('card');
        card.href = `player.html?name=${encodeURIComponent(anime.name)}&genre=${encodeURIComponent(anime.genre.join(', '))}&type=${encodeURIComponent(anime.type)}&video=${encodeURIComponent(anime.video)}`;

        const img = document.createElement('img');
        img.src = anime.img;
        img.alt = anime.name;
        card.appendChild(img);

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

    function displayRandomAnimesByGenre() {
        const container = document.querySelector('.container');
        if (!container) {
            console.error('Container element not found');
            return;
        }
        
        container.innerHTML = ""; // Clear existing cards

        const currentGenres = getUrlParameter('genre');
        if (!currentGenres) {
            console.error('No genre parameter found in the URL');
            return;
        }

        console.log('Current Genres:', currentGenres);

        const filteredAnimes = getFilteredAnimesByGenre(currentGenres);

        if (filteredAnimes.length === 0) {
            console.error('No animes found for the specified genres');
            return;
        }

        const randomAnimes = getRandomAnimes(filteredAnimes, 6);

        randomAnimes.forEach(anime => {
            const card = createCard(anime);
            container.appendChild(card);
        });
    }

    displayRandomAnimesByGenre();
});


let search = document.querySelector(".search");
let engine = document.querySelector(".head");
search.onclick = function () {
    engine.classList.toggle("on");
};