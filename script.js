// Select necessary elements
const thumbnails = document.querySelectorAll('.thumbnails img');
const lightbox = document.querySelector('.lightbox');
const lightboxImage = document.querySelector('.lightbox-image');
const closeButton = document.querySelector('.close-button');
const overlay = document.querySelector('.overlay');

// Function to open lightbox
thumbnails.forEach(thumbnail => {
  thumbnail.addEventListener('click', () => {
    const fullImageUrl = thumbnail.dataset.full;
    lightboxImage.src = fullImageUrl;
    lightbox.setAttribute('aria-hidden', 'false');
    lightbox.classList.add('active');
  });
});

// Function to close lightbox
const closeLightbox = () => {
  lightbox.setAttribute('aria-hidden', 'true');
  lightbox.classList.remove('active');
  lightboxImage.src = '';
};

// Event listeners for close functionality
closeButton.addEventListener('click', closeLightbox);
overlay.addEventListener('click', closeLightbox);

// Close lightbox with Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && lightbox.classList.contains('active')) {
    closeLightbox();
  }
});
