#!/usr/bin/env node
const program = require('commander')
const readFileOf = require('../index')
program
  .version('1.0.0')
  .description('Copy content to clipboard and paste to a specific file')

program
  .command('copy')
  .arguments('<pathOfFile>')
  .description('Copies the contents of a file')
  .action((pathOfFile) => {
    readFileOf(pathOfFile)
  })
program.parse(process.argv)  