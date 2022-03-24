const button = document.getElementById('nav-hamburger');
const mobile = document.getElementById('nav-mobile');
const hero = document.getElementById('hero');

const showNav = () => {
    console.log(mobile.style.display);
    if (mobile.style.display === "none" || !mobile.style.display) {
        mobile.style.display = "flex";
        hero.style.display = "none";
    } else {
        mobile.style.display = "none";
        hero.style.display = "block";
    }
}

button.addEventListener("click", showNav);
