document.getElementById('current-year').textContent =
new Date().getFullYear();

const burger = document.querySelector('.burger');
  const nav = document.querySelector('.navigation');
  const closeBtn = document.querySelector('.close-btn');

 // Открытие меню
 burger.addEventListener('click', () => {
  nav.classList.add('active');
});

// Закрытие меню
closeBtn.addEventListener('click', () => {
  nav.classList.remove('active');
});

function toggleAccordion(header) {
  // Работает только если ширина экрана меньше или равна 768px
  if (window.innerWidth > 768) return;

  const list = header.nextElementSibling;
  if (!list) return;

  const isVisible = list.style.display === 'block';

  // Закрыть все списки
  document.querySelectorAll('.footer-ul').forEach(ul => ul.style.display = 'none');

  // Показать/скрыть текущий
  list.style.display = isVisible ? 'none' : 'block';
}

// Показываем списки при ресайзе окна на ширину > 768
window.addEventListener('resize', () => {
  if (window.innerWidth > 768) {
    document.querySelectorAll('.footer-ul').forEach(ul => ul.style.display = 'block');
  } else {
    // скрываем все кроме подписки (если надо)
    document.querySelectorAll('.footer-div:not(.footer-subscribe) .footer-ul').forEach(ul => ul.style.display = 'none');
  }
});