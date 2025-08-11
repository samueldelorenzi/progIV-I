function fullSizeImage(imgElement) {
  const overlay = document.createElement("div");
  overlay.style.position = "fixed";
  overlay.style.top = 0;
  overlay.style.left = 0;
  overlay.style.width = "100vw";
  overlay.style.height = "100vh";
  overlay.style.background = "rgba(40, 42, 54, 0.7)";
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

  overlay.onclick = () => document.body.removeChild(overlay);
  overlay.ontouchstart = () => document.body.removeChild(overlay);

  overlay.appendChild(largeImg);
  document.body.appendChild(overlay);
}

document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll("img").forEach((img) => {
    img.addEventListener("click", function () {
      fullSizeImage(this);
    });
  });
});
