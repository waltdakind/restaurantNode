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
var Item = function(name, price, category) {
	this.name = name;
	this.price = price;
	this.category = category;
}

// prompt time
prompt.start();
prompt.get(['name', 'price', 'category'], function(err, result) {
	if (!err) {
		var menuItem = new Item(result.name, result.price, result.category);
		console.log("Menu Item: " + menuItem.name);
		console.log("Price: " + menuItem.price);
		console.log("Category: " + menuItem.category);
		appender(menuItem.name + ',' + menuItem.price + ',' + menuItem.category + '\n');
	}
})