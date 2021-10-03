
let particlesGame = document.getElementById("particlesGame");
let MuzicoGravitas = document.getElementById("MuzicoGravitas");
let HillbillyShooter = document.getElementById("HillbillyShooter");
let FrogSector = document.getElementById("FrogSector");
let platformer = document.getElementById("platformer");

particlesGame.addEventListener("click", () => {
    window.open("./games/particles.exe");
});

MuzicoGravitas.addEventListener("click", () => {
    window.open("./games/MuzikoGravitas/MuzikoGravitas.rar");
});

HillbillyShooter.addEventListener("click", () => {
    window.open("./games/HillbillyShooter/index.html");
});

FrogSector.addEventListener("click", () => {
    window.open("./games/FrogSector/index.html");
});

platformer.addEventListener("click", () => {
    window.open("./games/PlatformAlien/index.html");
});