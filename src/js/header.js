document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.getElementById('menuIcon');
    const closeIcon = document.getElementById('closeIcon');
    const menu = document.getElementById('menu');
    const links = document.querySelectorAll('.link-nav');
  
    // Показати меню
    menuIcon.addEventListener('click', () => {
      menu.classList.add('active');
    });
  
    // Закрити меню по кнопці закриття
    closeIcon.addEventListener('click', () => {
      menu.classList.remove('active');
    });
  
    // Закрити меню по натисканню на лінк
    links.forEach(link => {
      link.addEventListener('click', () => {
        menu.classList.remove('active');
      });
    });
  });