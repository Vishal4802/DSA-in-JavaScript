// [1, 1, 1, 1] = sum is 0
// [1 ,2 , 3, 1] = sum is 5 (2+3)

const uniqueSum = (nums) => {
    let map = {};
    let sum = 0;

    for (let num of nums) {
        map[num] = (map[num] || 0) + 1;
        if (map[num] === 1) {
            sum += num;
        } else if (map[num] === 2) {
            sum -= num;
        }
    }

    return sum;
};

console.log(uniqueSum([1, 1, 1, 1]))
console.log(uniqueSum([1 ,2 , 3, 1]))
