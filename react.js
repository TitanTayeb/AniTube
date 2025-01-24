document.addEventListener("contextmenu", (e) => {
    e.preventDefault();
  });
 
 
 
  
  
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