// Projects expand button
const whatIMade = document.getElementById('whatIMade');
const projects = document.getElementById('projects');
const closer = document.getElementById('project-close');

function projectExpand() {
    whatIMade.style.display = 'none';
    projects.style.display = 'flex';
}
whatIMade.addEventListener('click', projectExpand);

// Project minimize on outside click
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