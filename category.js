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

            const colors = [];

            // Extract colors by sampling the image (in this case, picking every 10th pixel for simplicity)
            for (let i = 0; i < pixels.length; i += 40) {
                const r = pixels[i];
                const g = pixels[i + 1];
                const b = pixels[i + 2];

                colors.push({ r, g, b });
            }

            // Function to calculate luminance
            const getLuminance = (r, g, b) => {
                return 0.2126 * r + 0.7152 * g + 0.0722 * b;
            };

            // Function to check if the color is too dark or too light
            const isTooDarkOrLight = (r, g, b) => {
                const luminance = getLuminance(r, g, b);
                return luminance < 50 || luminance > 200;
            };

            // Try finding a suitable color
            let selectedColor = null;
            for (let color of colors) {
                if (!isTooDarkOrLight(color.r, color.g, color.b)) {
                    selectedColor = color;
                    break;
                }
            }

            // If no suitable color was found, use the first one
            if (!selectedColor) {
                selectedColor = colors[0];
            }

            const darkenedColor = `rgb(${Math.max(0, selectedColor.r - 30)}, ${Math.max(0, selectedColor.g - 30)}, ${Math.max(0, selectedColor.b - 30)})`;

            // Append the collection button with the selected color
            container.innerHTML += `
                <a class="collection-btn" href="collection.html?${queryParams}" style="background-color: ${darkenedColor}">
                    <p class="about">${item.about}</p>
                    <div class="about-logo">
                        <img class="logo" src="${item.logo}" alt="${item.name}">
                        <h4 class="name">${item.name}</h4>
                    </div>
                </a>
            `;
        };

        // Handle error if the image fails to load
        image.onerror = () => {
            container.innerHTML += `
                <a class="collection-btn" href="collection.html?${queryParams}" style="background-color: ${defaultBackgroundColor}">
                    <p class="about">${item.about}</p>
                    <div class="about-logo">
                        <img class="logo" src="${item.logo}" alt="${item.name}">
                        <h4 class="name">${item.name}</h4>
                    </div>
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
