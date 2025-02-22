function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
function setTheme(mode) {
  const html = document.documentElement;
  localStorage.setItem("theme", mode);

  if (mode === "dark") {
      html.classList.add("dark");
      document.getElementById("light-mode").classList.remove("bg-white");
      document.getElementById("dark-mode").classList.add("bg-gray-600");
  } else {
      html.classList.remove("dark");
      document.getElementById("dark-mode").classList.remove("bg-gray-600");
      document.getElementById("light-mode").classList.add("bg-white");
  }
}

// Apply the saved theme on page load
document.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme") || "light";
  setTheme(savedTheme);


  function createPetal() {
    const petal = document.createElement("div");
    petal.classList.add("sakura-petal");

    // Random position at the top
    petal.style.left = `${Math.random() * 100}vw`;
    petal.style.animationDuration = `${Math.random() * 5 + 5}s`; // Vary speed
    petal.style.opacity = Math.random();

    document.body.appendChild(petal);

    // Remove petal after animation ends
    setTimeout(() => {
      petal.remove();
    }, 10000); // Should match the animation duration
  }  setInterval(createPetal, 500);

});

document.querySelectorAll(".nameToggle").forEach((nameElement) => {
  nameElement.addEventListener("click", function () {
    let isEnglish = this.textContent.trim() === "Keval Krishna"; // Check current text

    this.classList.add("fade-out");

    setTimeout(() => {
      document.querySelectorAll(".nameToggle").forEach((el) => {
        el.textContent = isEnglish ? "ケバル クリシュナ" : "Keval Krishna";
        el.classList.remove("fade-out");
        el.classList.add("fade-in");
      });
    }, 400);

    setTimeout(() => {
      document.querySelectorAll(".nameToggle").forEach((el) => {
        el.classList.remove("fade-in");
      });
    }, 1000);

    // Handle OST audio play only if switching from English to Japanese
    const audio = document.getElementById("ostAudio");

    if (audio) {
      if (isEnglish && audio.paused) {
        audio.play();
        setTimeout(() => {
          if (!audio.paused) {
            audio.pause();
            audio.currentTime = 0;
          }
        }, 5000); // Auto-stop after 5 sec
      } else {
        audio.pause();
        audio.currentTime = 0;
      }
    }
  });
});
