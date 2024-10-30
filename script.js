const goUpBtn = document.getElementById('go-up-btn');

goUpBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });