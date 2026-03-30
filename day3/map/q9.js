const products = [
  { name: "laptop", price: 1000 },
  { name: "mouse", price: 500 },
  { name: "keyboard", price: 500 },
  { name: "monitor", price: 1000 },
  { name: "headphones", price: 300 },
  { name: "webcam", price: 300 },
  { name: "printer", price: 1000 }
];

texed_price=products.map(elem=>{
    elem["10%"]=elem["price"]/10
   return elem;
})
console.log(texed_price)
