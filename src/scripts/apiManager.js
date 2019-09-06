
const apiEntries = {
    getAllEntries: () => {
        return fetch("http://localhost:3000/entries") // Fetch from the API
            .then(response => response.json()) // Parse as JSON
    },
    // METHOD TO DELETE JOURNALS 
    deletejournal: (idofjournaltodelete) => {console.log(idofjournaltodelete)
       return fetch(`http://localhost:3000/entries/${idofjournaltodelete}`, {
            method: "DELETE"
        
        })
    }

}
   

export default apiEntries;