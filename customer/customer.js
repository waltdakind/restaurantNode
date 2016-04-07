var prompt = require('prompt');
fs = require('fs');

// menu file
var menu = "../owner/menu.txt";

// List
var List = function(name,address,item,quantity){
  this.name = name;
  this.address = address;
  this.item = item;
  this.quantity = quantity;
};

// menu: grab file synchronously (thanks walt)
// then make an array we'll reference in the prompt
var menuOrig = fs.readFileSync(menu, 'utf8');

// split the string
var menuArr = menuOrig.split('\n');

// eval string
menuArr = eval(menuArr);

// eval stringed arrays within the new array
for (var i = 0; i < menuArr.length; i++) {
  if (i != menuArr.length - 1) {
    menuArr[i] = eval(menuArr[i])
  }
  // removes newline orphan
  else {
    menuArr.splice(i, 1);
  }
}
// debug check
console.log(menuArr);

prompt.start();

prompt.get(['customer', 'address', 'item','quantity'], function (err, result) {

  var order = new List(result.customer,result.address,result.item,result.quantity);

  // now reference array we made from menu.txt to calculate the order information

  // for loop to find the right array
  for (var i = 0; i < menuArr.length; i++) {
    if (order.item.toLowerCase() === menuArr[i][0].toLowerCase()) {
      console.log("Hi, " + order.name + "!");
      console.log("You ordered " + order.quantity + " of the " + order.item);
      console.log("That comes to $" + (order.quantity * menuArr[i][1]));
      console.log("We'll arrive shortly to " + order.address + " with your food!")
      console.log("See you soon!");
    }
  }
});