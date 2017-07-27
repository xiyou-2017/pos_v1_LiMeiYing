'use strict'
let counted = (inputs)=> {
  let allItems = loadAllItems();
  let cartItems = [];
  for (let input of inputs) {
    let s = input.split('-');
    let barcode = s[0];
    let count = parseFloat(s[1] || 1);
    let cartItem = cartItems.find((cartItem)=>cartItem.item.barcode == barcode);
    if (cartItem) {
      cartItem.count += count;
    }
    else {
      let item=allItems.find((item)=>item.barcode==barcode);
      cartItems.push({item:item,count:count});
    }
  }
  return cartItems;
}
