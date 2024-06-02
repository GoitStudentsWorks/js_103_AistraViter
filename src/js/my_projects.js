document.addEventListener('DOMContentLoaded', () => {
    const projectList = document.querySelector('.my-project-list');
    const loadMoreButton = document.querySelector('.load-more-btn');
    const projects = projectList.querySelectorAll('.my-project-list-item');
    const projectsPerLoad = 3;
    let currentIndex = 3;

    function loadMoreProjects() {
        for (let i = 0; i < projectsPerLoad; i++) {
            if (currentIndex >= projects.length) {
                loadMoreButton.style.display = 'none';
                break;
            }
            projects[currentIndex].style.display = 'block';
            currentIndex++;
        }
    }

    loadMoreButton.addEventListener('click', loadMoreProjects);
});
