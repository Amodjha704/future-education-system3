// Modal logic (index.html)
document.addEventListener('DOMContentLoaded', function() {
  // Modal for info cards
  const modal = document.getElementById('modal');
  const modalBody = document.getElementById('modalBody');
  const closeModal = document.getElementById('closeModal');
  if (modal && modalBody && closeModal) {
    closeModal.onclick = () => modal.style.display = 'none';
    window.onclick = function(event) {
      if (event.target == modal) modal.style.display = 'none';
    }
  }

  // About/contact modal logic (index.html)
  const contactBtn = document.getElementById('contactBtn');
  const contactModal = document.getElementById('contactModal');
  const closeContact = document.getElementById('closeContact');
  if (contactBtn && contactModal && closeContact) {
    contactBtn.onclick = () => contactModal.style.display = 'flex';
    closeContact.onclick = () => contactModal.style.display = 'none';
    window.onclick = function(event) {
      if (event.target == contactModal) contactModal.style.display = 'none';
      if (event.target == modal) modal.style.display = 'none';
    }
  }

  // Modal card content (for index.html)
  window.showModal = function(type) {
    if (!modal || !modalBody) return;
    if (type === 'tech') {
      modalBody.innerHTML = `
        <h3>Future Technologies</h3>
        <ul style="text-align:left;">
          <li><strong>AI Tutors:</strong> Personalized learning, instant feedback, adaptive guidance.</li>
          <li><strong>VR Classrooms:</strong> Immersive, interactive simulations and virtual field trips.</li>
          <li><strong>Adaptive Learning:</strong> Platforms that adjust to each learner’s pace and style.</li>
        </ul>
        <a href="technologies.html" class="modal-link">See more</a>
      `;
    } else if (type === 'methods') {
      modalBody.innerHTML = `
        <h3>Innovative Methodologies</h3>
        <ul style="text-align:left;">
          <li><strong>Flipped Classroom:</strong> Learn at home, apply in class.</li>
          <li><strong>Gamification:</strong> Game elements to boost engagement.</li>
          <li><strong>Project-Based Learning:</strong> Real-world projects for deeper understanding.</li>
        </ul>
        <a href="methodologies.html" class="modal-link">See more</a>
      `;
    }
    modal.style.display = 'flex';
  }

  // "Learn More" button opens modal with intro
  const learnMoreBtn = document.getElementById('learnMoreBtn');
  if (learnMoreBtn) {
    learnMoreBtn.onclick = function() {
      if (!modal || !modalBody) return;
      modalBody.innerHTML = `
        <h3>Welcome to the Future of Education</h3>
        <p>Discover how AI, VR, and innovative teaching strategies are making learning more personal, effective, and exciting. Use the Technologies and Methodologies pages to dive into details!</p>
      `;
      modal.style.display = 'flex';
    }
  }

  // Contact form for index.html modal
  const contactForm = document.getElementById('contactForm');
  const thankYouMsg = document.getElementById('thankYouMsg');
  if (contactForm && thankYouMsg) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      contactForm.style.display = 'none';
      thankYouMsg.style.display = 'block';
    });
  }

  // Technologies.html: Card details toggle
  window.toggleDetails = function(btn) {
    const details = btn.nextElementSibling;
    if (details.style.display === "block") {
      details.style.display = "none";
      btn.textContent = "Show Details";
    } else {
      details.style.display = "block";
      btn.textContent = "Hide Details";
    }
  }

  // Methodologies.html: Collapsible sections
  const collapsibles = document.querySelectorAll(".collapsible");
  collapsibles.forEach(btn => {
    btn.addEventListener("click", function() {
      this.classList.toggle("active");
      const content = this.nextElementSibling;
      if (content.style.display === "block") {
        content.style.display = "none";
      } else {
        content.style.display = "block";
      }
    });
  });

  // About.html: Contact form
  const contactForm2 = document.getElementById('contactForm2');
  const thankYouMsg2 = document.getElementById('thankYouMsg2');
  if (contactForm2 && thankYouMsg2) {
    contactForm2.addEventListener('submit', function(e) {
      e.preventDefault();
      contactForm2.style.display = 'none';
      thankYouMsg2.style.display = 'block';
    });
  }
});
