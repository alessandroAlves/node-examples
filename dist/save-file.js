"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const yargs = require("yargs");
const argv = yargs
    .string('_')
    .option('filename', {
    alias: 'f',
    describe: 'Name your file'
})
    .option('content', {
    alias: 'c',
    describe: 'Path your file'
})
    .demandOption(['filename', 'content'], 'Please provide both FILENAME and CONTENT arguments to work with this tool')
    .argv;
const filename = String(argv.filename);
fs.writeFile(filename, argv.content, (error) => {
    if (error)
        throw error;
    console.log(`Arquivo ${filename} foi salvo com sucesso.`);
});
//# sourceMappingURL=save-file.js.map