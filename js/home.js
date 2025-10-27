// 8 local images
const images = [ 
  "images/img1.png",
  "images/img2.png",
  "images/img3.png",
  "images/img4.png",
  "images/img5.png",
  "images/img6.png",
  "images/img7.png",
  "images/img8.png"
];

// Boxes
const img1 = document.getElementById("img1");
const img2 = document.getElementById("img2");
const img3 = document.getElementById("img3");
const img4 = document.getElementById("img4");

// Function to get 2 random indices (optional exclude array)
function getRandomIndices(exclude = []) {
  let available = images.map((_, i) => i).filter(i => !exclude.includes(i));
  let rand1 = available[Math.floor(Math.random() * available.length)];
  available = available.filter(i => i !== rand1);
  let rand2 = available[Math.floor(Math.random() * available.length)];
  return [rand1, rand2];
}

// Function to change images
function changeImages() {
  // 1 & 4 images
  const [i1, i4] = getRandomIndices();
  img1.src = images[i1];
  img4.src = images[i4];

  // 2 & 3 images (different from 1 & 4)
  const [i2, i3] = getRandomIndices([i1, i4]);
  img2.src = images[i2];
  img3.src = images[i3];
}

// Initial display
changeImages();

// Change every 3 seconds
setInterval(changeImages, 3000);


const slider = document.querySelector('.reviews-slider');

let scrollAmount = 0;
const scrollStep = 2; // pixels per frame
const scrollDelay = 20; // ms delay between frames

function autoScroll() {
  scrollAmount += scrollStep;
  if(scrollAmount >= slider.scrollWidth - slider.clientWidth) {
    scrollAmount = 0; // reset to start
  }
  slider.scrollLeft = scrollAmount;
  requestAnimationFrame(autoScroll);
}

// Start auto-scroll
autoScroll();


document.getElementById('contactForm').addEventListener('submit', function(e){
  e.preventDefault();

  const name = document.getElementById('name').value;
  const phone = document.getElementById('phone').value;
  const area = document.getElementById('area').value;
  const appliances = Array.from(document.getElementById('appliances').selectedOptions).map(opt => opt.value).join(', ');
  const message = document.getElementById('message').value;

  const whatsappMsg = `Hi Star Electronics,%0AName: ${name}%0APhone: ${phone}%0AArea: ${area}%0AAppliances: ${appliances}%0AMessage: ${message}`;

  const whatsappURL = `https://wa.me/923243287065?text=${whatsappMsg}`;
  window.open(whatsappURL, '_blank');
});
