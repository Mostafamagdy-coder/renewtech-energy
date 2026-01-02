// small script: set year and mobile menu toggle
document.getElementById('year').textContent = new Date().getFullYear();

// Mobile menu toggle
const menuToggle = document.getElementById('menuToggle');
const mainNav = document.getElementById('mainNav');
if (menuToggle && mainNav) {
  menuToggle.addEventListener('click', () => {
    if (mainNav.style.display === 'flex' || mainNav.style.display === '') {
      mainNav.style.display = 'none';
    } else {
      mainNav.style.display = 'flex';
      mainNav.style.flexDirection = 'column';
      mainNav.style.position = 'absolute';
      mainNav.style.right = '1rem';
      mainNav.style.top = '64px';
      mainNav.style.background = '#fff';
      mainNav.style.padding = '0.8rem';
      mainNav.style.borderRadius = '8px';
      mainNav.style.boxShadow = '0 8px 30px rgba(2,6,23,0.08)';
    }
  });
}
