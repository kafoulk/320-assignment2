#!/usr/bin/env node

// After Opening this repository:
// 1. run npm install in console
// 2. run journal-log in console
// 3. either type journal entry or receive error response
// 4. Commit changes to Github

//import node.js modules for cli tool
const readline = require("readline"); // Readline module for user input
const fs = require("fs");  // File System module to create files and directories
const path = require("path"); // Path module to manage and resolve file paths

// Using the readline module from node.js, the rl object below is for user input in the console
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Get file path using the path module in node.js

const logFilePath = path.join(__dirname, "journal.txt");

// Response in console

// function for saving journal entry to file using fs module built in node.js

function logEntry(entry) {
    fs.appendFile(logFilePath, `[${new Date().toISOString()}] ${entry}\n`, (err) => {
        if (err) console.error("Error writing to file :( ", err);
        else console.log("Journal entry saved! :D ");
        rl.close();
    });
}
// Displays prompt for user input in the console using the UI created on lines 15-18
rl.question("Write your journal entry: ", logEntry);
