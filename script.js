const intro = document.getElementById("intro-container");
const mayorImage = document.getElementById("mayor-image");

const envelopeContainer = document.getElementById("envelope-container");

const letterContainer = document.getElementById("letter-container");
const letterWindow = document.querySelector(".letter-window");

const noBtn = document.querySelector(".no-btn");
const yesBtn = document.querySelector(".yes-btn");

const title = document.getElementById("letter-title");
const catImg = document.getElementById("letter-cat");
const buttons = document.getElementById("letter-buttons");
const finalText = document.getElementById("final-text");

/* Mayor -> Envelope */
mayorImage.addEventListener("click", () => {
  intro.style.display = "none";
  envelopeContainer.style.display = "flex";
});

/* Envelope -> Valentine Question */
envelopeContainer.addEventListener("click", () => {
  envelopeContainer.style.display = "none";
  letterContainer.style.display = "flex";

  setTimeout(() => {
    letterWindow.classList.add("open");
  }, 50);
});

/* NO runs away */
noBtn.addEventListener("mouseover", () => {
  const distance = 200;
  const angle = Math.random() * Math.PI * 2;

  const x = Math.cos(angle) * distance;
  const y = Math.sin(angle) * distance;

  noBtn.style.transform = `translate(${x}px, ${y}px)`;
});

/* YES clicked */
yesBtn.addEventListener("click", () => {
  title.textContent = "Yippeeee!";
  catImg.src = "cat_dance.gif";

  letterWindow.classList.add("final");

  buttons.style.display = "none";
  finalText.style.display = "block";
});
