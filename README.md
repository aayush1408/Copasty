## Copasty
>A cli tool built on node.js that allows the user to copy the contents of a file to clipboard and paste it to the desired file using a single command.

[![npm](https://img.shields.io/npm/dm/copasty.svg?style=flat-square)](https://www.npmjs.com/package/copasty)
[![npm](https://img.shields.io/npm/v/copasty.svg?style=flat-square)](https://www.npmjs.com/package/copasty)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/fa54fa38100448f292447ba994499414)](https://www.codacy.com/app/aayush1408/Copasty?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=aayush1408/Copasty&amp;utm_campaign=Badge_Grade)

### Why copasty??

>Suppose you want to copy the contents of the file and paste it to another file. The process to do the following will be like this

- Navigate to the file
- Open it
- ctrl + a
- ctrl + c
- Navigate to the file you want to paste the content in.
- Open it
- ctrl + v

> Copasty way of handling it

- ```copasty copy 'path-to-file'```
- ```copasty paste 'path-of-file'```


### Installation
```npm i -g copasty```

### How to use?

>Copy the content to the clipboard of a file using 
```
copasty copy 'path-to-the-file'
```

>Paste the content of the clipboard to a file using 
```
copasty paste 'path-to-the-file'
```

>For checking the version
```
copasty -V
```

>For help
```
copasty --help
```
