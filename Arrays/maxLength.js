const maxLength = (arr) => {
    return arr.reduce((maxLength, word) => {
        const currentLength = word.length;
        return currentLength > maxLength ? currentLength : maxLength;
    }, 0)
}

console.log(maxLength(["apple", "orange", "bannana", "grapes", "kiwi"]))
console.log(maxLength(["", "", "", "", ""]))
console.log(maxLength([]))