// Projects expand button
const whatIMade = document.getElementById('whatIMade');
const projects = document.getElementById('projects');
const closer = document.getElementById('project-close');

function projectExpand() {
    whatIMade.style.display = 'none';
    projects.style.display = 'flex';
}
whatIMade.addEventListener('click', projectExpand);

// Project minimize on button click
function projectShrink() {
    if (projects.style.display === 'flex') {
        whatIMade.style.display = 'block';
        projects.style.display = 'none';
    }
};
closer.addEventListener('click', projectShrink);

// See more minimize on click
let seeMore = document.getElementById('seemore-button');
function seeMoreShrink() {
    if (seeMore.style.display = 'block') {
        seeMore.style.display = 'none';
    }
}
seeMore.addEventListener('click', seeMoreShrink);

// See more appear on click top button
const topButton = document.getElementById('top-button');
function seeMoreGrow() {
    if (seeMore.style.display = 'none') {
        seeMore.style.display = 'block';
    }
}
topButton.addEventListener('click', seeMoreGrow);

// Popup images
const popupOne = document.getElementById('first-project');
const popupTwo = document.getElementById('second-project');
const popupThree = document.getElementById('third-project');
const project1 = document.getElementById('project-1');
const project2 = document.getElementById('project-2');
const project3 = document.getElementById('project-3');
function firstPopup() {
    if (popupOne.style.display = 'none') {
        popupOne.style.display = 'block';
    }
}
project1.addEventListener('click', firstPopup);
function secondPopup() {
    if (popupTwo.style.display = 'none') {
        popupTwo.style.display = 'block';
    }
}
project2.addEventListener('click', secondPopup);
function thirdPopup() {
    if (popupThree.style.display = 'none') {
        popupThree.style.display = 'block';
    }
}
project3.addEventListener('click', thirdPopup);
const popupCloseButton = document.getElementsByClassName('popup-close');
function popupClose() {
    for (let i = 0; i < popupCloseButton.length; i++) {
        popupCloseButton[i].addEventListener('click', function() {
            if (popupOne.style.display === 'block' || popupTwo.style.display === 'block' || popupThree.style.display === 'block') {
                popupOne.style.display = 'none';
                popupTwo.style.display = 'none';
                popupThree.style.display = 'none';
          }});
}
}
popupClose();