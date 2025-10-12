document.addEventListener("DOMContentLoaded", () => {
  const readMoreBtn = document.getElementById("readMoreBtn");
  const extraText = document.getElementById("extraText");
  const serviceRadios = document.querySelectorAll("input[name='service']");
  const bookBtn = document.getElementById("bookNowBtn");
  const nameInput = document.getElementById("custName");
  const addressInput = document.getElementById("custAddress");
  const locationInput = document.getElementById("custLocation");
  const getLocationBtn = document.getElementById("getLocationBtn");
  const whatsappNumber = "923243287065";

  // Read More
  readMoreBtn.addEventListener("click", () => {
    extraText.classList.remove("hidden");
    readMoreBtn.style.display = "none";
  });

  // Enable Book Now
  serviceRadios.forEach(radio => {
    radio.addEventListener("change", () => {
      bookBtn.disabled = false;
    });
  });

  // Get Location
  getLocationBtn.addEventListener("click", () => {
    if (navigator.geolocation) {
      getLocationBtn.textContent = "Getting Location...";
      navigator.geolocation.getCurrentPosition(
        pos => {
          const lat = pos.coords.latitude.toFixed(5);
          const lon = pos.coords.longitude.toFixed(5);
          locationInput.value = `https://www.google.com/maps?q=${lat},${lon}`;
          getLocationBtn.textContent = "Location Added ✅";
        },
        () => {
          alert("Please enable GPS to get your location.");
          getLocationBtn.textContent = "📍 Get My Location";
        }
      );
    } else {
      alert("Geolocation not supported.");
    }
  });

  // Book Now
  bookBtn.addEventListener("click", () => {
    const selected = document.querySelector("input[name='service']:checked");
    if (!selected) return alert("Please select a service first.");

    const name = nameInput.value.trim() || "Not provided";
    const address = addressInput.value.trim() || "Not provided";
    const location = locationInput.value.trim() || "Not provided";

    const msg = encodeURIComponent(
`Hello Star Electronics! 👋
I want to book: ${selected.value}

Name: ${name}
Address: ${address}
Location: ${location}`
    );

    window.open(`https://wa.me/${whatsappNumber}?text=${msg}`, "_blank");
  });
});
