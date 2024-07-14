const yargs = require("yargs");
const funcs = require("./funcs");



yargs.command({
    command: "add",
    describe: "you have add item",
    builder: {
        id: {
            describe: "id",
            demandOption: true,
            type: "number"
        },
        fname: {
            describe: "FirstName",
            demandOption: true,
            type: "string"
        },
        lname: {
            describe: "LastName",
            demandOption: true,
            type: "string"
        },
        age: {
            describe: "Age",
            demandOption: true,
            type: "number"
        },
        city: {
            describe: "City",
            demandOption: true,
            type: "string"
        },
    },
    handler: (x) => {
        funcs.addPerson(x.id, x.fname, x.lname, x.age, x.city);
    }
});
yargs.command({
    command: "delete",
    describe: "you have delete item",
    builder: {
        id: {
            describe: "id",
            demandOption: true,
            type: "number"
        }
    },
    handler: (x) => {
        funcs.deleteperson(x.id);
    }
});
yargs.command({
    command: "read",
    describe: "you have read data  item",
    builder: {
        id: {
            describe: "id",
            demandOption: true,
            type: "number"
        }
    },
    handler: (x) => {
        funcs.readData(x.id);
    }
});
yargs.command({
    command: "list",
    describe: "you want read all data",
    
    handler: () => {
        funcs.listData();
    }
});
// Parse yargs arguments
yargs.parse();
