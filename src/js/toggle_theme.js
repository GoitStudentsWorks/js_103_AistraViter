const toggleTheme = document.querySelector('#toggle-theme');
const body = document.body;

// Load saved theme from localStorage
const savedTheme = localStorage.getItem('theme') || 'light';
body.classList.add(`${savedTheme}-theme`);

// Set the toggle switch state based on the saved theme
if (savedTheme === 'dark') {
  themeToggle.checked = true;
}

toggleTheme.addEventListener('change', () => {
  if (toggleTheme.checked) {
    body.classList.remove('light-theme');
    body.classList.add('dark-theme');
    localStorage.setItem('theme', 'dark');
  } else {
    body.classList.remove('dark-theme');
    body.classList.add('light-theme');
    localStorage.setItem('theme', 'light');
  }
});
