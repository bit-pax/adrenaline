'use strict';

document.addEventListener('DOMContentLoaded', function() {
    /* nav-container - toggle visiblity on user scroll */

    let navContainer = document.getElementById('nav-container');
    let lastScrollTop = 0;
    let ignoreScroll = false; // ignores scroll so navbar won't auto show/hide. typically used for anchor links, window resizing, etc.

    window.addEventListener('scroll', function() {
        let st = window.scrollY;

        if (!ignoreScroll) {
            if (st > lastScrollTop) {
                navContainer.classList.add('nav-hide');
            } 
            else {
                navContainer.classList.remove('nav-hide');
            }
        }

        lastScrollTop = st <= 0 ? 0 : st;
        ignoreScroll = false;
    }, false);
    
    /* smooth scrolling to different parts of the page for all anchor links whose href attribute starts with a '#' */

    document.addEventListener('click', function (event) {
        if (!event.target.matches('a[href^="#"]')) return;
        event.preventDefault();

        ignoreScroll = true;

        document.querySelector(event.target.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });

    /* hamburger - init */

    const navTop = document.getElementById('nav-top');
    const ul = navTop.querySelector('ul'); // get first <ul> element
    const hamburger = ul.querySelector('h1'); // get first <h1> element

    const navMenu = document.getElementById('nav-menu');

    updateHamburger();

    /* hamburger - toggle visibility */

    function updateHamburger() {
        ignoreScroll = true;

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
        ignoreScroll = true;
        navMenu.hidden = !navMenu.hidden;
    });

    window.addEventListener('resize', function(e) {
        updateHamburger();
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


