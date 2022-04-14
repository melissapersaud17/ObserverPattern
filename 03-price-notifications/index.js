/*
=======================
03 - Price Notifications - index.js
=======================
Student ID:
Comment (Required):

=======================
*/
const DayEmitter = require("./modules/DayEmitter");
const Stock = require("./modules/Stock");
const PriceEmitter = require("./modules/PriceEmitter");

const portfolio_data = require("./data/stocks.json");
const stock_alerts = require("./data/stock-alerts.json");	//contains all the stock alerts data
const { prototype } = require("events");

const day_emitter = new DayEmitter(2400);
const portfolio = portfolio_data.map(stock => new Stock({...stock, day_emitter})); //contains stock objects, Google and Apple stocks; this creates the stock emitters

let current_line = portfolio.length + 1;

portfolio.forEach(function(stock, index){//inline callback function; stock is the stock being processed in the array and index of the element in the array
	stock.on("newday", function({ticker, name, price, previous, change}){
		process.stdout.cursorTo(0, index + 1);
		process.stdout.clearLine();
		console.log(`${ticker} ${name} ${price.toFixed(2)} ${change.toFixed(2)}`);
		process.stdout.cursorTo(0, current_line);

		const price_emitter = new PriceEmitter({stock, stock_alerts});
	});
});

// const alerts = new stock_alerts();
//console.log(portfolio[0],stock_alerts[0]);





day_emitter.on("newday", function(spec){
	let {mm_dd} = spec;
	process.stdout.cursorTo(0, 0);
	process.stdout.clearLine();
	process.stdout.write(mm_dd);
	process.stdout.cursorTo(0, current_line);
});
day_emitter.start();