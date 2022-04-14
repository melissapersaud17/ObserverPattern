/*
=======================
02 - Quote of the Day - index.js
=======================
Student ID:
Comment (Required):

=======================
*/
const DayEmitter = require("./modules/DayEmitter");
const QuoteEmitter = require("./modules/QuoteEmitter");
const qotd = require("./data/quotes.json");	//length of quotes is 20

const day_emitter = new DayEmitter(2400);
const quote_emitter = new QuoteEmitter({day_emitter,qotd});

quote_emitter.on("quote", function({quote}){
	process.stdout.cursorTo(1, 1);
	process.stdout.clearLine();
	console.log(quote);
});



day_emitter.on("newday", function({mm_dd}){
	process.stdout.cursorTo(0, 0);
	process.stdout.clearLine();
	console.log(mm_dd);
});
day_emitter.start();
