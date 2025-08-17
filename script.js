function fullSizeImage(imgElement) {
  const overlay = document.createElement("div");
  overlay.style.position = "fixed";
  overlay.style.top = 0;
  overlay.style.left = 0;
  overlay.style.width = "100vw";
  overlay.style.height = "100vh";
  overlay.style.background = "rgba(40, 42, 54, 0.9)";
  overlay.style.display = "flex";
  overlay.style.alignItems = "center";
  overlay.style.justifyContent = "center";
  overlay.style.zIndex = 1000;
  overlay.style.padding = "20px";

  const largeImg = document.createElement("img");
  largeImg.src = imgElement.src;

  if (window.innerWidth <= 768) {
    largeImg.style.maxWidth = "90vw";
    largeImg.style.maxHeight = "70vh";
  } else {
    largeImg.style.maxWidth = "50vw";
    largeImg.style.maxHeight = "50vh";
  }

  largeImg.style.boxShadow = "0 0 20px #000";
  largeImg.style.borderRadius = "10px";

  const closeOverlay = () => {
    if (document.body.contains(overlay)) {
      document.body.removeChild(overlay);
    }
  };

  overlay.addEventListener("click", closeOverlay);
  overlay.appendChild(largeImg);
  document.body.appendChild(overlay);
}

function drawSkillsChart() {
  const canvas = document.getElementById("skills-chart");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  const skills = [
    { name: "PHP", value: 90, color: "#50fa7b" },
    { name: "JavaScript", value: 85, color: "#f1fa8c" },
    { name: "Python", value: 70, color: "#ff79c6" },
    { name: "C#", value: 75, color: "#8be9fd" },
    { name: "VB.NET", value: 65, color: "#ffb86c" },
    { name: "Laravel", value: 85, color: "#ff5555" },
    { name: "React", value: 80, color: "#8be9fd" },
    { name: "Node.js", value: 75, color: "#50fa7b" },
    { name: "Symfony", value: 70, color: "#bd93f9" },
    { name: "Next.js", value: 70, color: "#f1fa8c" },
    { name: "SQLServer", value: 85, color: "#ff79c6" },
    { name: "PostgreSQL", value: 80, color: "#50fa7b" },
    { name: "MySQL", value: 75, color: "#ffb86c" }
  ];

  const barWidth = 60;
  const barSpacing = 15;
  const maxHeight = 140;
  const totalBarsWidth = (barWidth * skills.length) + (barSpacing * (skills.length - 1));
  const startX = (canvas.width - totalBarsWidth) / 2;

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  skills.forEach((skill, index) => {
    const x = startX + (barWidth + barSpacing) * index;
    const height = (skill.value / 100) * maxHeight;
    const y = canvas.height - height - 40;

    const gradient = ctx.createLinearGradient(0, y, 0, y + height);
    gradient.addColorStop(0, skill.color);
    gradient.addColorStop(1, skill.color + "80");
    
    ctx.fillStyle = gradient;
    ctx.fillRect(x, y, barWidth, height);

    ctx.strokeStyle = skill.color;
    ctx.lineWidth = 2;
    ctx.strokeRect(x, y, barWidth, height);

    ctx.save();
    ctx.translate(x + barWidth/2, canvas.height - 25);
    ctx.fillStyle = "#f8f8f2";
    ctx.font = "11px Fira Sans";
    ctx.textAlign = "center";
    ctx.fillText(skill.name, 0, 0);
    ctx.restore();

    ctx.fillStyle = "#f8f8f2";
    ctx.font = "bold 12px Fira Sans";
    ctx.textAlign = "center";
    ctx.fillText(skill.value + "%", x + barWidth/2, y - 8);
  });
  
  ctx.fillStyle = "#bd93f9";
  ctx.font = "bold 16px Fira Sans";
  ctx.textAlign = "center";
}

function showWelcomeMessage() {
  const now = new Date();
  const hour = now.getHours();
  let greeting;

  if (hour < 12) {
    greeting = "Bom dia!";
  } else if (hour < 18) {
    greeting = "Boa tarde!";
  } else {
    greeting = "Boa noite!";
  }

  alert(`${greeting} Seja bem-vindo(a) ao meu currículo! 
  
Aqui você encontrará informações sobre minha experiência, habilidades e projetos.

Fique à vontade para explorar! 😊`);
}

document.addEventListener("DOMContentLoaded", function () {
  setTimeout(showWelcomeMessage, 1000);
  drawSkillsChart();
});
