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