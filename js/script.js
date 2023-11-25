const carrossel = document.querySelector('.carrossel');
const images = carrossel.querySelectorAll('img');
let currentIndex = 0;

function showImage(index) {
  images.forEach((img, i) => {
    if (i === index) {
      img.style.display = 'block';
    } else {
      img.style.display = 'none';
    }
  });
}

function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  showImage(currentIndex);
}

// Iniciar o carrossel
showImage(currentIndex);

// Trocar automaticamente as imagens a cada 3 segundos (3000ms)
setInterval(nextImage, 3000);
