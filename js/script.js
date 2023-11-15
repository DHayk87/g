const hBtn = document.querySelector(".hero-btn");
const carouselImage = document.querySelectorAll(".carousel img");
const leftArrow = document.getElementById("left-arrow");
const rightArrow = document.getElementById("right-arrow");
let s = 0;
function toRight() {
    if (s === 0) s = carouselImage.length;
    s--;
    carouselImage.forEach(
        (elm) => (elm.style.transform = `translate(-${100 * s}%)`)
    );
}
function toLeft() { s++;
    if (s === carouselImage.length)s = 0;
    carouselImage.forEach(
        (elm) => (elm.style.transform = `translate(-${100 * s}%)`)
    );}
hBtn.onmouseover = function () {
    hBtn.querySelector(".fa-angles-down").classList.add("fa-bounce");
};
hBtn.onmouseleave = function () {
    hBtn.querySelector(".fa-angles-down").classList.remove("fa-bounce");
};

leftArrow.addEventListener("click",toLeft);
rightArrow.addEventListener("click", toRight);
setInterval(toRight, 5000);
