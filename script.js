document.addEventListener("DOMContentLoaded", () => {
  const heroElements = document.querySelectorAll(".animate-in");
  const navButtons = document.querySelectorAll(".nav-button");

  heroElements.forEach((el, index) => {
    const delay = index * 200;
    setTimeout(() => {
      el.classList.add("is-visible");
    }, delay);
  });

  navButtons.forEach((button, index) => {
    const delay = 400 + index * 120;
    setTimeout(() => {
      button.classList.add("is-visible");
    }, delay);

    button.addEventListener("click", () => {
      button.classList.add("is-pressed");
      setTimeout(() => {
        button.classList.remove("is-pressed");
      }, 200);
    });
  });
});

