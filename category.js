document.addEventListener("DOMContentLoaded", () => {
    fetch("collection.json")
        .then(response => response.json())
        .then(data => {
            data.forEach(item => {
                addCollectionButton(item);
            });
        })
        .catch(error => console.error("Error loading collection data:", error));
});

function addCollectionButton(item) {
    let container;

    if (item.type === "studio") {
        container = document.querySelector(".studios");
    } else if (item.type === "writer") {
        container = document.querySelector(".writers");
    }

    if (container) {
        const queryParams = new URLSearchParams({
            type: item.type,
            name: item.name
        }).toString();

        const image = new Image();
        image.src = item.logo;
        image.crossOrigin = "Anonymous";  // Important for cross-origin images (CORS)

        // Set a default background color if the image fails to load
        const defaultBackgroundColor = "#212529"; // Default gray

        // Try to extract the dominant color when the image loads
        image.onload = () => {
            const canvas = document.createElement("canvas");
            const context = canvas.getContext("2d");

            canvas.width = image.width;
            canvas.height = image.height;

            context.drawImage(image, 0, 0, image.width, image.height);

            const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
            const pixels = imageData.data;

            let r = 0, g = 0, b = 0;

            for (let i = 0; i < pixels.length; i += 4) {
                r += pixels[i];     // Red
                g += pixels[i + 1]; // Green
                b += pixels[i + 2]; // Blue
            }

            const pixelCount = pixels.length / 4;
            r = Math.floor(r / pixelCount);
            g = Math.floor(g / pixelCount);
            b = Math.floor(b / pixelCount);

            const darkenedColor = `rgb(${Math.max(0, r - 30)}, ${Math.max(0, g - 30)}, ${Math.max(0, b - 30)})`;

            // Append the collection button with the darkened background color
            container.innerHTML += `
                <a class="collection-btn" href="collection.html?${queryParams}" style="background-color: ${darkenedColor}">
                    <img class="logo" src="${item.logo}" alt="${item.name}">
                    <h4 class="name">${item.name}</h4>
                    <i class="fi fi-ss-arrow-circle-right"></i>
                </a>
            `;
        };

        // Handle error if the image fails to load
        image.onerror = () => {
            container.innerHTML += `
                <a class="collection-btn" href="collection.html?${queryParams}" style="background-color: ${defaultBackgroundColor}">
                    <img class="logo" src="${item.logo}" alt="${item.name}">
                    <h4 class="name">${item.name}</h4>
                </a>
            `;
        };
    }
}





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