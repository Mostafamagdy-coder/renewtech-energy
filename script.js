// بسيطة: سنة تلقائية، تفعيل قائمة الجوال، تحقق بسيط قبل الإرسال
document.getElementById('year').textContent = new Date().getFullYear();

// Mobile menu toggle
const menuToggle = document.getElementById('menuToggle');
const mainNav = document.getElementById('mainNav');
menuToggle && menuToggle.addEventListener('click', () => {
  if (mainNav.style.display === 'flex' || mainNav.style.display === '') {
    mainNav.style.display = 'none';
  } else {
    mainNav.style.display = 'flex';
  }
});

// بسيطة: تأكيد إرسال النموذج (يمكن ربط Formspree لاحقاً)
const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', (e) => {
    const email = form.querySelector('input[name="email"]').value;
    if (!email.includes('@')) {
      e.preventDefault();
      alert('من فضلك ضع بريد إلكتروني صحيح');
    } else {
      // النموذج يُرسل تلقائياً إلى action المحدد
    }
  });
}
