const temp_in_celsius= [1,23,23,34,45,56,56]
let in_kelvin=temp_in_celsius.map(elem=>(elem*(9/5))+32)
console.log(in_kelvin)