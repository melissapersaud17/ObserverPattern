/*
=======================
02 - Quote of the Day - QuoteEmitter.js
=======================
Student ID:
Comment (Required):

=======================
*/
const EventEmitter = require('events');
class QuoteEmitter extends EventEmitter {
    //constructor accepts a DayEmitter object - listens for a newday event and emits a qotd event that includes a random quote as it's second argument
    constructor({day_emitter,qotd}){
        super();
        day_emitter.on("newday", ()=> {
            let random= Math.floor(Math.random() * qotd.length);
            let quote = qotd[random];
            this.emit("quote", {quote});
        });

    }
	
	
	
}
module.exports = QuoteEmitter;