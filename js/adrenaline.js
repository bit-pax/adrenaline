'use strict';

document.addEventListener('DOMContentLoaded', function() {
    const navTop = document.getElementById('nav-top');
    const ul = navTop.querySelector('ul'); // get first <ul> element
    const hamburger = ul.querySelector('h1'); // get first <h1> element

    const navMenu = document.getElementById('nav-menu');

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
});



