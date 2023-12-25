const isPalidrome = (str) =>{
    n = str.length - 1
    l = 0
    return str.length <= 1 ? str + " is a palidrome" : palidromeCheker(str, l, n)
}

const palidromeCheker = (str, l, n) => {
    if(l>=n){
        return str + " is a palidrome"
    }
    return str[l] !== str[n] ? str + " is a not palidrome" : palidromeCheker(str, l+1, n-1)
}

console.log(isPalidrome("yoy"))
console.log(isPalidrome("yoo"))
console.log(isPalidrome("yoyo"))
console.log(isPalidrome("yooy"))

// without recurrsion -> return str === str.split('').reverse().join('') ? str + " is a palidrome" : str + " is not a palidrome"
