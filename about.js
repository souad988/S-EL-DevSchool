const menuContainerAbout = document.querySelector('.menu_list_container_about');
const menuIconAbout = document.querySelector('.menu_icon_about');

menuIconAbout.addEventListener('click', () => {
  menuContainerAbout.classList.toggle('show_menu');
});