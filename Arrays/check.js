const check = (arr, num) => {
    for (let x of arr){
        if(x === num){
            return true;
        }
    }
    return false;
}

console.log(check([1, 3, 5, 7], 8));
console.log(check([1, 3, 5, 7], 5));