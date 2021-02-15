function initHome() {
  const bodyElm = document.querySelector('body'),
    toggles = document.querySelectorAll('.home-footer--toggle');

  function clearToggles() {
    for (const toggle of toggles) {
      toggle.classList.remove('active');
    }
  }

  for (const toggle of toggles) {
    const { shift } = toggle.dataset;

    toggle.addEventListener('click', () => {
      clearToggles();
      toggle.classList.add('active');

      if (shift) {
        bodyElm.classList.add('shift');
      }
      else {
        bodyElm.classList.remove('shift');
      }
      
      toggle.blur();
    });
  }
}