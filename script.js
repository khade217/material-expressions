// --- MOCK JSON DATA ---
const mockData = {
  rephrases: [
    "You are perfectly placed in this exact moment.",
    "Find your calm within the beautiful chaos.",
    "Breathe in peace, breathe out all tension.",
    "Your inner center is your greatest superpower.",
    "Stillness speaks louder than the noise around you."
  ],
  affirmations: [
    "I am grounded, balanced, and completely at peace.",
    "I embrace the quiet stillness within me today.",
    "My mind is clear, my heart is calm, my spirit is light.",
    "I am exactly where I need to be right now.",
    "I release what I cannot control and focus on my center."
  ]
};

// Cache DOM elements
const centeredBox = document.getElementById('centeredBox');
const recenterBtn = document.getElementById('recenterBtn');
const rephraseBtn = document.getElementById('rephraseBtn');
const affirmationBtn = document.getElementById('affirmationBtn');
const buttons = [recenterBtn, rephraseBtn, affirmationBtn];

// Toggle button states
function setButtonsDisabled(disabled) {
  buttons.forEach(btn => btn.disabled = disabled);
}

// Show Bootstrap native spinner
function showSpinner() {
  centeredBox.innerHTML = `
    <div class="spinner-border text-primary" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>`;
}

// Helper to get random item from array
function getRandomItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// Update box with simulated loading delay
function updateBox(text) {
  setButtonsDisabled(true);
  showSpinner();
  
  setTimeout(() => {
    centeredBox.textContent = text;
    setButtonsDisabled(false);
  }, 600); 
}

// Event Listeners
recenterBtn.addEventListener('click', () => {
  centeredBox.classList.remove('bounce-animation');
  void centeredBox.offsetWidth; // Trigger reflow to restart animation
  centeredBox.classList.add('bounce-animation');
});

rephraseBtn.addEventListener('click', () => {
  updateBox(getRandomItem(mockData.rephrases));
});

affirmationBtn.addEventListener('click', () => {
  updateBox(getRandomItem(mockData.affirmations));
});