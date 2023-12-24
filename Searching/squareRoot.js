//using bianry search

const squareRoot = (n) => {
    if(n < 0){
        return "input positive Integers"
    }
    if(n <= 1){
        return n;
    }

    let start = 0;
    let end = n;
    let result = 0;

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);

        if (mid * mid === n) {
            return mid;
        } else if (mid * mid < n) {
            start = mid + 1;
            result = mid;
        } else {
            end = mid - 1;
        }
    }
    return result;
}

console.log(squareRoot(24))
