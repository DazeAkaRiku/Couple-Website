const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

// Autoplay attempt
window.addEventListener("load", () => {
    music.play().catch(() => {
        console.log("Autoplay blocked");
    });
});

// Toggle music
musicBtn.addEventListener("click", () => {

if (music.paused) {
    music.play();
    musicBtn.classList.remove("muted");

} else {
    music.pause();
    musicBtn.classList.add("muted");
}

});