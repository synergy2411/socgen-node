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


yargs.parse();

// console.log(process.argv);
// console.log(yargs.argv);

// > node index.js add --title="" --body=""
// > node index.js remove --title=""
// > node index.js read --title=""
// > node index.js list