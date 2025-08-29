// Lightbox – powiększanie zdjęć galerii
document.addEventListener("DOMContentLoaded", () => {
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const caption = document.getElementById('caption');
  const closeBtn = document.querySelector('.close');

  // Wszystkie obrazki w galerii
  document.querySelectorAll('.gallery-img').forEach(img => {
    img.addEventListener('click', () => {
      lightbox.style.display = "block";
      lightboxImg.src = img.src;

      // Szuka najbliższego figcaption w tym samym figure
      const figure = img.closest('figure');
      if (figure) {
        const figcaptions = figure.getElementsByTagName('figcaption');
        if (figcaptions.length > 0) {
          // Łączy wszystkie figcaption w jeden tekst
          caption.textContent = Array.from(figcaptions).map(fc => fc.textContent).join(" | ");
        } else {
          caption.textContent = img.alt;
        }
      } else {
        caption.textContent = img.alt;
      }
    });
  });

  // Zamknięcie lightboxa przy kliknięciu "x"
  closeBtn.addEventListener('click', () => {
    lightbox.style.display = "none";
  });

  // Zamknięcie lightboxa przy kliknięciu w tło
  lightbox.addEventListener('click', (e) => {
    if(e.target === lightbox) {
      lightbox.style.display = "none";
    }
  });
});
