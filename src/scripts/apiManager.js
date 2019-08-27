
const apiEntries={
    getAllEntries: () =>{

return fetch("http://localhost:3000/entries") // Fetch from the API
.then(response => response.json())  // Parse as JSON
.then(journalEntrytoPrint => {
   
    renderJournalEntries(journalEntrytoPrint)
})
    }
}