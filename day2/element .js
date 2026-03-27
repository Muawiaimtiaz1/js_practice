
const arr=[1,2,3,4,5]
console.log("first element :",arr[0])
console.log("last element  :",arr.at(-1))

const arr2=[1,2,3,4,5]
console.log("adding at start")
arr.unshift(0)
console.log("adding element at the end")
arr.push(6)
//new_arr=[...arr,6]
console.log(arr)