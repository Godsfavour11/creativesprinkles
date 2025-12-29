const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");

hamburger.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

const feedbackBtn = document.getElementById("feedbackBtn");

feedbackBtn.addEventListener("click", () => {
  const hasIssue = confirm(
    "Did you experience any issues with this website?\n\nOK = Yes\nCancel = No"
  );

  if (hasIssue) {
    const phoneNumber = "2348142515485"; // WhatsApp number (no +, no spaces)
    const message =
      "Hello, I experienced an issue while using your website and would like to report it.";

    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappLink, "_blank");
  } else {
    alert("Thank you for visiting this website !");
  }
});
