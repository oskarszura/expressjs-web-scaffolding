const leftMenuDOM = document.querySelector('.js-left-menu');
const leftMenuActivatorDOM = document.querySelector('.js-left-menu-activator');

if (leftMenuDOM) {
  leftMenuActivatorDOM.addEventListener('click', () => {
    leftMenuDOM.classList.toggle('left-menu--is-active');
  });
}
