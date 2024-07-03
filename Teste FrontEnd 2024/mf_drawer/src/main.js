document.addEventListener('DOMContentLoaded', function () {
  const links = document.querySelectorAll('nav a');

  links.forEach(link => {
    link.addEventListener('click', function (event) {
      event.preventDefault();
      const href = this.getAttribute('href');
      navigateTo(href);
    });
  });

  function navigateTo(href) {
    if (href === '/videos') {
      // Carregar a aplicação de vídeos
      document.getElementById('content').innerHTML = '<iframe src="http://localhost:3002" style="width: 100%; height: 100%; border: none;"></iframe>';
    } else if (href === '/favoritos') {
      // Carregar a aplicação de favoritos
      document.getElementById('content').innerHTML = '<iframe src="http://localhost:3002/favorites" style="width: 100%; height: 100%; border: none;"></iframe>';
    }
  }
});
