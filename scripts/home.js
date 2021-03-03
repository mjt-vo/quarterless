function initHome() {
  const bodyElm = document.querySelector('body'),
    sectionElms = document.querySelectorAll('section'),
    toggles = document.querySelectorAll('.home__footer__toggle');

    // remove active class from all toggles
  function clearToggles() {
    for (const toggle of toggles) toggle.classList.remove('active');
  }

  for (const toggle of toggles) {
    const { shift } = toggle.dataset;

    toggle.addEventListener('click', () => {
      // trigger only if toggle is not active
      if (!toggle.classList.contains('active')) {
        clearToggles();
        // add active class
        toggle.classList.add('active');

        // shift logic
        if (shift) {
          bodyElm.classList.add('shift');
        }
        else {
          bodyElm.classList.remove('shift');
        }

        // scroll section after animation is finished
        setTimeout(() => {
          for (const sectionElm of sectionElms) {
            sectionElm.scrollTop = 0;
          }
        }, 400);
      }

      // disable focus
      toggle.blur();
    });
  }
}