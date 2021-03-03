function initNav() {
  const bodyElm = document.querySelector('body'),
    headerElm = document.querySelector('header'),
    navToggle = document.querySelector('.nav__toggle');

  let isActive = false;

  function disableActiveState() {
    if (isActive) {
      navToggle.innerHTML = 'MENU';
      headerElm.classList.remove('active');
      isActive = false;
    }
  }

  navToggle.addEventListener('click', (e) => {
    e.stopPropagation();
    
    // trigger active state
    if (!isActive) {
      navToggle.innerHTML = 'CLOSE';
      headerElm.classList.add('active');
      isActive = true;
    }
    // disable active state
    else {
     disableActiveState(); 
    }

    navToggle.blur()
  });

  bodyElm.addEventListener('click', () => {
    disableActiveState();
  });

  headerElm.addEventListener('click', (e) => {
    e.stopPropagation();
  });
}