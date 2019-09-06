
// CREATES STRUCTURE FOR THE JOURNAL PRINTED TO THE DOM

const makeJournalEntryComponent = {
    buildJournalEntryCard: (singleJournalObject) => {
        // console.log(singleJournalObject)
        return `
    <div>
    <h3>${singleJournalObject.date}</h3>
    <p>${singleJournalObject.concepts}</p>
    <p>${singleJournalObject.text}</p>
    <p>${singleJournalObject.mood}</p>
    <button id="delete-journal-${singleJournalObject.id}">Delete</button>
    </div>
    `
    }
}


    export default makeJournalEntryComponent;

