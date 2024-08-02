const yargs = require('yargs')
const note = require('./add-note.js')
yargs.command({
    command: 'list',
    describe: 'list is getting added',
    builder: {
        title: {
            describe: "title note",
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: "body note",
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => {
        note.addNote(argv.title, argv.body)
    }
})
yargs.command({
    command: 'read',
    describe: 'read the notes',
    handler: () => {
        console.log("reading the notes")
    }
})
yargs.parse();