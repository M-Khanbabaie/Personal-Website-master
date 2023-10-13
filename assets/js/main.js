// the hamburger nav code

function toggleMenu(){
    const menu = document.querySelector(".hambergur-list");
    const icon = document.querySelector(".hambergur-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

// the up-arrow code

const backToTopButton = document.querySelector("#arrow");

window.addEventListener('scroll', scrollFunc);

function scrollFunc() {
    if (window.scrollY > 300) {
        backToTopButton.style.display = 'block';
    }
    else {
        backToTopButton.style.display = 'none';
        backToTopButton.style.color = 'black';
    }

}

backToTopButton.addEventListener("click", backToTopFunc);

function backToTopFunc() {
    window.scrollTo(0,0);
}