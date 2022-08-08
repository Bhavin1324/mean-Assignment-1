const readline = require("readline")
const bot = require("./bot")
// const bot = require("./test")
var r1 = readline.createInterface(process.stdin, process.stdout)
r1.setPrompt("You==>");
r1.prompt()

/* 
The 'line' event is emitted whenever the input stream receives an end-of-line input (\n, \r, or \r\n). This usually occurs when the user presses Enter or Return.

The 'line' event is also emitted if new data has been read from a stream and that stream ends without a final end-of-line marker.
*/
r1.on('line', (msg) => {
    let re = bot.reply(msg);
    if (re instanceof Function) {
        re();
    }
    console.log("Bot==> " + bot.reply(msg))
    r1.prompt();
}).on('close', () => {
    process.exit();
})



//hello world

/* 
r1.on('line', (msg) => {
    setTimeout(async () => {
        let reply = await bot.reply(msg);
        if (reply instanceof Function) {
            reply();
        }
        console.log("\nSelena => " + reply + '\n')
        r1.setPrompt("you    => ");
        r1.prompt();
    }, 800);

}).on('close', () => {
    process.exit();
}) */