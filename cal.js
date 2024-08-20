document.addEventListener("DOMContentLoaded", () => {
  const display = document.getElementById("display");
  const buttons = document.querySelectorAll(".btn");
  let currentInput = "";

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const value = button.getAttribute("data-value");

      if (value === "C") {
        currentInput = "";
        display.textContent = "0";
      } else if (value === "=") {
        try {
          currentInput = eval(currentInput) || "0";
          display.textContent = currentInput;
        } catch (e) {
          display.textContent = "Error";
          currentInput = "";
        }
      } else {
        currentInput += value;
        display.textContent = currentInput;
      }
    });
  });
});
