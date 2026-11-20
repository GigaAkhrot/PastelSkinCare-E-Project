
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/i;
    const phonePattern = /^\d{7,15}$/;

    document.getElementById("contactForm").addEventListener("submit", function (e) {
      e.preventDefault();

      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const phone = document.getElementById("phone").value.trim();
      const query = document.getElementById("query").value.trim();

      if (!name || !email || !phone || !query) {
        alert("Please fill in all fields.");
        return;
      }

      if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return;
      }

      if (!phonePattern.test(phone)) {
        alert("Please enter a valid phone number (digits only).");
        return;
      }

      alert("Message sent successfully!");
      this.reset();
    });