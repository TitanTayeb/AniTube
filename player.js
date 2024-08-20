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
    const animeImg = document.getElementById('anime-img');
    const animeNameElem = document.getElementById('anime-name');
    const animeGenreElem = document.getElementById('anime-genre');
    const searchInput = document.querySelector('.engine input[type="search"]');
    const searchResults = document.querySelector('.search-results');
    const selectedSearchBox = document.querySelector('.selected-search');
    const selectedSearchText = document.getElementById('selected-search-text');
    const clearSearchButton = document.getElementById('clear-search');
    const body = document.querySelector('.body');

    // Ensure elements are found before accessing them
    if (!videoPlayer || !animeNameElem || !animeGenreElem) {
        console.error("One or more elements are missing in the DOM.");
        return;
    }

    // Find the anime data by name
    const anime = animes.find(anime => anime.name === name);
    console.log("Found Anime:", anime);

    if (anime) {
        videoPlayer.src = video ? video : ''; // Update video link
        animeNameElem.textContent = anime.name;
        animeGenreElem.textContent = `${anime.type} • ${anime.genre}`;
    } else {
        console.log('Anime not found');
        videoPlayer.src = '';
        animeNameElem.textContent = 'Anime Name Not Available';
        animeGenreElem.textContent = 'Genre • Type Not Available';        
    }


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
});




let search = document.querySelector(".search");
let engine = document.querySelector(".head");
search.onclick = function () {
    engine.classList.toggle("on");
};
