(function () {
  const hero = document.querySelector(".hero");
  if (!hero) return;

  const slides = Array.from(hero.querySelectorAll(".hero__slide"));
  const dotsWrap = hero.querySelector(".hero__dots");
  if (slides.length < 2) return;

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let index = 0;
  let timer = null;
  const INTERVAL = 4000;

  function goTo(i) {
    index = (i + slides.length) % slides.length;
    slides.forEach((slide, n) => {
      slide.classList.toggle("is-active", n === index);
    });
    if (dotsWrap) {
      dotsWrap.querySelectorAll(".hero__dot").forEach((dot, n) => {
        dot.setAttribute("aria-selected", n === index ? "true" : "false");
      });
    }
  }

  function next() {
    goTo(index + 1);
  }

  function start() {
    stop();
    if (reduceMotion) return;
    timer = window.setInterval(next, INTERVAL);
  }

  function stop() {
    if (timer) {
      window.clearInterval(timer);
      timer = null;
    }
  }

  if (dotsWrap) {
    dotsWrap.innerHTML = slides
      .map(
        (_, n) =>
          `<button type="button" class="hero__dot" role="tab" aria-label="Foto ${n + 1}" aria-selected="${n === 0 ? "true" : "false"}"></button>`
      )
      .join("");

    dotsWrap.querySelectorAll(".hero__dot").forEach((dot, n) => {
      dot.addEventListener("click", () => {
        goTo(n);
        start();
      });
    });
  }

  document.addEventListener("visibilitychange", () => {
    if (document.hidden) stop();
    else start();
  });

  goTo(0);
  start();
})();
