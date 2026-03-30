// sum of array
let arr = [5, 10, 15, 20];
final=0
arr.map((value,idx)=>{
    final=final+value
})
console.log("sum of array :",final)
//reverse astring 
a="hello"
reversed_a=""
for(let i =a.length-1;i>=0;i--){
    reversed_a=reversed_a+a[i]
}
console.log("reversed_String: ",reversed_a)

let cart = [
  { name: "Wire", price: 100, qty: 2 },
  { name: "Switch", price: 50, qty: 3 },
  { name: "Board", price: 200, qty: 1 }
];
total=0
cart.map((value,idx)=>{
    invidual_price=value.price*value.qty
    total=total+invidual_price
})
console.log(total)
function reverseString(str) {
    // write your code below
   reverse=""
   for(let i=str.length-1;i>=0;i--){
    reverse=reverse+str[i]
   }
   return reverse
}

a="hello"
console.log(reverseString(a))

function fibonacci(n){
    let n_2=0
    let n_1=1
    let new_=n_2+n_1

    for(let i=2;i<n;i++){
    n_2=n_1
    n_1=new_
    new_=n_2+n_1
    }
        


    return new_

}
console.log(fibonacci(6))
