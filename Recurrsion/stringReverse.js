const stringReverse = (str) => {
    return str.length <= 1 ? str : stringReverse(str.slice(1)) + str[0];
}

console.log(stringReverse("string"))
console.log(stringReverse("s"))
console.log(stringReverse(" "))
console.log(stringReverse(""))