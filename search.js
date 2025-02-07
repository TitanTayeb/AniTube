document.getElementById("search").addEventListener("input", function () {
    const query = this.value.toLowerCase().trim(); // Convert input to lowercase and trim spaces
    const searchResults = document.getElementById("searchResults");
    const searchGenreContainer = document.querySelector(".search-genre");
    const resultsContainer = document.querySelector(".results");
    const body = document.querySelector(".body");

    if (!query) {
        searchResults.style.display = "none"; // Hide search results if input is empty
        resultsContainer.innerHTML = "";
        searchGenreContainer.innerHTML = "";
        body.style.opacity = "1";  // Reset opacity
        body.style.pointerEvents = "auto";  // Reset pointer events
        return;
    }

    // Ensure the search results container is visible when there's a query
    searchResults.style.display = "block"; 
    body.style.opacity = "0.3";  // Set opacity to 0.5
    body.style.pointerEvents = "none";  // Disable pointer events

    fetch("anime_data.json")
        .then(response => response.json())
        .then(data => {
            const animeList = data.anime_data || [];

            // Extract and filter genres dynamically
            const allGenres = [...new Set(animeList.flatMap(anime => anime.genres))];
            const filteredGenres = allGenres
                .filter(genre => genre.toLowerCase().includes(query))
                .map(genre => `<a href="results.html?genre=${encodeURIComponent(genre)}"><i class="fi fi-ss-tags"></i><p>${genre}</p></a>`)
                .join(' ');

            searchGenreContainer.innerHTML = filteredGenres || "";

            // Split the query into individual words and remove empty words
            const queryWords = query.split(" ").filter(word => word.length > 0);

            // Scoring and filtering anime based only on English and Japanese names
            const results = animeList
                .map(anime => {
                    // Calculate score for matches with English and Japanese names only
                    const score = [
                        anime.name.english || "",
                        anime.name.japanese || "",
                    ]
                    .map(field => {
                        return queryWords
                            .map(word => field.toLowerCase().includes(word)) // Check if the field contains each query word
                            .reduce((sum, match) => sum + match, 0); // Count the matches
                    })
                    .reduce((sum, value) => sum + value, 0); // Sum up the scores from all fields

                    return { ...anime, score };
                })
                .filter(anime => anime.score > 0)  // Show anime if at least one match is found
                .sort((a, b) => {
                    const aScore = [a.name.english, a.name.japanese]
                        .filter(name => name)
                        .join(" ")
                        .toLowerCase()
                        .includes(query) ? 1 : 0;

                    const bScore = [b.name.english, b.name.japanese]
                        .filter(name => name)
                        .join(" ")
                        .toLowerCase()
                        .includes(query) ? 1 : 0;

                    return bScore - aScore; // Sorting by match in names
                })
                .slice(0, 5);

            // Populate search results
            if (results.length > 0 || searchGenreContainer.innerHTML !== "") {
                resultsContainer.innerHTML = results.map(anime => {
                    const highlightedEnglishName = anime.name.english.replace(
                        new RegExp(query.split(" ").join("|"), "gi"), 
                        match => `<span class="highlight">${match}</span>`
                    );
                    
                    const highlightedJapaneseName = anime.name.japanese.replace(
                        new RegExp(query.split(" ").join("|"), "gi"), 
                        match => `<span class="highlight">${match}</span>`
                    );

                    return `
                        <a href="details.html?name=${encodeURIComponent(anime.name.english)}&genre=${encodeURIComponent(anime.genres.join(','))}" class="result">
                            <!-- <img src="${anime.album}" alt="${anime.name.english}"> -->
                            <div class="result-content">
                                <h5>${highlightedEnglishName}</h5>
                                <p>${highlightedJapaneseName}</p>  <!-- Display Japanese name -->
                            </div>
                        </a>
                    `;
                }).join('');

                // Add "See All Results" and "Cancel" buttons dynamically
                resultsContainer.innerHTML += `
                    <a href="results.html?query=${encodeURIComponent(query)}" class="see-all"><p>See All Results</p><i class="fi fi-ss-arrow-circle-right"></i></a>
                    <button id="cancelSearch" class="cancel-search"><i class="fi fi-ss-circle-xmark"></i><p>Cancel</p></button>
                `;

                // Add event listener to cancel button to clear search
                document.getElementById("cancelSearch").addEventListener("click", function () {
                    document.getElementById("search").value = "";
                    searchResults.style.display = "none";
                    resultsContainer.innerHTML = "";
                    searchGenreContainer.innerHTML = "";
                    body.style.opacity = "1";
                    body.style.pointerEvents = "auto";
                });

            } else {
                resultsContainer.innerHTML = "";
            }
        })
        .catch(error => {
            console.error("Error fetching anime data:", error);
            searchResults.style.display = "none"; // Hide search results if there's an error
            body.style.opacity = "1";  // Reset opacity
            body.style.pointerEvents = "auto";  // Reset pointer events
        });
});

// Add event listener for Enter key to trigger "See All Results"
document.getElementById("search").addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        const query = this.value.trim();
        if (query) {
            window.location.href = `results.html?query=${encodeURIComponent(query)}`;
        }
    }
});


