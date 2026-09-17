function songColor() {
    let song = document.querySelector("#first");
        song.style.color = "#432818";
        song.innerHTML = "LOVE IT";

    if (navigator.userAgent.includes("Chrome")) {
        song.innerHTML = "Listen to it!"}
    else { song.innerHTML = "Why aren't you listening?!"
    }

}

let button = document.querySelector("#first");
    button.addEventListener("click", songColor);