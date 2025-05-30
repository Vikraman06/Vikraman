document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");
  const status = document.getElementById("form-status");

  form.addEventListener("submit", function (e) {

    const name = form.querySelector('input[type="text"]').value.trim();
    const email = form.querySelector('input[type="email"]').value.trim();
    const message = form.querySelector('textarea').value.trim();

    // Basic validation
    if (!name || !email || !message) {
      status.style.color = "red";
      status.textContent = "Please fill in all fields.";
      return;
    }

    // Email format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      status.style.color = "red";
      status.textContent = "Please enter a valid email address.";
      return;
    }

    // Simulate sending process
    status.style.color = "green";
    status.textContent = "Sending message...";

    setTimeout(() => {
      // Hide form and show success message
      form.style.display = "none";
      status.textContent = "✅ Thank you, your message has been sent!";
    }, 1000);
  });
});
