
const makeJournalEntryComponent = {
buildJournalEntryCard: (singleJournalObject) => {
    return `
    <div>
    <h3>${singleJournalObject.date}</h3>
    <p>${singleJournalObject.concepts}</p>
    <p>${singleJournalObject.text}</p>
    <p>${singleJournalObject.mood}</p>
    </div>
    `
}
}
export default makeJournalEntryComponent;

