document.addEventListener("DOMContentLoaded", async () => {
    const urlParams = new URLSearchParams(window.location.search);
    const animeName = urlParams.get("name");

    if (!animeName) return;

    try {
        const response = await fetch("anime_data.json");
        if (!response.ok) throw new Error("Failed to fetch anime data.");

        const data = await response.json();
        const animeList = data.anime_data;

        const anime = animeList.find(a => a.name.english.trim().toLowerCase() === animeName.trim().toLowerCase());
        if (!anime) return;

        const videoPlayer = document.getElementById("video-player");
        const nameElement = document.querySelector(".name");

        if (nameElement) {
            nameElement.innerHTML = `<b><i class="fi fi-ss-signal-stream"></i>Now Playing:</b> ${anime.name.english}`;
        }

        const videoSrc = anime.video.japanese !== "N/A" ? anime.video.japanese : null;
        if (videoPlayer) {
            if (videoSrc) {
                videoPlayer.src = videoSrc;
            } else {
                document.querySelector(".audio-tracks").style.display = "none";
                nameElement.innerHTML = "Not available";
            }
        }

        const downloadBtn = document.querySelector(".download .download-btn");
        const downloadLink = document.querySelector(".download");

        if (downloadBtn && downloadLink) {
            const downloadURL = anime.download && anime.download.trim() !== "" ? anime.download : "#";
            downloadBtn.href = downloadURL;
            downloadBtn.onclick = () => {
                if (downloadURL !== "#") {
                    window.location.href = downloadURL;
                }
            };
        }

        const audioButtons = document.querySelectorAll(".audio-tracks button");
        audioButtons.forEach(button => {
            const audioLang = button.classList[0];
            if (!anime.video[audioLang] || anime.video[audioLang] === "N/A") {
                button.style.display = "none";
                return;
            }

            button.addEventListener("click", () => {
                audioButtons.forEach(btn => btn.classList.remove("selected"));
                button.classList.add("selected");
                videoPlayer.src = anime.video[audioLang];
            });
        });

        const japaneseButton = document.querySelector(".audio-tracks .japanese");
        if (japaneseButton) {
            japaneseButton.classList.add("selected");
        }

    } catch (error) {
        console.error("Error loading anime data:", error);
    }
});




