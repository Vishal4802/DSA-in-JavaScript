const isPalidrome = (str) =>{
    n = str.length - 1
    l = 0
    if(str.length <= 1){
        return str + " is a palidrome"
    }
    return palidromeCheker(str, l, n)
}

const palidromeCheker = (str, l, n) => {
    if(l>=n){
        return str + " is a palidrome"
    }
    if(str[l] !== str[n]){
        return str + " is a not palidrome"
    }
    else {
        return palidromeCheker(str, l+1, n-1)
    }
}

console.log(isPalidrome("yoy"))
console.log(isPalidrome("yoo"))
console.log(isPalidrome("yoyo"))
console.log(isPalidrome("yooy"))

// without recurrsion -> return str === str.split('').reverse().join('') ? str + " is a palidrome" : str + " is not a palidrome"