#!/usr/bin/env node

// After Opening this repository:
// 1. run npm install in console
// 2. run journal-log in console
// 3. either type journal entry or receive error response
// 4. Commit changes to Github


const readline = require("readline"); // Readline module for user input
const fs = require("fs");  // File System module to create files and directories
const path = require("path"); // Path module to manage and resolve file paths

//

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Get file path

const logFilePath = path.join(__dirname, "journal.txt");

// Response in console... type journal-log for journal entry after installing npm

// function for saving journal entry to file

function logEntry(entry) {
    fs.appendFile(logFilePath, `[${new Date().toISOString()}] ${entry}\n`, (err) => {
        if (err) console.error("Error writing to file :( ", err);
        else console.log("Journal entry saved! :D ");
        rl.close();
    });
}

rl.question("Write your journal entry: ", logEntry);
