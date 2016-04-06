var prompt = require('prompt');
fs = require('fs');

// menu file
var menu = "../owner/menu.txt";

// menu
fs.readFile(menu, 'utf8', function(err, data){
  if (!err) {
    var menuArr = data.split('\n');
    menuArr = eval(menuArr);
    for (var i = 0; i < menuArr.length; i++) {
      if (i != menuArr.length - 1) {
        menuArr[i] = eval(menuArr[i])
      }
      else {
        menuArr.splice(i, 1);
      }
    }
    console.log(menuArr);
  }
})

// var List = function(name,address,item,quantity){
//   this.name = name;
//   this.address = address;
//   this.item = item;
//   this.quantity = quantity;
// };

// prompt.start();

// prompt.get(['customer', 'address', 'item','quantity'], function (err, result) {
//   // console.log('Command-line input received:');
//   // console.log('  name: ' + result.name);
//   // console.log('  price: ' + result.price);
//   // console.log('  category: ' + result.category);

//   var order = new List(result.customer,result.address,result.item,result.quantity);

//   console.log('Customer Order:');
//   console.log(order);
// });