class Calculator {
  constructor() {
    this.result = 0;
    this.history = '';
    this.memory = 0;
    this.buffer = '';
  }
  copyToClipboard() {
    navigator.clipboard.writeText(this.history);
  }

  pasteFromClipboard() {
    navigator.clipboard.readText().then((text) => {
      this.history += text;
      updateHistoryDisplay();
    });
    
  }
  convertToBinary() {
    const decimal = parseInt(this.history);
    this.result = decimal.toString(2);
    updateResultDisplay();
  }

  convertToDecimal() {
    const binary = this.history;
    this.result = parseInt(binary, 2);
    updateResultDisplay();
  }

  convertToHexadecimal() {
    const decimal = parseInt(this.history);
    this.result = decimal.toString(16).toUpperCase();
    updateResultDisplay();
  }

  memoryRecall() {
    this.history += this.memory.toString();
    updateHistoryDisplay();
    updateResultMemoryDisplay();
  }

  memoryClear() {
    this.memory = 0;
    updateResultMemoryDisplay();
  }

  memoryAdd() {
    this.memory += parseFloat(this.history);
    updateHistoryDisplay();
    updateResultMemoryDisplay();
  }

  memorySubtract() {
    this.memory -= parseFloat(this.history);
    updateHistoryDisplay();
    updateResultMemoryDisplay();
  }

  addToHistory(value) {
    this.history += value;
  }

  calculate() {
    try {
      this.result = eval(this.history);
      this.history = this.result.toString();
    } catch (error) {
      this.result = '';
    }
  }
  deleteLast() {
    this.history = this.history.slice(0, -1);
    updateHistoryDisplay();
  }
  reset() {
    this.result = 0;
    this.history = '';
  }

  toggleSign() {
    if (this.history === '' && this.result !== 0) {
      this.result *= -1;
    } else {
      this.history *= -1;
    }
  }

  addDecimalPoint() {
    if (!this.history.includes('.')) {
      this.history += '.';
    }
  }

  percent() {
    if (this.history === '') {
      this.result = 0;
    } else {
      this.calculate();
      this.result /= 100;
    }
  }

  factorial() {
    if (this.history === '') {
      this.result = 0;
    } else {
      const num = parseInt(this.history);
      let fact = 1;
      for (let i = 1; i <= num; i++) {
        fact *= i;
      }
      this.result = fact;
      updateResultDisplay();
    }
  }

  exponentiation() {
    if (this.history === '') {
      this.result = 0;
    } else {
      const parts = this.history.split('^');
      if (parts.length === 2) {
        const base = parseFloat(parts[0]);
        const power = parseFloat(parts[1]);
        this.result = Math.pow(base, power);

      }
    }
  }

  squareRoot() {
    if (this.history === '') {
      this.result = 0;
    } else {
      const num = parseFloat(this.history);
      this.result = Math.sqrt(num);
      updateResultDisplay();
    }
  }

  convertLength(unit) {
    if (this.history === '') {
      this.result = 0;
    } else {
      const num = parseInt(this.history);
      switch (unit) {
        case 'cm':
          this.result = num;
          updateResultDisplay();
          break;
        case 'km':
          this.result = num * 100000;
          updateResultDisplay();
          break;
        case 'm':
          this.result = num * 100;
          updateResultDisplay();
          break;
      }
    }
  }

  convertWeight(unit) {
    if (this.history === '') {
      this.result = 0;
    } else {
      const num = parseInt(this.history);
      switch (unit) {
        case 'g':
          this.result = num;
          updateResultDisplay();
          break;
        case 'kg':
          this.result = num * 1000;
          updateResultDisplay();
          break;
        case 't':
          this.result = num * 1000000;
          updateResultDisplay();
          break;
      }
    }
  }

  convertArea(unit) {
    if (this.history === '') {
      this.result = 0;
    } else {
      const num = parseInt(this.history);
      switch (unit) {
        case 'cm2':
          this.result = num;
          updateResultDisplay();
          break;
        case 'km2':
          this.result = num * 1000000;
          updateResultDisplay();
          break;
        case 'm2':
          this.result = num * 10000;
          updateResultDisplay();
          break;
        case 'ha':
          this.result = num * 1000000;
          updateResultDisplay();
          break;
      }
    }
  }
}

