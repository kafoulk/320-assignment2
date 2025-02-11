#!/usr/bin/env node

const readline = require("readline"); // Readline module for user input
const fs = require("fs");  // File System module to create files and directories
const path = require("path"); // Path module to manage and resolve file paths

/**
 * ## Module Guide
 * This script uses the following core modules:
 * - `fs`: Used to create directories and files
 * - `path`: Helps construct file paths correctly
 * - `readline`: Prompts the user for input
 *
 * ### Steps to Utilize the Modules:
 * 1. Use `readline` to ask the user for project details.
 * 2. Use `path` to generate correct file and directory paths.
 * 3. Use `fs` to create project directories and files dynamically.
 */

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Get file path

const logFilePath = path.join(__dirname, "journal.txt");

// function for saving journal entry to file

function logEntry(entry) {
    const timestamp = new Date().toISOString();
    const log = `[${timestamp}] ${entry}\n`;

    fs.appendFile(logFilePath, log, (err) => {
        if (err) console.error("Error writing to file", err);
        else console.log("Journal entry saved!");
        rl.close();
    });
}

// Response in console

rl.question("Write your journal entry: ", (entry) => {
    logEntry(entry);
});