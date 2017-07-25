'use strict'
let printReceipt = (inputs)=> {

}
let count = (inputs)=> {
  let allItems = loadAllItems();
  let cartItems = [];
  for (let input of inputs) {
    let splited=input.split('-');
    let barcode=splited[0];
    let count=parseFloat(splited[1]||1);
    let cartItem=cartItems.find((cartItem)=>cartItem.item.barcode==barcode);
    if(cartItem){
      cartItem.count+=count;
    }
    else{
      let item=allItems.find((item)=>item.barcode==barcode);
      cartItems.push({item:item,count:count});
    }
  }
  return cartItems;
}
