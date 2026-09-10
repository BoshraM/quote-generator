const quoteElement = document.querySelector("#quote");
const authorElement = document.querySelector("#author");
const button = document.querySelector("#new-quote-button");

async function getQuote() {
  const response = await fetch("http://127.0.0.1:3000/");

  const data = await response.json();

  quoteElement.textContent = `"${data.quote}"`;
  authorElement.textContent = `— ${data.author}`;
}

button.addEventListener("click", getQuote);

getQuote();