if (window.netlifyIdentity) {
  window.netlifyIdentity.on("init", user => {
    if (!user) {
      window.netlifyIdentity.on("login", () => {
        document.location.href = "/admin/";
      });
    }
  });
}

document.addEventListener("DOMContentLoaded", function() {
  const doc = document.querySelector('html')
  doc.classList.remove('no-js');
  doc.classList.add('js');

  const menuBtn = document.querySelector('.nav-btn');
  const body = document.querySelector('body');
  const nav = document.querySelector('.side-nav');
  const logoAnim = document.querySelector('.logo-anim')

  menuBtn.addEventListener('click', function(){
    if (body.classList.contains('open-nav')) {
      menuBtn.setAttribute('aria-expanded', 'false');
      body.classList.remove('open-nav');
      logoAnim.classList.remove('logo-anim');
      nav.classList.remove('nav-trap')
    } else {
      body.classList.add('open-nav');
      nav.classList.add('nav-trap');
      menuBtn.setAttribute('aria-expanded', 'true');

      // Focus trap
      const focusableElements =
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
      const navigation = document.querySelector('.nav-trap'); // select the modal by its id
      const firstFocusableElement = navigation.querySelectorAll(focusableElements)[0]; // get first element to be focused inside modal
      const focusableContent = navigation.querySelectorAll(focusableElements);
      const lastFocusableElement = focusableContent[focusableContent.length - 1]; // get last element to be focused inside modal


      document.addEventListener('keydown', function(e) {
        let isTabPressed = e.key === 'Tab' || e.keyCode === 9;

        if (!isTabPressed) {
          return;
        }

        if (e.shiftKey) { // if shift key pressed for shift + tab combination
          if (document.activeElement === firstFocusableElement) {
            lastFocusableElement.focus(); // add focus for the last focusable element
            e.preventDefault();
          }
        } else { // if tab key is pressed
          if (document.activeElement === lastFocusableElement) { // if focused has reached to last focusable element then focus first focusable element after pressing tab
            firstFocusableElement.focus(); // add focus for the first focusable element
            e.preventDefault();
          }
        }
      });
    firstFocusableElement.focus();
    }
  });

const STORAGE_KEY = 'user-color-scheme';
const COLOR_MODE_KEY = '--color-mode';

const modeToggleButton = document.querySelector('.js-mode-toggle');
const modeToggleText = document.querySelector('.js-mode-toggle-text');
const modeStatusElement = document.querySelector('.js-mode-status');
const getCSSCustomProp = propKey => {
  let response = getComputedStyle(document.documentElement).getPropertyValue(propKey);

  if (response.length) {
    response = response.replace(/\"/g, '').trim();
  }

  return response;
};
const applySetting = passedSetting => {
  let currentSetting = passedSetting || localStorage.getItem(STORAGE_KEY);

  if (currentSetting) {
    document.documentElement.setAttribute('data-user-color-scheme', currentSetting);
    setButtonLabelAndStatus(currentSetting);
  } else {
    setButtonLabelAndStatus(getCSSCustomProp(COLOR_MODE_KEY));
  }
};
const setButtonLabelAndStatus = currentSetting => {
  modeToggleText.innerText = `Enable ${
    currentSetting === 'dark' ? 'light' : 'dark'
  } mode`;
  modeStatusElement.innerText = `Color mode is now "${currentSetting}"`;
};
const toggleSetting = () => {
  let currentSetting = localStorage.getItem(STORAGE_KEY);

  switch (currentSetting) {
    case null:
      currentSetting = getCSSCustomProp(COLOR_MODE_KEY) === 'dark' ? 'light' : 'dark';
      break;
    case 'light':
      currentSetting = 'dark';
      break;
    case 'dark':
      currentSetting = 'light';
      break;
  }

  localStorage.setItem(STORAGE_KEY, currentSetting);

  return currentSetting;
};
modeToggleButton.addEventListener('click', evt => {
  evt.preventDefault();

  applySetting(toggleSetting());
});

applySetting();

});


