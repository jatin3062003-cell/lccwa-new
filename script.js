const menuToggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.site-navigation');
const quotes = [...document.querySelectorAll('.quote')];
let currentQuote = 0;
menuToggle.addEventListener('click', () => { const isOpen = navigation.classList.toggle('open'); menuToggle.setAttribute('aria-expanded', isOpen); });
document.querySelectorAll('.site-navigation a').forEach((link) => link.addEventListener('click', () => { navigation.classList.remove('open'); menuToggle.setAttribute('aria-expanded', 'false'); }));
document.querySelectorAll('.nav-trigger').forEach((trigger) => trigger.addEventListener('click', () => {
  const dropdown = trigger.closest('.nav-dropdown');
  const willOpen = !dropdown.classList.contains('open');
  document.querySelectorAll('.nav-dropdown').forEach((item) => { item.classList.remove('open'); item.querySelector('.nav-trigger').setAttribute('aria-expanded', 'false'); });
  if (willOpen) { dropdown.classList.add('open'); trigger.setAttribute('aria-expanded', 'true'); }
}));
function showQuote(index) { quotes[currentQuote].classList.remove('active'); currentQuote = (index + quotes.length) % quotes.length; quotes[currentQuote].classList.add('active'); }
document.querySelector('.previous').addEventListener('click', () => showQuote(currentQuote - 1));
document.querySelector('.next').addEventListener('click', () => showQuote(currentQuote + 1));
