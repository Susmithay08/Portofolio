document.addEventListener('DOMContentLoaded', () => {
    // Get all the sections
    const allSections = document.querySelectorAll('section');

    // Function to hide all sections
    function hideAllSections() {
        allSections.forEach(section => {
            section.style.display = 'none'; // Hide each section
        });
    }

    // Function to handle section navigation
    function showSection(sectionId) {
        hideAllSections(); // Hide all sections
        const section = document.getElementById(sectionId);
        if (section) {
            section.style.display = 'block'; // Show the correct section
            section.scrollIntoView({ behavior: 'smooth', block: 'start' }); // Smooth scroll to section
        }
    }

    // Handle navigation clicks for header links
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault(); // Prevent default link behavior
            const targetId = link.getAttribute('href').substring(1); // Get the section id (without #)
            showSection(targetId); // Show the clicked section
        });
    });
   


    // Handle Resume button separately
    const resumeButton = document.querySelector('a.resume-btn');
    resumeButton.addEventListener('click', (e) => {
        e.preventDefault();
        showSection('resume-section');
    });

    // Handle Projects button separately
    const projectsButton = document.querySelector('a.projects-btn');
    projectsButton.addEventListener('click', (e) => {
        e.preventDefault();
        showSection('projects'); // Show Projects section
    });

    // Handle Certificates button separately
    const certificatesLink = document.querySelector('a[href="#certificates"]');
    certificatesLink.addEventListener('click', (e) => {
        e.preventDefault();
        showSection('certificates'); // Show Certificates section
    });

    // Initially hide the certificates section within Education
    const certificatesSection = document.getElementById('certificates');
    certificatesSection.style.display = 'none';

    // Show certificates section when Education is clicked
    const educationLink = document.querySelector('a[href="#education"]');
    educationLink.addEventListener('click', (e) => {
        e.preventDefault();
        showSection('education');
    });
});
