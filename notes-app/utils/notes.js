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

const removeNote = () => {};
const listNote = () => {};
const readNote = () => {};

module.exports = { addNote, removeNote, listNote, readNote };
