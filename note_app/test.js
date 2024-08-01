const yargs = require('yargs')

yargs.command({
    command: 'list',
    describe: 'list is getting added',
    handler: () => {
        console.log("list is adding")
    }
})
yargs.command({
    command: 'read',
    describe: 'read the notes',
    handler: () => {
        console.log("reading the notes")
    }
})
console.log(yargs.argv)