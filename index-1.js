const santa = document.querySelector(".santaImg");
const christmasDiv = document.querySelector(".christmasDiv")
christmasDiv.addEventListener("mousemove", (e) => {
    santa.style.top = e.pageY - 160 + "px"
    santa.style.left = e.pageX - 160 + "px"
    christmasDiv.style.backgroundPositionX = -Math.floor(e.x / 10) + "%"
    christmasDiv.style.backgroundPositionY = Math.floor(e.y  / 10) + "%"

})
