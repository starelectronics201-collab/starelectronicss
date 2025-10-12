// ===== Mobile Menu Toggle =====
const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");

hamburger.addEventListener("click", () => {
  menu.classList.toggle("active");
});

// ===== Infinite Slider =====
const slidesContainer = document.querySelector(".slides");
const slides = document.querySelectorAll(".slides img");

// Clone slides to make infinite loop
slides.forEach(slide => {
  const clone = slide.cloneNode(true);
  slidesContainer.appendChild(clone);
});

let currentIndex = 0;
let slideWidth = slides[0].clientWidth + 20; // 20px gap between slides

function moveSlider() {
  currentIndex++;
  slidesContainer.style.transition = "transform 0.3s linear";
  slidesContainer.style.transform = `translateX(-${currentIndex * slideWidth}px)`;

  // Reset to start for infinite loop
  if (currentIndex >= slides.length) {
    setTimeout(() => {
      slidesContainer.style.transition = "none";
      currentIndex = 0;
      slidesContainer.style.transform = `translateX(0px)`;
    }, 300);
  }
}

// Faster auto slide
setInterval(moveSlider, 1000);

// ===== Service Redirect =====
function openService(pageName) {
  // Example: openService('microwave.html')
  window.location.href = pageName;
}


document.addEventListener("DOMContentLoaded", () => {
  // Only the services you added as cards
  const services = [
    { name: "AC Service", page: "ac.html" },
    { name: "Fan Repair", page: "fan.html" },
    { name: "Chimney Service", page: "chimney.html" },
    { name: "Microwave Repair", page: "microwave.html" },
    { name: "Washing Machine", page: "washing-machine.html" }
    // Add only the services you created pages for
  ];

  const searchInput = document.getElementById("serviceSearch");
  const searchResults = document.getElementById("searchResults");
  const searchBtn = document.getElementById("searchBtn");

  const renderResults = (filter = "") => {
    searchResults.innerHTML = "";
    const filtered = services.filter(s => s.name.toLowerCase().includes(filter.toLowerCase()));
    
    filtered.forEach(service => {
      const li = document.createElement("li");
      li.textContent = service.name;
      li.addEventListener("click", () => {
        // Redirect to the respective page
        window.location.href = service.page;
      });
      searchResults.appendChild(li);
    });

    if(filtered.length > 0) searchResults.classList.remove("hidden");
    else searchResults.classList.add("hidden");
  };

  // Show all services (trending) on focus
  searchInput.addEventListener("focus", () => {
    renderResults();
  });

  // Live search filter
  searchInput.addEventListener("input", () => {
    renderResults(searchInput.value);
  });

  // Hide dropdown on clicking outside
  document.addEventListener("click", (e) => {
    if(!searchInput.contains(e.target) && !searchResults.contains(e.target)) {
      searchResults.classList.add("hidden");
    }
  });

  // Search button click
  searchBtn.addEventListener("click", () => {
    renderResults(searchInput.value);
  });
});





document.addEventListener("DOMContentLoaded", () => {
  // Mobile Menu Toggle
  const hamburger = document.getElementById("hamburger");
  const menu = document.getElementById("menu");
  hamburger?.addEventListener("click", () => menu.classList.toggle("active"));

  // Read More Toggle
  const readMoreBtn = document.getElementById("readMoreBtn");
  const moreText = document.querySelector(".more-text");
  readMoreBtn?.addEventListener("click", () => {
    moreText.classList.remove("hidden");
    readMoreBtn.style.display = "none";
  });

  // Booking Form
  const form = document.getElementById("serviceForm");
  const whatsappNumber = "923243287065";
  const emailTo = "hamzashakil181@gmail.com";

  form?.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("custName").value.trim();
    const contact = document.getElementById("custContact").value.trim();
    const email = document.getElementById("custEmail").value.trim() || "Not provided";
    const whatsapp = document.getElementById("custWhatsApp").value.trim() || "Not provided";
    const address = document.getElementById("custAddress").value.trim();
    const location = document.getElementById("custLocation").value.trim() || "Not provided";
    const service = document.getElementById("serviceSearch").value.trim();
    const schedule = document.getElementById("serviceDate").value || "Not selected";

    if(!service) return alert("Please enter service!");

    const msg = encodeURIComponent(
`Hello Star Electronics! 👋
I want to book: ${service}
Name: ${name}
Contact: ${contact}
WhatsApp: ${whatsapp}
Email: ${email}
Address: ${address}
Location: ${location}
Schedule: ${schedule}`
    );

    // WhatsApp + Email
    window.open(`https://wa.me/${whatsappNumber}?text=${msg}`, "_blank");
    window.open(`mailto:${emailTo}?subject=New Service Booking&body=${msg}`);
  });
});


 


