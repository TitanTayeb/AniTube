let touchStartX = 0;
        let touchEndX = 0;

        function handleGesture() {
            if (touchStartX - touchEndX > 100) {
                window.location.href = "Home.html";  // Swipe left
            } else if (touchEndX - touchStartX > 100) {
                window.location.href = "me.html";  // Swipe right
            }
        }

        document.addEventListener("touchstart", (e) => {
            touchStartX = e.touches[0].clientX;
        });

        document.addEventListener("touchend", (e) => {
            touchEndX = e.changedTouches[0].clientX;
            handleGesture();
        });