// Function to get URL parameters
function getUrlParameter(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

// Function to fetch and update header content
function updateHeader(collection) {
    const type = getUrlParameter('type');
    const name = getUrlParameter('name');

    if (type && name) {
        const selectedCollection = collection.find(item => item.type === type && item.name === decodeURIComponent(name));

        if (selectedCollection) {
            // Update the logo
            if (selectedCollection.logo) {
                document.querySelector('.about-logo').src = selectedCollection.logo;
                document.querySelector('.about-logo').alt = selectedCollection.name;
            } else {
                console.error('Logo not found');
            }

            // Update the name
            if (selectedCollection.name) {
                document.querySelector('.about-name').textContent = selectedCollection.name;
            }

            // Update the banner image
            if (selectedCollection.banner) {
                document.querySelector('.banner .thumbnail').style.backgroundImage = `url(${selectedCollection.banner})`;
            }

            // Update the video iframe inside video-container
            if (selectedCollection.bg_video) {
                const videoPlayer = document.getElementById('video-player');
                videoPlayer.src = selectedCollection.bg_video;  // Update iframe with video URL
            }
        } else {
            console.error('No matching data found for the given parameters.');
        }
    } else {
        console.error('URL parameters are missing or invalid.');
    }
}

// Fetch the collection data and update the header
fetch('collection.json')  // Update with the correct path to your collection.json file
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        updateHeader(data);  // Call function to update header with fetched data
    })
    .catch(error => console.error('Error fetching collection data:', error));
    
    
    
    
    
    const hoverBox = document.querySelector('.vignette');
        const videoContainer = document.querySelector('.thumbnail');

        hoverBox.addEventListener('mouseover', () => {
            videoContainer.style.opacity = '0';  // Show the video on hover
        });

        hoverBox.addEventListener('mouseleave', () => {
            videoContainer.style.opacity = '1';  // Hide the video when mouse leaves
        });
        
                 
 
 
 
        
        
        
        
        
fetch("anime_data.json")
  .then(response => response.json())
  .then(data => {
    const container = document.querySelector(".container");

    // Get URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const type = urlParams.get("type"); // 'studio' or 'writer'
    const name = urlParams.get("name"); // Studio or writer name

    if (!type || !name) {
      container.innerHTML = "<p>Invalid parameters</p>";
      return;
    }

    // Decode and convert the name parameter to lowercase for case-insensitive comparison
    const decodedName = decodeURIComponent(name).toLowerCase();

    // Filter anime based on the type (studio or writer) ignoring case sensitivity
    let filteredAnime = [];
    if (type === "studio") {
      filteredAnime = data.anime_data.filter(anime => anime.studio.toLowerCase() === decodedName);
    } else if (type === "writer") {
      filteredAnime = data.anime_data.filter(anime => anime.writer.toLowerCase() === decodedName);
    }

    if (filteredAnime.length === 0) {
      container.innerHTML = "<p>No Result</p>";
      return;
    }

    let cardsHTML = "";

    filteredAnime.forEach(anime => {
      const queryParams = new URLSearchParams({
        name: anime.name.english,
        studio: anime.studio,
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
  })
  .catch(error => console.error("Error loading anime data:", error));
  
  
  



fetch("collection.json")
  .then(response => response.json())
  .then(data => {
    // Get the type and name from URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const type = urlParams.get("type");
    const name = urlParams.get("name");

    // Find the matching collection
    const collection = data.find(item => item.name.toLowerCase() === name.toLowerCase());

    if (collection) {
      // Set the about, motto, and header content
      document.querySelector(".about-item").textContent = collection.about || "About information not available.";
      document.querySelector(".motto").textContent = collection.motto || "Motto not available.";
     
    } else {
      console.warn("No matching collection found.");
    }
  })
  .catch(error => console.error("Error loading collection data:", error));



  
  
  
  
  let touchStartX = 0;
        let touchEndX = 0;

        function handleGesture() {
            if (touchStartX - touchEndX > 100) {
                window.location.href = "me.html";  // Swipe left
            } else if (touchEndX - touchStartX > 100) {
                window.location.href = "library.html";  // Swipe right
            }
        }

        document.addEventListener("touchstart", (e) => {
            touchStartX = e.touches[0].clientX;
        });

        document.addEventListener("touchend", (e) => {
            touchEndX = e.changedTouches[0].clientX;
            handleGesture();
        });
