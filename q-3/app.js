const readline = require("readline")
const reply = require("./bot")
var r1 = readline.createInterface(process.stdin, process.stdout)
r1.setPrompt("\nYOU ==> ");
r1.prompt()
/* 
The 'line' event is emitted whenever the input stream receives an end-of-line input (\n, \r, or \r\n). This usually occurs when the user presses Enter or Return.

The 'line' event is also emitted if new data has been read from a stream and that stream ends without a final end-of-line marker.
*/
r1.on('line', (msg) => {
    let r = reply(msg);
    console.log("\nBOT ==> " + r);
    r1.prompt();
}).on('close', () => {
    process.exit();
})

