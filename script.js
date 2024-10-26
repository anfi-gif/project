function openDetailPage(section) {
    // Get the current project name and owner
    const projectName = document.getElementById('project-name').value;
    const projectOwner = document.getElementById('project-owner').value;

    // Create a URL with query parameters
    const url = `detail.html?section=${encodeURIComponent(section)}&project=${encodeURIComponent(projectName)}&owner=${encodeURIComponent(projectOwner)}`;

    // Open the new page
    window.open(url, '_blank');
}
