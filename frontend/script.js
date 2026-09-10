const quoteElement = document.querySelector("#quote");
const authorElement = document.querySelector("#author");
const button = document.querySelector("#new-quote-button");

async function getQuote() {
  const response = await fetch("https://pafytkdin14bwihv0a1yg9kw.trainees.hosting.cyf.academy/");

  const data = await response.json();

  quoteElement.textContent = `"${data.quote}"`;
  authorElement.textContent = `— ${data.author}`;
}

button.addEventListener("click", getQuote);

getQuote();