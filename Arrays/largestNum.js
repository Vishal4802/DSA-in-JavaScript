const largestNum = (arr) => {
    return arr.reduce((max, num) => {
        const currentMax = num;
        return currentMax > max ? currentMax : max;
    }, Number.NEGATIVE_INFINITY)
}

console.log(largestNum([1, 3, -1, 2]))
console.log(largestNum([-10, -3, -1, -2]))

