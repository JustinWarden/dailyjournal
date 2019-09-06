
import apiEntries from "./apiManager.js"
 
import renderJournalEntries from "./DOMPrinter.js"



apiEntries.getAllEntries()
.then(parsedJournalEntries => {
  // When they come back from the API, print them
  renderJournalEntries(parsedJournalEntries)
});

// EVENT LISTENER FOR THE SUBMIT BUTTON

const journalSubmitButton= document.querySelector("#submitbutton")


journalSubmitButton.addEventListener("click",function(){

 const journalvalues={

  date: document.querySelector("#journalDate").value,

  concepts:  document.querySelector("#conceptsCovered").value,

  text: document.querySelector("#journalEntry").value,

  mood: document.querySelector("#moodForTheDay").value,
 }

//  POST method to add your entry to your API

fetch("http://localhost:3000/entries", { 
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

  //  EVENT LISTENER TO DELETE JOURNAL
document.querySelector("body").addEventListener("click", () => {

// WILL FIND THE ID OF THE JOURNAL TO DELETE

    if (event.target.id.includes("delete-journal")) {

        const journaltodelete = event.target.id.split("-");
        const idofjournaltodelete = journaltodelete[2]

        // console.log(idofjournaltodelete)
// WILL UPDATE THE NEW JOURNAL LIST 

        apiEntries.deletejournal(idofjournaltodelete).then(() => {
            apiEntries.getAllEntries()
                .then(parsedjournals => {
                    renderJournalEntries(parsedjournals);
                });
        })
    }
})
