const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

if (menuBtn && navLinks) {
  menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });
}

const revealElements = document.querySelectorAll(".reveal");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  { threshold: 0.15 }
);

revealElements.forEach((el) => observer.observe(el));

const whatsappNumber = "91801226144";
const forms = document.querySelectorAll("form[data-whatsapp-form]");
forms.forEach((form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const formType = form.dataset.whatsappForm || "contact";
    const name = form.querySelector('input[name="name"]')?.value.trim() || "";
    const phone = form.querySelector('input[name="phone"]')?.value.trim() || "";
    const message = form.querySelector('textarea[name="message"]')?.value.trim() || "";

    const heading =
      formType === "join"
        ? "New Join Request - APEX Fitness"
        : "New Contact Request - APEX Fitness";

    const text = `${heading}
Name: ${name}
Phone: ${phone}
Message: ${message || "N/A"}
Location: Puthery`;

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, "_blank");
    form.reset();
  });
});
