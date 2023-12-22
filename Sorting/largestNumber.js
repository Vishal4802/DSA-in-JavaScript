const largest = (arr) => {
    const ans = arr.sort((a, b) => `${b}${a}` - `${a}${b}`).join('')
    return ans.startsWith('0') ? '0' : ans;
}

console.log(largest([3,30,34,5,9]))
console.log(largest([0, 0]))