const resultDisplay = document.getElementById('resultDisplay');
const memoryDisplafunct = document.getElementById('memoryDisplay');
const historyDisplay = document.getElementById('historyDisplay');
const operationsContainer = document.getElementById('operationsContainer');
const calculator = new Calculator();

// Function to handle button clicks
function handleButton(value) {
  switch (value) {
    case 'AC':
      clearAll();
      break;
    case '+/-':
      changeSign();
      break;
    case '%':
      calcPercent();
      break;
    case '÷':
      divide();
      break;
    case '7':
      addNumber(7);
      break;
    case '8':
      addNumber(8);
      break;
    case '9':
      addNumber(9);
      break;
    case '*':
      multiply();
      break;
    case '6':
      addNumber(6);
      break;
    case '5':
      addNumber(5);
      break;
    case '4':
      addNumber(4);
      break;
    case '+':
      plus();
      break;
    case '3':
      addNumber(3);
      break;
    case '2':
      addNumber(2);
      break;
    case '1':
      addNumber(1);
      break;
    case '-':
      minus();
      break;
    case '0':
      addNumber(0);
      break;
    case '.':
      addPoint();
      break;
    case '=':
      calc();
      break;
    case 'C':
      calculator.deleteLast();
      break;
    case 'sqrt':
      calculator.squareRoot();
      break;
    case '!':
      calculator.factorial();
      break;
    case 'g':
      calculator.convertWeight('g');
      break;
    case 'kg':
      calculator.convertWeight('kg');
      break;
    case 't':
      calculator.convertWeight('t');
      break;
    case 'cm':
      calculator.convertLength('cm');
      break;
    case 'm':
      calculator.convertLength('m');
      break;
    case 'km':
      calculator.convertLength('km');
      break;
    case 'cm2':
      calculator.convertArea('cm2');
      break;
    case 'km2':
      calculator.convertArea('km2');
      break;
    case 'm2':
      calculator.convertArea('m2');
      break;
    case 'ha':
      calculator.convertArea('ha');
      break;
    case 'copy':
      calculator.copyToClipboard();
      break;
    case 'paste':
      calculator.pasteFromClipboard();
      break;
    case 'binary':
      calculator.convertToBinary();
      break;
    case 'decimal':
      calculator.convertToDecimal();
      break;
    case 'hexadecimal':
      calculator.convertToHexadecimal();
      break;
    case 'MR':
      calculator.memoryRecall();
      break;
    case 'MC':
      calculator.memoryClear();
      break;
    case 'M+':
      calculator.memoryAdd();
      break;
    case 'M-':
      calculator.memorySubtract();
      break;

  }
}

function addNumber(number) {
  calculator.addToHistory(number);
  updateHistoryDisplay();
}

function clearAll() {
  calculator.reset();
  updateDisplays();
}

function changeSign() {
  calculator.toggleSign();
  updateHistoryDisplay();
}
function calcPercent() {
  calculator.percent();
  updateResultDisplay();
  calculator.reset();
}

function divide() {
  calculator.addToHistory('/');
  updateHistoryDisplay();
}

function multiply() {
  calculator.addToHistory('*');
  updateHistoryDisplay();
}

function plus() {
  calculator.addToHistory('+');
  updateHistoryDisplay();
}

function minus() {
  calculator.addToHistory('-');
  updateHistoryDisplay();
}
function addPoint() {
  calculator.addDecimalPoint();
  updateHistoryDisplay();
}

function calc() {
  calculator.calculate();
  updateResultDisplay();
  calculator.reset();
}

function updateResultDisplay() {
  resultDisplay.textContent = calculator.result;
}
function updateResultMemoryDisplay() {
  memoryDisplafunct.textContent = calculator.memory;
}

function updateHistoryDisplay() {
  historyDisplay.textContent = calculator.history;
}
function updateDisplays() {
  updateResultDisplay();
  updateHistoryDisplay();
  updateResultMemoryDisplay();
}

