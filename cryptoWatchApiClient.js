var Client = require('node-rest-client').Client;
 
var client = new Client();
 
var invokeMarketApi = true;
var invokeAllowanceApi = true;
var invokeorderbookApi = true;

var market = "coinbase"
var coin = "btcusd"

if (invokeMarketApi) {

	//Invoke Market API
	client.get("https://api.cryptowat.ch/markets", function (data, response) {

	    console.log("... API https://api.cryptowat.ch/markets");
	    // console.log(data);
	    if (data.result) {

	    	console.log("");
		    console.log("Response, Total results: " + data.result.length);

	    	var markets = data.result;
	    	markets.forEach(function(market, index) {
	    		console.log("["+index+"] ---> ["+market.exchange+"]["+market.currencyPair+"]");
	    	});
	    }
	});
}

if (invokeAllowanceApi) {


	client.get("https://api.cryptowat.ch/markets/"+market+"/"+coin+"/price", function (data, response) {

	    console.log("... https://api.cryptowat.ch/markets/"+market+"/"+coin+"/price");
	    
	    if (data.result) {
	    	console.log("");
		    console.log("Response for ["+market+"]["+coin+"] ");
		    console.log("price: " + data.result.price);
		    console.log("allowance cost: " + data.allowance.cost);
		    console.log("allowance remaining: " + data.allowance.remaining);
	    }
	});
}

if (invokeorderbookApi) {
	//Invoke 
	client.get("https://api.cryptowat.ch/markets/"+market+"/"+coin+"/orderbook", function (data, response) {

	    console.log("... API https://api.cryptowat.ch/markets/"+market+"/"+coin+"/orderbook");

	    if (data.result) {

	    	console.log("");
		    console.log("Response for ["+market+"]["+coin+"] ");
		    console.log("Response, Total results: " + data.result.asks.length);

	    	var asks = data.result.asks;
	    	asks.forEach(function(ask, index) {
	    		console.log("["+index+"] ---> ["+ask+"]");
	    	});

	    }
	});

}


 
