// Select the theme toggle button
const themeToggleBtn = document.getElementById('theme-toggle');

// Check for saved user preference in Local Storage (Stockage local)
const currentTheme = localStorage.getItem('theme');

// If a preference exists, apply it immediately
if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
}

// Add an Event Listener (Écouteur d'événements) to handle button clicks
themeToggleBtn.addEventListener('click', () => {
    // Determine the current theme
    let theme = document.documentElement.getAttribute('data-theme');
    
    // Toggle the theme
    if (theme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    }
});