// require the prompt module
prompt = require('prompt');
fs = require('fs');

// menu file
menu = "menu.txt";

// append function
function appender(str) {
	fs.appendFile(menu, str, "utf8", function(err) {
		if (!err) {
			// callback would go here IF WE NEEDED IT
		}
	})
}

// item class
var Item = function(dish, price, category) {
	this.dish = dish;
	this.price = price;
	this.category = category;
}

// prompt time
prompt.start();
// start prompt
prompt.get(['dish', 'price', 'category'], function(err, result) {
	// if no error
	if (!err) {
		// make a new menu Item
		var menuItem = new Item(result.dish, result.price, result.category);
		// log the results to console
		console.log("Menu Item: " + menuItem.dish);
		console.log("Price: " + menuItem.price);
		console.log("Category: " + menuItem.category);
		// add info as an array on a new line in menu.txt
		appender("['"+ menuItem.dish + "','" + menuItem.price + "','" + menuItem.category + "']\n");
	}
})