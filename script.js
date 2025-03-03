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

narutoClicked=()=>{
  console.log("clicked naruto image ")
  const divs = document.querySelectorAll('.shakable');
    divs.forEach(div => {
      div.classList.add('shake');
      
      // After 1 second, remove the shake class to stop the shake effect
      setTimeout(() => {
        div.classList.remove('shake');
      }, 7000);  
    });
  const numNarutos = Math.floor(Math.random() * (9 - 5 + 1)) + 5; // Generate a random number of Naruto (between 5 and 9)
    
  for (let i = 0; i < numNarutos; i++) {
    createNarutoGif();
  }
}

function createNarutoGif() {
  const gif = document.createElement('img');
  gif.classList.add('naruto-gif');
  gif.src = './assets/narutoRunning.gif'; // Path to your Naruto running GIF
  gif.alt = 'Naruto Running';
    // Set a random vertical position using pixels instead of vh
    const startY = Math.random() * window.innerHeight; // Random vertical position in pixels (0 to window height)
    gif.style.top = `${startY}px`;  // Use px instead of vh for a fixed vertical position
  
    // Add animation delay to stagger their start times
    const delay = Math.random() * 2;  // Random delay between 0 and 2 seconds
    gif.style.animationDelay = `${delay}s`;  // Add delay to each Naruto's animation
  
    // Add a random horizontal offset to ensure Naruto starts at different positions
    const horizontalOffset = Math.random() * 50; // Random horizontal offset between 0 and 50px
    gif.style.left = `-${horizontalOffset + 300}px`; 
    gif.style.position = 'fixed';
    // Add GIF to the body
    document.body.appendChild(gif);
  
    // Set a timeout to remove the GIF after 5 seconds, based on the delay of the gif
    setTimeout(() => {
      document.body.removeChild(gif);
    }, 5000 + (delay * 1000)); 
}