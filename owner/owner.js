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
prompt.get(['dish', 'price', 'category'], function(err, result) {
	if (!err) {
		var menuItem = new Item(result.dish, result.price, result.category);
		console.log("Menu Item: " + menuItem.dish);
		console.log("Price: " + menuItem.price);
		console.log("Category: " + menuItem.category);
		appender("['"+ menuItem.dish + "','" + menuItem.price + "','" + menuItem.category + "']\n");
	}
})