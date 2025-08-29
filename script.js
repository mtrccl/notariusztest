document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".contact-form");
  if(form){
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Dziękujemy za wiadomość! (formularz jest obecnie wyłączony)");
      form.reset();
    });
  }
});
