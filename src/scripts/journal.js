
import apiEntries from "./apiManager.js"
 
import renderJournalEntries from "./DOMPrinter.js"

// apiEntries.getAllEntries()
apiEntries.getAllEntries()
.then(parsedJournalEntries => {
  // When they come back from the API, print them
  renderJournalEntries(parsedJournalEntries)
});


const journalSubmitButton= document.querySelector("#submitbutton")


journalSubmitButton.addEventListener("click",function(){

 const journalvalues={

  date: document.querySelector("#journalDate").value,

  concepts:  document.querySelector("#conceptsCovered").value,

  text: document.querySelector("#journalEntry").value,

  mood: document.querySelector("#moodForTheDay").value,
 }

// Use `fetch` with the POST method to add your entry to your API
fetch("http://localhost:3000/entries", { // Replace "url" with your API's URL
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(journalvalues)

  }).then(() => {
      fetch('http://localhost:3000/entries')
      .then(response => response.json())
      .then(parsedjournals => {
        renderJournalEntries(parsedjournals)
      })
    })
   })
   
  