//reversing an arrray withnoutusing reverse function
let arr=[1,2,3,4,5]
for (let i=arr.length-2;i>=0;i--){
        arr.push(arr[i])
        arr.splice(i,1)

}
console.log(arr)