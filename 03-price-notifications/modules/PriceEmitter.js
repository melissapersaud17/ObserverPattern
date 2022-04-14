/*
=======================
03 - Price Notifications - PriceEmitter.js
=======================
Student ID:
Comment (Required):

=======================
*/
const EventEmitter = require('events');
class PriceEmitter extends EventEmitter {
    //constructor takes in a stock emitter object, target price and direction
    constructor({stock_emitter, stock_alerts}){
        //emits a price-alert when a certain price threshold is passed, second argument on the emitter should be an object containing date,ticker,target_price, direction and price
     
    }
	
	
	
}
module.exports = PriceEmitter;
