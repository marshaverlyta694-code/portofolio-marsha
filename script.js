const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.primary-nav');

menuButton.addEventListener('click', () => {
  const isExpanded = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!isExpanded));
  menuButton.setAttribute('aria-label', isExpanded ? 'Buka menu' : 'Tutup menu');
  navigation.classList.toggle('is-open', !isExpanded);
});

navigation.addEventListener('click', (event) => {
  if (event.target.closest('a')) {
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Buka menu');
    navigation.classList.remove('is-open');
  }
});

document.querySelectorAll('.interactive-art').forEach((interactiveArt) => {
  const toggleArt = () => {
    const isActive = interactiveArt.classList.toggle('is-active');
    interactiveArt.setAttribute('aria-pressed', String(isActive));
  };

  interactiveArt.addEventListener('click', toggleArt);
  interactiveArt.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      toggleArt();
    }
  });
});
