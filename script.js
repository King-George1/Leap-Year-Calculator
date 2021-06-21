let button = document.getElementById("btn");
let result = document.getElementById("result");
result.innerHTML = "";

button.addEventListener(
  "click",
  (e) => {
    e.preventDefault();
    let input = document.getElementById("input").valueAsNumber;
    input % 4 === 0 && (input % 100 !== 0 || input % 400 === 0)
      ? (result.innerHTML = `${input}  is a leap year`)
      : (result.innerHTML = `${input} is not a leap year`);
  },
  false
);
