document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault(); // prevent reload
  alert("✅ Thank you for your message! I’ll get back to you soon.");
  this.reset(); // clear form
});