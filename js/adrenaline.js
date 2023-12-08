'use strict';

document.addEventListener('DOMContentLoaded', function() {
    const navTop = document.getElementById('nav-top');
    const ul = navTop.querySelector('ul'); // get first <ul> element
    const hamburger = ul.querySelector('h1'); // get first <h1> element

    const navMenu = document.getElementById('nav-menu');

    /* hamburger - toggle visibility */

    updateHamburger();

    function updateHamburger() {
        if(window.innerWidth <= 830) { // small screen
            ul.style.display = 'flex';
            navMenu.hidden = true;
        }
        else { // wide screen
            ul.style.display = 'none';
            navMenu.hidden = false;
        }
    }

    hamburger.addEventListener('click', function(e) {
        navMenu.hidden = !navMenu.hidden;
    });

    window.addEventListener('resize', function(e) {
        updateHamburger();
    });

    /* nav-container - toggle visiblity on user scroll */

    let navContainer = document.getElementById('nav-container');
    let lastScrollTop = 0;

    window.addEventListener('scroll', function() {
        let st = window.scrollY;

        if (st > lastScrollTop) {
            navContainer.classList.add('nav-hide');
        } 
        else {
            navContainer.classList.remove('nav-hide');
        }

        lastScrollTop = st <= 0 ? 0 : st;
    }, false);
    
    /* smooth scrolling to different parts of the page for all anchor links whose href attribute starts with a '#' */

    document.addEventListener('click', function (event) {
        if (!event.target.matches('a[href^="#"]')) return;
        event.preventDefault();

        document.querySelector(event.target.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

/* toggle dark mode */

var darkMode = false;

function toggleDarkMode() {
    darkMode = !darkMode;
    
    var theme = document.getElementById('theme');
    var image = document.getElementById('mode');

    if (darkMode) {
        theme.href = "css/adrenaline-dark.css";
        image.src = "icons/sun.svg";
    } else {
        theme.href = "css/adrenaline.css";
        image.src = "icons/moon.svg";
    }
}


