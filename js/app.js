// ===== Mobile Menu Toggle =====
// const hamburger = document.getElementById("hamburger");
// const menu = document.getElementById("menu");

// hamburger.addEventListener("click", () => {
//   menu.classList.toggle("active");
// });

const slidesContainer = document.querySelector(".slides");
const slides = document.querySelectorAll(".slide-item");
let index = 0;

// Clone slides for smooth infinite scrolling
slides.forEach(slide => {
  const clone = slide.cloneNode(true);
  slidesContainer.appendChild(clone);
});

function moveSlider() {
  const isMobile = window.innerWidth <= 768;
  const visibleSlides = isMobile ? 1 : 3; // ✅ 1 on mobile, 3 on PC
  index++;

  slidesContainer.style.transition = "transform 1.2s ease-in-out";
  slidesContainer.style.transform = `translateX(-${index * (100 / visibleSlides)}%)`;

  // ✅ Smooth infinite reset (no white flash)
  if (index >= slides.length) {
    setTimeout(() => {
      slidesContainer.style.transition = "none";
      index = 0;
      slidesContainer.style.transform = "translateX(0)";
    }, 1200);
  }
}

// ✅ Slow speed for video clarity
setInterval(moveSlider, 2500);

// ✅ Fix layout reset on resize
window.addEventListener("resize", () => {
  slidesContainer.style.transition = "none";
  index = 0;
  slidesContainer.style.transform = "translateX(0)";
});

// ===== Service Redirect =====
function openService(pageName) {
  // Example: openService('microwave.html')
  window.location.href = pageName;
}


document.addEventListener("DOMContentLoaded", () => {
  // Only the services you added as cards
  const services = [
    { name: "Kitchen Hood (Chimney) Service", page: "chimney.html" },
    { name: "Microwave Repair", page: "microwave.html" },
    { name: "Commercial Juicer Repair", page: "commjuicer.html" },
    { name: "Aata Ghoondne Machine Repair", page: "aata.html" },
    { name: "Fan Repair", page: "fan.html" },
    { name: "Vaccuum Cleaner Repair", page: "vaccuum.html" },
    { name: "Washing Machine", page: "washing-machine.html" },
    { name: "Food Factory Repair", page: "mixer.html" },
    { name: "Pressure Washer (Karcher) Repair", page: "katcher.html" },
    { name: "Air Fryer Repair", page: "fryer.html" },
    { name: "Clothes Steamer Repair", page: "steamiron.html" },
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



function showMoreServices() {
    const newServices = document.querySelectorAll('.all-services .small-card:nth-child(n+13)');
    newServices.forEach(card => card.style.display = 'block');
    document.querySelector('.view-all-card').style.display = 'none';
  }

  // Initially hide additional services
  document.addEventListener('DOMContentLoaded', () => {
    const newServices = document.querySelectorAll('.all-services .small-card:nth-child(n+13)');
    newServices.forEach(card => card.style.display = 'none');
  });


  function toggleMenu(x) {
  x.classList.toggle("change");

  document.getElementById("menu").classList,toggle("active")
}

// https://wa.me/923243287065?text=Hi%20Star%20Electronics!%20I%20want%20to%20book%20a%20service.