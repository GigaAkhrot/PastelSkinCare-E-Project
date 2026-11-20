    document.getElementById("loginForm").addEventListener("submit", function (e) {
      e.preventDefault(); // form submit roko jab tak check na ho jaye

      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const password = document.getElementById("password").value.trim();

      // Name validation: only letters & <= 10 characters
      if (!/^[a-zA-Z]+$/.test(name)) {
        alert("Name sirf alphabets par mushtamil hona chahiye.");
        return;
      }
      if (name.length > 10) {
        alert("Name 10 characters se zyada nahi hona chahiye.");
        return;
      }

      // Email validation: must include '@' and '.'
      if (!email.includes("@") || !email.includes(".")) {
        alert("Email mein '@' aur '.' hona lazmi hai.");
        return;
      }

      // Password validation: must be more than 6 characters
      if (password.length <= 6) {
        alert("Password 6 characters se zyada hona chahiye.");
        return;
      }

      // All good
      alert("Form submitted successfully!");
      // Actual form submit karna ho to niche line ko uncomment karo:
      // this.submit();
      window.location.href = "index2.html"; // redirect on successful login
    });

