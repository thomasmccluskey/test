var typed = new Typed(".auto-type", {
    strings: ["Motion Designer", "Digital Fabricator", "3D Artist", "Video Artist"],
    typeSpeed: 75,
    backSpeed: 100,
    loop: true
})

var loader = document.getElementById("preloader");

window.addEventListener("load", function () {
    loader.style.display = "none";
})



