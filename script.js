// Function to fetch a random quote from an API
async function fetchRandomQuote() {
    try {
      const response = await fetch("https://api.quotable.io/random");
      const data = await response.json();
      return data.content;
    } catch (error) {
      console.error("Error fetching quote:", error);
      return "Failed to fetch quote.";
    }
  }
  
  // Function to generate a random quote
  async function generateRandomQuote() {
    const quote = await fetchRandomQuote();
    document.getElementById("quoteText").textContent = quote;
  }
  
  // Event listener for the "New Quote" button
  document.getElementById("newQuoteBtn").addEventListener("click", generateRandomQuote);
  
  // Generate initial random quote
  generateRandomQuote();
  