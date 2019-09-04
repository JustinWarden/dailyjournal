// fetch("http://localhost:3000/entries") // Fetch from the API
// .then(entries => entries.json())  // Parse as JSON
// .then(parsedentries => {
//     parsedentries.forEach(entries => {
//         //Print foods to DOM
//         document.querySelector(".entryLog").innerHTML += `<div class="flex">
//         <h3>${entries.date}</h3>
//         <p>${entries.concepts}</p>
//         <p>${entries.text}</p>
//         <p>${entries.mood}</p>
//         </div>
//         `
// })
// })

// // fetch("http://localhost:8088/food")
// //     .then(foods => foods.json())
// //     .then(parsedFoods => {



//    const finallog =
//      entrylogcontainer.innerHTML += `
//         <section>
//             <h2>${journaldate}</h2>
//             <h2>${conceptscovered}</h2>
//             <h2>${journalentry}</h2>
//             <h2>${mood}</h2>
            
//         </section>
//     `

// const newjournalentryobject={
//     dateofentry: journaldate.value,
//     conceptscovered: conceptscovered.value,
//     journalentry: journalentry.value,
//     mood:  mood.value
// };

// journalEntry.push(newjournalentryobject)

// console.log(journalEntry)

// renderJournalEntries(journalEntry);

// });

// const entrylogcontainer = document.querySelector("body")

// entrylogcontainer.querySelector("#submitbutton").addEventListener("click", function() {





import apiEntries from "./apiManager.js"
 
import renderJournalEntries from "./DOMPrinter.js"

// apiEntries.getAllEntries()
apiEntries.getAllEntries()
.then(parsedJournalEntries => {
  // When they come back from the API, print them
  renderJournalEntries(parsedJournalEntries)
});

// const printJournalToDOM = (journalvalues) => {
//       document.querySelector("#entryLog").innerHTML += 
//       `<p>${entries.journaldate}</p>`
//   }


const journalSubmitButton= document.querySelector("#submitbutton")


journalSubmitButton.addEventListener("click",function(){

 const journalvalues={

  date: document.querySelector("#journalDate").value,

  concepts:  document.querySelector("#conceptsCovered").value,

  text: document.querySelector("#journalEntry").value,

  mood: document.querySelector("#moodForTheDay").value,
 }

//  console.log(journalvalues.journaldate)
// Use `fetch` with the POST method to add your entry to your API
fetch("http://localhost:3000/entries", { // Replace "url" with your API's URL
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(journalvalues)

  }).then(() => {
      // Once the lego has been posted, GET all of the legos from the database
      fetch('http://localhost:3000/entries')
      .then(response => response.json())
      .then(parsedjournals => {
       (parsedjournals)
      })
   })

})



// .then(() => {
//   // When the POST is complete, we need to refresh the page. GET all of the students, including the new one.
//   fetch("http://localhost:8088/students")
//   .then(response => response.json())
//   .then(parsedStudents => {
//       // Once the students have come back, print them to the DOM
//       printStudentsToDOM(parsedStudents)