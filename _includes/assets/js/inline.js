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
  const menu = document.querySelector('.nav-btn');
  const body = document.querySelector('body');
  const handleToggle = () => body.classList.toggle('open-nav');

  menu.onclick = () => handleToggle();
  menu.addEventListener('keyup', (event) => {
    if(event.keyCode === 13 || event.keyCode === 32) {
      handleToggle();
    }
  });
});