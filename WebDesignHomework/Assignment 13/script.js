const quotes = [
    "The best way to get started is to quit talking and begin doing. – Walt Disney",
    "The pessimist sees difficulty in every opportunity. The optimist sees opportunity in every difficulty. – Winston Churchill",
    "Don’t let yesterday take up too much of today. – Will Rogers",
    "You learn more from failure than from success. Don’t let it stop you. Failure builds character. – Unknown",
    "It’s not whether you get knocked down, it’s whether you get up. – Vince Lombardi"
  ];
  
  function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById('quote').innerText = quotes[randomIndex];
  }
  
  document.addEventListener('DOMContentLoaded', (event) => {
    generateQuote();
  });
  