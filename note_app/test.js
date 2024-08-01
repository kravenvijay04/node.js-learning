const yargs = require('yargs')

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
        console.log("title: " + argv.title)
        console.log("body: " + argv.body)
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