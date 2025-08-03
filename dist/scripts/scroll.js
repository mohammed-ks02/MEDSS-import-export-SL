document.addEventListener('DOMContentLoaded', function() {
  const scrollBtns = document.querySelectorAll('.scroll-btn');

  scrollBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      const direction = this.dataset.direction;
      const container = this.parentElement.querySelector('.overflow-x-auto');

      if (direction === 'right') {
        container.scrollBy({
          left: 300,
          behavior: 'smooth'
        });
      } else {
        container.scrollBy({
          left: -300,
          behavior: 'smooth'
        });
      }
    });
  });
});

