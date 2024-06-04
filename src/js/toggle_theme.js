const toggleTheme = document.querySelector('#toggle-theme');
const body = document.body;
const menu = document.querySelector('.modal-menu');
const listMobileMenus = document.querySelectorAll('.link-nav');

const battonClose = document.getElementById('closeIcon');
const imgClose = battonClose.querySelector('img');

const battonOpenMobileMenu = document.getElementById('menuIcon');
const burgerMobilemenu = battonOpenMobileMenu ? battonOpenMobileMenu.querySelector('img') : null;


// Load saved theme from localStorage
const savedTheme = localStorage.getItem('theme') || 'light';
body.classList.add(`${savedTheme}-theme`);

// Set the toggle switch state based on the saved theme
if (savedTheme === 'dark') {
  toggleTheme.checked = true;

  menu.classList.add('dark-theme-menu');
  if (imgClose) imgClose.src = './img/dark-close.png';
  if (burgerMobilemenu) burgerMobilemenu.src = './img/header-mobile-menu-white.png'
  listMobileMenus.forEach(menu => {
    menu.classList.add('link-nav-dark');
  });

}

toggleTheme.addEventListener('change', () => {
  if (toggleTheme.checked) {
    body.classList.remove('light-theme');
    body.classList.add('dark-theme');
    menu.classList.add('dark-theme-menu');
    if (burgerMobilemenu) burgerMobilemenu.src = './img/header-mobile-menu-white.png';
    if (imgClose) imgClose.src = './img/dark-close.png';
    imgClose.src = './img/dark-close.png';
    if (listMobileMenus)  listMobileMenus.forEach(menu => {
      menu.classList.add('link-nav-dark');
    });
    localStorage.setItem('theme', 'dark');
  } else {
    body.classList.remove('dark-theme');
    body.classList.add('light-theme');
    menu.classList.remove('dark-theme-menu');
    if (imgClose) imgClose.src = './img/white-close.png';
    if (burgerMobilemenu) burgerMobilemenu.src = './img/header-mobile-menu-dark.png';
    listMobileMenus.forEach(menu => {
      menu.classList.remove('link-nav-dark');
    });
    localStorage.setItem('theme', 'light');
  }
});
