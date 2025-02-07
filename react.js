document.addEventListener("contextmenu", (e) => {
    e.preventDefault();
  });
 


let scrollTimeout;

document.addEventListener("wheel", (event) => {
  if (scrollTimeout) return; // Prevent excessive event calls

  window.scrollBy({
    top: event.deltaY * 2, // Adjust for speed
    behavior: "smooth", // Keeps scrolling fluid
  });

  scrollTimeout = setTimeout(() => {
    scrollTimeout = null;
  }, 50); // Limits event calls for better performance
}, { passive: true });


  
  
// Selecting elements
let head = document.querySelector(".head");
let searchInput = document.querySelector("#search");
let searchButton = document.querySelector(".search-btn");

let longPressTimer;

// Function to handle the long press
function startLongPress(e) {
    // If the long press starts from the search button, skip the long press logic
    if (e.target === searchButton) return;

    longPressTimer = setTimeout(() => {
        head.classList.add("active");
        searchInput.focus();
    }, 800);  // 800ms threshold for long press
}

// Function to cancel long press if user releases touch/mouse early
function cancelLongPress() {
    clearTimeout(longPressTimer);
}

// Event listeners for mouse and touch events
document.addEventListener("mousedown", startLongPress);
document.addEventListener("mouseup", cancelLongPress);
document.addEventListener("mouseleave", cancelLongPress);

document.addEventListener("touchstart", startLongPress);
document.addEventListener("touchend", cancelLongPress);

// Click functionality for search button
searchButton.addEventListener("click", function () {
    head.classList.toggle("active");
    if (head.classList.contains("active")) {
        searchInput.focus();
    } else {
        searchInput.value = "";
        document.getElementById("searchResults").style.display = "none"; // Hide search results when input is cleared
        document.querySelector(".results").innerHTML = ""; // Clear the search results
        document.querySelector(".search-genre").innerHTML = ""; // Clear the genres
        document.querySelector(".body").style.opacity = "1";  // Reset opacity
        document.querySelector(".body").style.pointerEvents = "auto";  // Enable pointer events
    }
});







let startX = 0;
let endX = 0;
const swipeThreshold = 50;

let menuButton = document.querySelector(".menu-btn");
let closeMenuButton = document.querySelector(".close-menu");
let menu = document.querySelector(".menu");

menuButton.addEventListener("touchstart", function () {
    menu.classList.toggle("on");
}, { passive: true });

closeMenuButton.addEventListener("touchstart", function () {
    menu.classList.remove("on");
}, { passive: true });

menu.addEventListener("touchstart", function (e) {
    startX = e.touches[0].clientX;
}, { passive: true });

menu.addEventListener("touchend", function (e) {
    endX = e.changedTouches[0].clientX;

    if (endX - startX > swipeThreshold) {
        menu.classList.remove("on");  // Swipe right to close menu
    }
}, { passive: true });







document.addEventListener("DOMContentLoaded", () => {
    const popup = document.querySelector(".pop-up");
    const closeButton = document.querySelector(".close-popup");
    const body = document.body;

    // Get the current page URL to track pop-up per page
    const pageIdentifier = window.location.pathname;

    // Check if pop-up has been shown for this page
    if (!localStorage.getItem(`popupShown_${pageIdentifier}`)) {
        popup.classList.remove("hidden");  // Show pop-up
        body.classList.add("dimmed");  // Apply background dimming
    }

    closeButton.addEventListener("click", () => {
        popup.classList.add("hidden");  // Hide pop-up
        body.classList.remove("dimmed");  // Remove background dimming

        // Save the status to localStorage to prevent showing again on this page
        localStorage.setItem(`popupShown_${pageIdentifier}`, "true");
    });
});







let deferredPrompt;

window.addEventListener("beforeinstallprompt", (event) => {
    event.preventDefault();
    deferredPrompt = event;
    document.getElementById("installAppBtn").style.display = "block"; 
});

document.getElementById("installAppBtn").addEventListener("click", () => {
    if (deferredPrompt) {
        deferredPrompt.prompt();
        deferredPrompt.userChoice.then((choiceResult) => {
            if (choiceResult.outcome === "accepted") {
                console.log("App installed");
            }
            deferredPrompt = null;
        });
    }
});





document.getElementById("randomButton").addEventListener("click", function (e) {
    e.preventDefault(); 

    fetch("anime_data.json")
        .then(response => response.json())
        .then(data => {
            const animeList = data.anime_data;
            
            if (animeList.length === 0) return;

            // Pick a random anime
            const randomAnime = animeList[Math.floor(Math.random() * animeList.length)];

            // Create URL parameters
            const queryParams = new URLSearchParams({
                name: randomAnime.name.english,
                genre: randomAnime.genres.join(", ")
            });

            // Redirect to details.html with query parameters
            window.location.href = `details.html?${queryParams.toString()}`;
        })
        .catch(error => console.error("Error fetching anime data:", error));
});




document.querySelector(".menu-share-btn").addEventListener("click", () => {
    if (navigator.share) {
        navigator.share({
            title: document.title,
            url: window.location.href
        })
        .catch(error => console.log("Error sharing:", error));
    } else {
        alert("Sharing not supported on this browser.");
    }
});
