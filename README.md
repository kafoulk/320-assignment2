# 320-assignment2
cli-tool module utilizing built-in (core) node.js modules

I decided to create a journal log for this assignment because it was simple and I use physical journals all the time.

The assignment details:
-create a repository
-create a cli-tool module utilizing built-in (core) modules:
    readline
    fs
    path
-create a readme file
-document how to use the cli-tool
-document a weekly recap of the topics
-update the package.json to properly document and version the cli-tool module
-publicly publish the cli-tool module
-upload a link to the repository

The fs or "file system" module is used to create and update the journal file, journal.txt
The path module is used to generate the file path for journal.txt, so that the fs module may update the file
The readline module is used in this journal cli-tool by creating an interface for the user to create journal entries through the terminal console.

How to use this journal CLI Tool:
1. Install NPM on your code editor
2. Type "journal-log" in the terminal console, hit enter
3. Receive response from console: "Write your journal entry: "
4. Type journal entry in console input, hit enter
5. Receive 1 of 2 responses in console:
    -"Error writing to file :( "
    -"Journal entry saved! :D "
6. Check journal.txt file for journal entry

Thank you!