/*
=======================
04 - Bad Word Detection - BadWordEmitter.js
=======================
Student ID:
Comment (Required):

=======================
*/
const EventEmitter = require('events');
class BadWordEmitter extends EventEmitter{
	//constructor accepts an array of badwords and a readline interface r1

    constructor({badWords, rl}){
        super();
        let counter = 0;
        rl.on("line", (input) => {   // after submitting their sentence, should count how many bad words there are 
            let stringInput = String(input).split(" ").map((num) => String(num).toLowerCase());

            for(let i = 0; i < badWords.length; i++){
                badWords[i] = badWords[i].toLowerCase();
                if(stringInput.includes(badWords[i])){
                    counter++;
                    this.emit('badword', ({counter}));
                }
            }
        });
    }
	
	
}
module.exports = BadWordEmitter;