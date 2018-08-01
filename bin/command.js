#!/usr/bin/env node

const program = require('commander');
const readFileOf = require('../index').readFileOf;
const pasteContent = require('../index').pasteContent;

program
  .version('1.0.2')
  .description('Copy content to clipboard and paste it to a specific file.')

program
  .command('copy')
  .arguments('<pathOfFile>')
  .description('Copies the contents of a file.')
  .action((pathOfFile) => {
    readFileOf(pathOfFile);
  });

program
  .command('paste')
  .arguments('<pathOfFile>')
  .description('Paste the contents of the clipboard to a file.')
  .action((pathOfFile) => {
    pasteContent(pathOfFile);
  });

program.parse(process.argv);