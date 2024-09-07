const fs = require('fs')
//adding a new note
const addNote = (title, body) => {
    const notes = load();
    const duplicate = notes.filter((note) => {
        return (note.title === title)
    })
    if (duplicate.length === 0) {
        notes.push({
            title: title,
            body: body
        })
        saveNote(notes)
        console.log("New note is added")
    }
    else {
        console.log("title already taken")
    }
}
//for loading
const load = () => {
    try {
        const data = fs.readFileSync('notes.json')
        const str = data.toString()
        return JSON.parse(str)
    }
    catch (e) {
        return []
    }
}
const saveNote = (note) => {
    const str1 = JSON.stringify(note)
    fs.writeFileSync('notes.json', str1)
}

module.exports = {
    addNote: addNote
}
