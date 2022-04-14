/*
=======================
04 - Bad Word Detection - index.js
=======================
Student ID:
Comment (Required):

=======================
*/
const readline = require("readline");
const BadWordEmitter = require("./modules/BadWordEmitter");
const badWords = require("./data/badwords.json");

const rl = readline.createInterface({input: process.stdin, output:process.stdout});

let current_line = 1;

const bad_emitter = new BadWordEmitter({badWords,rl});
bad_emitter.on('badword',({counter})=>{
	process.stdout.cursorTo(20,0);
	process.stdout.write("Bad Word Count: ");
	console.log(counter);
	process.stdout.cursorTo(0,current_line);
});



const shell_prompt = function(){
	current_line++;
	process.stdout.write("> ")
}

rl.on("line", shell_prompt);

console.clear();
console.log("Welcome to the chat");
shell_prompt();