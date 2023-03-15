const colorsWrapper = document.querySelector(".colors");

const loadingEle = document.createElement("span");
loadingEle.textContent = "Loading data...";

colorsWrapper.appendChild(loadingEle);

const createColorElement = (hex) => {
  const colorEle = document.createElement("div");
  colorEle.textContent = hex;
  colorEle.classList.add("color");
  colorEle.style.background = hex;
  colorEle.addEventListener("click", () => alert(hex));
  return colorEle;
};

// fetch API
fetch("https://reqres.in/api/unknown")
  .then((res) => res.json())
  .then((data) => {
    colorsWrapper.removeChild(loadingEle);
    data.data.forEach((item) => {
      const hex = item.color;
      colorsWrapper.appendChild(createColorElement(hex));
    });
  });
