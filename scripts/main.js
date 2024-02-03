const root = document.documentElement;
const mobileMenu = document.querySelector('.mobile-menu');
const menuBtn = document.querySelector('.menu-button');
const bannerMenu = document.querySelector('.banner-menu-container');
const bannerMenuBtn = document.querySelector('.banner-menu-button');
const toggler = document.querySelector('.toggler');
const toggleImage = toggler.querySelector('img');
const logo = document.querySelector('.logo');
let darkTheme = false;
const totalRating = document.querySelector('.total-rating');
const yourRating = document.querySelector('.your-rating');

menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('invisible');
    menuBtn.src = menuBtn.src.includes('cross-button.png') ? '../images/header-images/icons/line-button.png' : '../images/header-images/icons/cross-button.png';
})

bannerMenuBtn.addEventListener('click', () => {
    bannerMenu.classList.toggle('invisible');
})

toggler.addEventListener('click', () => {

    toggleImage.src = toggleImage.src.includes('moon.png') ? '../images/header-images/icons/sun.png' : '../images/header-images/icons/moon.png'
    toggler.style.justifyContent = toggler.style.justifyContent === 'end' ? toggler.style.justifyContent = 'start' : toggler.style.justifyContent = 'end';
    toggleTheme();
    logo.src = logo.src.endsWith('white-logo.png') ? '../images/header-images/icons/logo.png' : '../images/header-images/icons/white-logo.png';
    console.log(logo.src)
})

function toggleTheme() {
    if (darkTheme) {
        root.style.setProperty('--prymary-theme-bg', '#FCFCFC');
        root.style.setProperty('--secondary-theme-bg', '#FFFFFF');
        root.style.setProperty('--theme-color', '#707070');
        root.style.setProperty('--articles-bg', '#FFFFFF');

    } else {
        // root.style.setProperty('--articles-bg','#FFF');
        root.style.setProperty('--prymary-theme-bg', '#0E1219');
        root.style.setProperty('--secondary-theme-bg', '#000');
        root.style.setProperty('--theme-color', '#FFF');
        root.style.setProperty('--articles-bg', '#202434');

    }
    darkTheme = !darkTheme;

}

document.querySelectorAll('.rating-button').forEach(button => {
    button.addEventListener('click', () => {
        const ratingValue = parseInt(button.textContent);
        totalRating.querySelector('div').textContent = ratingValue;
        yourRating.querySelector('span').textContent = ratingValue;
        document.querySelectorAll('.rating-button').forEach(btn => {
            if (parseInt(btn.textContent) <= ratingValue) {
                btn.classList.add('more');
            } else {
                btn.classList.remove('more');
            }
        });
    });
});