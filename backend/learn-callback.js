// Tell node we need to work with filesystem 
const fs = require("fs"); 

// Read the file contents "asynchronously" in 
// string (utf-8) encoding 
fs.readFile("name.txt", "utf-8", (error, fileContents) => { 
    if (error)  
        return error; 
    else 
        console.log("Hello, ", fileContents); 
}); 

// Print pattern 
for (let i = 0; i < 5; i++) console.log(i); 
