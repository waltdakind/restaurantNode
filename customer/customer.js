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
// print menu
console.log("Check out our menu ([item, price, category])");
console.log(menuArr);

prompt.start();

prompt.get(['customer', 'address', 'item','quantity'], function (err, result) {

  var order = new List(result.customer,result.address,result.item,result.quantity);

  // now reference array we made from menu.txt to calculate the order information

  // for loop to find the right array
  for (var i = 0; i < menuArr.length; i++) {
    // check if the first element of i (the item name) matches the order's item
    if (order.item.toLowerCase() === menuArr[i][0].toLowerCase()) {
      // if so, greet the customer
      console.log("Hi, " + order.name + "!");
      // if only one is ordered
      if (order.quantity==1) {
        // show this message
        console.log("You ordered " + order.quantity +" "+ order.item);
      }
      // elsewise
      else{
        // show a plural version of the message
        console.log("You ordered " + order.quantity + " " + order.item +"s.");
      };
      // total price
      console.log("That comes to $" + (order.quantity * menuArr[i][1]));
      // delivery message
      console.log("We'll arrive shortly to " + order.address + " with your food!")
      // farewell
      console.log("See you soon!");
    }
  }
});