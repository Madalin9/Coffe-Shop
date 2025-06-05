const container = document.getElementById('galerieContainer');

// Listează aici numele fișierelor din folderul 'Poze'
const images = [
  "cafea1.jpeg", "cafea2.jpeg", "cafea3.jpeg",
  "cafea4.jpeg", "cafea5.jpeg", "loc1.jpeg",
  "loc2.jpeg", "loc3.jpeg", "loc4.jpeg",
  "loc5.jpeg", "loc6.jpeg", "laptop.jpeg",
  "decor cafea.jpeg", "ornament cu cafea.jpeg","cafea+logo.jpeg"
];

// Generează automat imaginile în galerie
images.forEach(image => {
  const img = document.createElement('img');
  img.src = `Poze/${image}`;
  img.alt = image;
  container.appendChild(img);
});

window.addEventListener('load', () => {
  document.body.classList.add('loaded');
});