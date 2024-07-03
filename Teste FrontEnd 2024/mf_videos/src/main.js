document.addEventListener('DOMContentLoaded', function () {
  const searchInput = document.getElementById('search');
  const searchButton = document.getElementById('search-btn');
  const videosContainer = document.getElementById('videos');
  const favoritesContainer = document.getElementById('favorites');
  let favorites = [];

  searchButton.addEventListener('click', function () {
    const query = searchInput.value;
    searchVideos(query);
  });

  async function searchVideos(query) {
    try {
      const response = await fetch(`http://localhost:5000/api/search?q=${query}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      displayVideos(data.items);
    } catch (error) {
      console.error('Error searching videos:', error);
    }
  }

  function displayVideos(videos) {
    videosContainer.innerHTML = '';
    if (!videos || videos.length === 0) {
      videosContainer.innerHTML = '<p>No videos found.</p>';
      return;
    }
    videos.forEach(video => {
      const videoElement = document.createElement('div');
      videoElement.classList.add('video');
      const isFavorite = favorites.find(fav => fav.id.videoId === video.id.videoId);
      videoElement.innerHTML = `
        <img src="${video.snippet.thumbnails.medium.url}" alt="${video.snippet.title}">
        <h3>${video.snippet.title}</h3>
        <p>${video.snippet.description}</p>
        <button class="favorite-btn" data-video-id="${video.id.videoId}">
          ${isFavorite ? 'Favoritar' : 'Favorito'}
        </button>
      `;
      videosContainer.appendChild(videoElement);
    });

    document.querySelectorAll('.favorite-btn').forEach(button => {
      button.addEventListener('click', function () {
        const videoId = this.dataset.videoId;
        const video = videos.find(v => v.id.videoId === videoId);
        if (!video) return;

        if (favorites.find(fav => fav.id.videoId === videoId)) {
          favorites = favorites.filter(fav => fav.id.videoId !== videoId);
        } else {
          favorites.push(video);
        }

        displayFavorites();
        displayVideos(videos);
      });
    });
  }

  function displayFavorites() {
    favoritesContainer.innerHTML = '';
    if (favorites.length === 0) {
      favoritesContainer.innerHTML = '<p>No favorite videos.</p>';
      return;
    }
    favorites.forEach(video => {
      const videoElement = document.createElement('div');
      videoElement.classList.add('video');
      videoElement.innerHTML = `
        <img src="${video.snippet.thumbnails.medium.url}" alt="${video.snippet.title}">
        <h3>${video.snippet.title}</h3>
        <p>${video.snippet.description}</p>
      `;
      favoritesContainer.appendChild(videoElement);
    });
  }

  // Inicializar favoritos a partir do armazenamento local, se necessário
  if (localStorage.getItem('favorites')) {
    favorites = JSON.parse(localStorage.getItem('favorites'));
    displayFavorites();
  }

  // Salvar favoritos no armazenamento local sempre que eles mudarem
  window.addEventListener('beforeunload', function () {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  });
});

  