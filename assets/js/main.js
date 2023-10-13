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
    }

}

backToTopButton.addEventListener("click", backToTopFunc);

function backToTopFunc() {
    window.scrollTo(0,0);
}

// dark-light mode

const themeBtn = document.getElementById('modeToggle');
const themeBtn2 = document.getElementById('modeToggle2');
const icons = document.querySelectorAll('.mode')
const localStorageTheme = localStorage.getItem("theme");

if (localStorageTheme === 'dark'){
    setDarkMode();
}

themeBtn.addEventListener('click', function(){
    setTheme();
});

themeBtn2.addEventListener('click', function(){
    setTheme();
});

function setTheme(){
    let currentTheme = document.body.getAttribute("theme");

    if (currentTheme === 'dark'){
        setLightMode();
    }

    else{
        setDarkMode();
    }
}


function setLightMode(){
    document.body.removeAttribute('theme')
    localStorage.setItem('theme', 'light')

    themeBtn.src = themeBtn.getAttribute('src-dark')
    themeBtn2.src = themeBtn2.getAttribute('src-dark')

    icons.forEach((icon) => {
        icon.src = icon.getAttribute('src-light');});
}

function setDarkMode(){
    document.body.setAttribute('theme', 'dark')
    localStorage.setItem('them', 'dark')

    themeBtn.src = themeBtn.getAttribute('src-light')
    themeBtn2.src = themeBtn2.getAttribute('src-light')

    icons.forEach((icon) => {
        icon.src = icon.getAttribute('src-dark');
    });
}