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

  console.log('Customer Order:');
  console.log(order);
});