const index = (arr, num) => {
    for (let i = 0; i<arr.length; i++){
        if(arr[i] === num){
            return i;
        }
    }
    return -1;
}

console.log(index([1, 3, 5, 7], 8));
console.log(index([1, 3, 5, 7], 5));