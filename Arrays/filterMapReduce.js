const arr = [1, 2, 3, 4, 5, 6]

const filterArr = arr.filter((ele, i) => ele > 2)
const mapArr = arr.map((ele, i) => ele * ele)
const reduceArr = arr.reduce((acc, ele) => acc + ele)


console.log(filterArr)
console.log(mapArr)
console.log(reduceArr)