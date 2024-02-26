let currentInput = "";

function clearDisplay() {
  currentInput = "";
  updateDisplay();
}

function appendValue(value) {
  currentInput += value;
  updateDisplay();
}

function calculate() {
  try {
    const result = eval(currentInput);
    currentInput = result.toString();
    updateDisplay();
  } catch (error) {
    alert("Erro na expressão");
    clearDisplay();
  }
}

function updateDisplay() {
  document.getElementById("display").value = currentInput;
}
