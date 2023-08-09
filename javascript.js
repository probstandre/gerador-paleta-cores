const colorButton = document.getElementById("colorButton");
const colorBoxes = document.querySelectorAll(".paleta");

colorButton.addEventListener("click", () => {
    colorBoxes.forEach(box => {
      const randomColor = generateRandomColor();
      box.style.backgroundColor = randomColor;
      box.querySelector(".color-value").textContent = randomColor;
    });
  });

  colorBoxes.forEach(box => {
    box.addEventListener("click", () => {
      const colorValue = box.querySelector(".color-value").textContent;
      copyToClipboard(colorValue);
    });

    box.querySelector(".color-value").addEventListener("mouseover", () => {
        document.body.style.cursor = "pointer";
        box.querySelector(".color-value").setAttribute("title", "Clique para copiar");
      });

    box.querySelector(".color-value").addEventListener("mouseout", () => {
        document.body.style.cursor = "default";
        box.querySelector(".color-value").removeAttribute("title");
    });

  });

  function generateRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  function copyToClipboard(text) {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);
  }