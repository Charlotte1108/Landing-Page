/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

// Define Global Variables 
const sections = Array.from(document.querySelectorAll('section'));
const menu = document.getElementById('navbar');
let numberOfListItems = sections.length;
const links = [];
const marginTop = 100;
let currentActive = 0;

const removeActive = () =>
  [...links].map((link) => {
    link.classList.remove("active");
  });
const addActive = (current) => [...links][current].classList.add("active");

// Create list item
function createListItem () {
    for (section of sections) {
        sectionName = section.getAttribute('data-nav');
        sectionLink = section.getAttribute('id');
        // create an item for each one
        listItem = document.createElement('li');
        listItem.classList.add("navbar-item");
        //Add the item text
        listItem.innerHTML = `<a href='#${sectionLink}' class="navbar-link">${sectionName}</a>`;
        links.push(listItem);
        //Add listItem to the menu
        menu.appendChild(listItem);
    }
}


document.onscroll = function () {

  /*Current section active */
  const current = [...sections].findIndex(
    (section) =>
      section.offsetTop - window.scrollY - marginTop <= 0 &&
      section.getBoundingClientRect().bottom - marginTop >= 0
  );
  if (current !== currentActive) {
    removeActive();
    if (current == -1) {
      currentActive = 0;
    } else {
      currentActive = current;
    }

    addActive(currentActive);
  } 
    
};


//First element
window.targetId = "head";

// Determines if section is in viewport 

function toggleActiveClass () {
    for (section of sections) {
        if(sectionInViewPort(section)) {
            if(!section.classList.contains('your-active-class')) {
                section.classList.add('your-active-class');
            }
        }   else {
                section.classList.remove('your-active-class');
        }
    }
}

// Build the nav
createListItem();