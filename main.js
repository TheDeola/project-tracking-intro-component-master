const navIconElement = document.querySelector(".nav-icons");
const navBarElement = document.querySelector("nav");

navIconElement.addEventListener("click", () => {
    navBarElement.classList.toggle('show-mobile-nav');
    console.log("CHANGED");
})