
fetch("http://localhost:3000/entries") // Fetch from the API
.then(entries => entries.json())  // Parse as JSON
.then(parsedentries => {
    parsedentries.forEach(entries => {
        //Print foods to DOM
        document.querySelector(".entryLog").innerHTML += `<div class="flex">
        <h3>${entries.date}</h3>
        <p>${entries.concepts}</p>
        <p>${entries.text}</p>
        <p>${entries.mood}</p>
        </div>
        `
})
})

// fetch("http://localhost:8088/food")
//     .then(foods => foods.json())
//     .then(parsedFoods => {

 const entrylogcontainer = document.querySelector("body")

 entrylogcontainer.querySelector("#submitbutton").addEventListener("click", function() {
     

     const journaldate = document.querySelector("#journalDate").value

    const conceptscovered = document.querySelector("#conceptsCovered").value

    const journalentry = document.querySelector("#journalEntry").value

    const mood = document.querySelector("#moodForTheDay").value

   const finallog =
     entrylogcontainer.innerHTML += `
        <section>
            <h2>${journaldate}</h2>
            <h2>${conceptscovered}</h2>
            <h2>${journalentry}</h2>
            <h2>${mood}</h2>
            
        </section>
    `

const newjournalentryobject={
    dateofentry: journaldate.value,
    conceptscovered: conceptscovered.value,
    journalentry: journalentry.value,
    mood:  mood.value
};

journalEntry.push(newjournalentryobject)

console.log(journalEntry)

renderJournalEntries(journalEntry);

});


