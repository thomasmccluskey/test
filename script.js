var typed = new Typed(".auto-type", {
    strings: ["Motion Designer", "3D Artist", "Video Editor", "Designer"],
    typeSpeed: 75,
    backSpeed: 100,
    loop: true
})

var loader = document.getElementById("preloader");

window.addEventListener("load", function () {
    console.log("test");
    loader.style.display = "none";
})



