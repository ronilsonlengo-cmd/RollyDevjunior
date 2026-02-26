// Navigation buttons: add slide-out animation then navigate
document.addEventListener('DOMContentLoaded', function () {
  const buttons = document.querySelectorAll('.nav-btn');
  const content = document.querySelector('.content') || document.body;
  buttons.forEach(btn => {
    btn.addEventListener('click', function () {
      const target = btn.dataset.target;
      if (!target) return;
      // decide direction: if button has class 'left' we slide out to right (user sees content move right)
      if (btn.classList.contains('left')) {
        content.classList.add('slide-out-right');
      } else {
        content.classList.add('slide-out-left');
      }
      // small delay to allow animation
      setTimeout(() => { window.location.href = target; }, 360);
    });
  });
});
