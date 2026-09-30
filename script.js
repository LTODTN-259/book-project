let botName = "LTODTN-259";
let botLocation = "Accra, Ghana";
let favoriteLanguage = "JavaScript";

let codingFact1 = "I love coding with " + favoriteLanguage + ".";
let codingFact2 = favoriteLanguage + " is super powerful!";
let codingFact3 = "I enjoy building apps with " + favoriteLanguage + " in " + botLocation + ".";

// This is how JS talks to HTML
document.getElementById("bot-intro").textContent = "Hi! I'm " + botName + " from " + botLocation + ". My favorite language is " + favoriteLanguage + ".";

document.getElementById("facts").innerHTML = `
  <p>${codingFact1}</p>
  <p>${codingFact2}</p>
  <p>${codingFact3}</p>
`;

document.getElementById("goodbye").textContent = "It was fun sharing facts with you! - " + botName;

console.log("All 3 files are working together!");