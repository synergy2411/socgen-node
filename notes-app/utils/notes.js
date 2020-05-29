const fs = require("fs");
const chalk = require("chalk");

const loadNotes = () => {
  try {
    const notesBuffer = fs.readFileSync("./notes.json");
    const notesString = notesBuffer.toString();
    return JSON.parse(notesString);
  } catch {
    return [];
  }
};

const saveNotes = (notes) => {
  fs.writeFileSync("./notes.json", JSON.stringify(notes));
};

const addNote = (title, body) => {
  const notes = loadNotes();
  // no duplicate title
  const note = notes.find((note) => note.title === title);
  if (note) {
    console.log(chalk.red("Duplicate title. Try again!"));
    return;
  }
  notes.push({ title, body });
  saveNotes(notes);
  console.log(chalk.green("Note Saved."));
};

const removeNote = (title) => {
    const notes = loadNotes();
    const noteFound = notes.find(note => note.title === title);
    if(noteFound){
        const duplicateNotes = notes.filter(note => note.title !== title);
        saveNotes(duplicateNotes);
        console.log(chalk.green("Note deleted.", noteFound));
    }else{
        return console.log(chalk.red("Note title not found."))
    }
};
const listNote = () => {
    const notes = loadNotes();
    console.log(chalk.blue("My Notes"));
    notes.forEach(note => {
        console.log(chalk.blue("Title : " + note.title))
        console.log(chalk.blue("Body : " + note.body))
    })
};
const readNote = (title) => {
    const notes = loadNotes();
    const noteFound = notes.filter(note => note.title === title);
    if(!noteFound){
        console.log(chalk.red("Note title not found"));
    }
    console.log(chalk.green("Title : " + noteFound[0].title))
    console.log(chalk.green("Body : " + noteFound[0].body))
};

module.exports = { addNote, removeNote, listNote, readNote };
