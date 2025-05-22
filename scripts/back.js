  const points = [
      "Helping product-first companies hire top-tier engineers",
      "We help product-companies hire top-tier technical talent.",
      "Founded by an aerospace engineer, we know what hiring takes.",
      "Bold teams build bold products. We're here to help you forge."
    ];
    let index = 0;
    const pointElement = document.getElementById('point');

    function cyclePoints() {
      pointElement.style.animation = 'none';
      pointElement.offsetHeight;
      pointElement.style.animation = '';
      pointElement.textContent = points[index];
      index = (index + 1) % points.length;
    }

    function toggleMenu() {
      const icons = document.getElementById('socialIcons');
      icons.classList.toggle('show');
    }

    function toggleForm() {
      const form = document.getElementById('contactForm');
      form.style.display = form.style.display === 'flex' ? 'none' : 'flex';
    }

    function storeFormData() {
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const company = document.getElementById('company').value;
      const message = document.getElementById('message').value;

      const formData = {
        name, email, company, message,
        timestamp: new Date().toISOString()
      };

      console.log('Form Data Stored:', formData);
      alert('Form submitted successfully!');

      document.getElementById('name').value = '';
      document.getElementById('email').value = '';
      document.getElementById('company').value = '';
      document.getElementById('message').value = '';
    }

    cyclePoints();
    setInterval(cyclePoints, 4000);

    const icons = document.querySelectorAll('.timeline-icon');
    let glowIndex = 0;
    function glowNextIcon() {
      icons.forEach((icon, i) => {
        icon.classList.toggle('glow', i === glowIndex);
      });
      glowIndex = (glowIndex + 1) % icons.length;
    }
    glowNextIcon();
    setInterval(glowNextIcon, 2000);
    document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector(".hamburger");
    const socialIcons = document.querySelector(".social-icons");

    hamburger.addEventListener("click", () => {
      socialIcons.classList.toggle("show");
    });
  });
  function toggleMenu() {
  const socialIcons = document.getElementById('socialIcons');
  if (socialIcons.style.display === 'flex') {
    socialIcons.style.display = 'none';
  } else {
    socialIcons.style.display = 'flex';
    socialIcons.style.flexDirection = 'column'; // Force column in mobile
  }
}
