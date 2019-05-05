import * as fs from 'fs'
import * as yargs from 'yargs'

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
      .argv

const filename = String(argv.filename)

fs.writeFile(filename, argv.content, (error: any)=>{
  if(error) throw error
  console.log(`Arquivo ${filename} foi salvo com sucesso.`)
})
