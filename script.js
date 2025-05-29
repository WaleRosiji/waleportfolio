// Tip Calculator Functionality
document.addEventListener('DOMContentLoaded', function() {
    // Tip Calculator Elements
    const billInput = document.getElementById('bill');
    const peopleInput = document.getElementById('people');
    const tipButtons = document.querySelectorAll('.tip-btn');
    const customTip = document.querySelector('.custom-tip');
    const tipAmountDisplay = document.getElementById('tip-amount');
    const totalAmountDisplay = document.getElementById('total-amount');
    const resetBtn = document.getElementById('reset-btn');
    const billInputGroup = document.querySelector('.tip-calculator .input-group:nth-of-type(1)');
    const peopleInputGroup = document.querySelector('.tip-calculator .input-group:nth-of-type(2)');

    // Variables
    let billValue = 0;
    let peopleValue = 1;
    let tipValue = 0;

    // Event Listeners
    if (billInput) {
        billInput.addEventListener('input', validateBill);
        peopleInput.addEventListener('input', validatePeople);
        tipButtons.forEach(btn => btn.addEventListener('click', handleTipButtonClick));
        customTip.addEventListener('input', handleCustomTip);
        resetBtn.addEventListener('click', resetCalculator);
    }

    // Functions
    function validateBill() {
        billValue = parseFloat(billInput.value);
        
        if (billInput.value === '' || billValue <= 0) {
            billInputGroup.classList.add('error');
            resetBtn.disabled = true;
        } else {
            billInputGroup.classList.remove('error');
            calculateTip();
        }
    }

    function validatePeople() {
        peopleValue = parseInt(peopleInput.value);
        
        if (peopleInput.value === '' || peopleValue <= 0) {
            peopleInputGroup.classList.add('error');
            resetBtn.disabled = true;
        } else {
            peopleInputGroup.classList.remove('error');
            calculateTip();
        }
    }

    function handleTipButtonClick(e) {
        tipButtons.forEach(btn => btn.classList.remove('active'));
        e.target.classList.add('active');
        customTip.value = '';
        tipValue = parseInt(e.target.value);
        calculateTip();
    }

    function handleCustomTip() {
        tipButtons.forEach(btn => btn.classList.remove('active'));
        tipValue = parseFloat(customTip.value) || 0;
        calculateTip();
    }

    function calculateTip() {
        if (billValue > 0 && peopleValue > 0) {
            resetBtn.disabled = false;
            const tipAmount = (billValue * tipValue / 100) / peopleValue;
            const totalAmount = (billValue / peopleValue) + tipAmount;
            tipAmountDisplay.textContent = `$${tipAmount.toFixed(2)}`;
            totalAmountDisplay.textContent = `$${totalAmount.toFixed(2)}`;
        }
    }

    function resetCalculator() {
        billInput.value = '';
        peopleInput.value = '';
        customTip.value = '';
        billValue = 0;
        peopleValue = 1;
        tipValue = 0;
        tipAmountDisplay.textContent = '$0.00';
        totalAmountDisplay.textContent = '$0.00';
        tipButtons.forEach(btn => btn.classList.remove('active'));
        billInputGroup.classList.remove('error');
        peopleInputGroup.classList.remove('error');
        resetBtn.disabled = true;
    }
});
 // Rock Paper Scissors Logic
const choices = ['rock', 'paper', 'scissors'];
let playerScore = 0;
let computerScore = 0;

document.querySelectorAll('.choice-btn').forEach(button => {
  button.addEventListener('click', function() {
    const playerChoice = this.dataset.choice;
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    const result = determineWinner(playerChoice, computerChoice);
    
    updateScore(result);
    displayResult(playerChoice, computerChoice, result);
  });
});

function determineWinner(player, computer) {
  if (player === computer) return 'draw';
  if (
    (player === 'rock' && computer === 'scissors') ||
    (player === 'paper' && computer === 'rock') ||
    (player === 'scissors' && computer === 'paper')
  ) {
    return 'player';
  }
  return 'computer';
}

function updateScore(result) {
  if (result === 'player') playerScore++;
  if (result === 'computer') computerScore++;
  document.getElementById('player-score').textContent = playerScore;
  document.getElementById('computer-score').textContent = computerScore;
}

function displayResult(player, computer, result) {
  const resultText = {
    player: 'You win!',
    computer: 'Computer wins!',
    draw: "It's a draw!"
  };
  
  document.getElementById('game-result').innerHTML = `
    <p>You chose <strong>${player}</strong></p>
    <p>Computer chose <strong>${computer}</strong></p>
    <h4>${resultText[result]}</h4>
  `;
}
document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  
  // Toggle menu
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
  });
  
  // Close menu when clicking links
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      navLinks.classList.remove('active');
    });
  });
});
