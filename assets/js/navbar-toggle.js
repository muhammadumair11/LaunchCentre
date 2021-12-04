const hamburgur = document.querySelector(".hamburgur")
const mobileNavbar = document.querySelector(".mobile-navbar")


hamburgur.addEventListener("click", function () {
    this.classList.toggle("active")
    mobileNavbar.classList.toggle("active")
})