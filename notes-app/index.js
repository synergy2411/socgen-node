const yargs = require("yargs");
const notes = require("./utils/notes");

yargs.command({
    command : "add",
    description : "to add a new note",
    builder : {
        title : {
            type : String,
            demandOption : true,
            description : "to add new title in note"
        },
        body : {
            type : String,
            demandOption : true,
            description : "to add new body in note"
        }
    },
    handler : (argv) => {
        notes.addNote(argv.title, argv.body);
    }
})

yargs.command({
    command : "remove",
    description : "to remove one note",
    builder : {
        title : {
            type : String,
            demandOption : true,
            description : "title to remove one note"
        }
    },
    handler : argv => {
        notes.removeNote(argv.title);
    }
})

yargs.command({
    command : "read",
    description :"to read one note",
    builder : {
        title :{
            type : String,
            demandOption : true,
            description : "title to read one note"
        }
    },
    handler : argv => {
        notes.readNote(argv.title);
    }
})

yargs.command({
    command : "list",
    description :"to list down all notes",
    handler : argv => {
        notes.listNote();
    }
})

yargs.parse();

// console.log(process.argv);
// console.log(yargs.argv);

//  > node index.js add --title="" --body=""
//  > node index.js remove --title=""
//  > node index.js read --title=""
//  > node index.js list
