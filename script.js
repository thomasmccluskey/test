var typed = new Typed(".auto-type", {
    strings: ["Motion Designer", "Digital Fabricator", "3D Artist", "UX Designer"],
    typeSpeed: 75,
    backSpeed: 100,
    loop: true
})

var loader = document.getElementById("preloader");

window.addEventListener("load", function () {
    loader.style.display = "none";
})

const content = document.querySelector('section');

let currentPosition = window.pageYOffset;

function skewEffect() {
    const newPosition = window.pageYOffset;
    const dif = newPosition - currentPosition;

    let skew = dif * .15;
    let rotate = dif * .025;

    content.style.transform = `skewY(${skew}deg) rotateY(${rotate}deg)`;
    currentPosition = newPosition;
    requestAnimationFrame(skewEffect);
}

skewEffect();


