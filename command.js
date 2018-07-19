const program = require('commander')
const readFileOf = require('./index')
program
  .version('1.0.0')
  .description('Copy content to clipboard')

program
  .command('gravel <pathOfFile>')
  .alias('g')
  .description('Copies the contents of a file')
  .action((pathOfFile)=>{
    readFileOf(pathOfFile)
  })  
program.parse(process.argv)  