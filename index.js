const fs = require('fs')
const clipboardy = require('clipboardy')

const readFileOf = (pathOfFile)=>{
  try{
   let data = fs.readFileSync(pathOfFile,'utf-8')
   clipboardy.writeSync(data)
   console.log('Copied!!')
  }
  catch(error){
    console.log('This is not the correct path for the file.')
  }  
}

module.exports = readFileOf