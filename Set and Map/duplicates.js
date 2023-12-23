const checkDuplicates = (nums) => {
    const map = new Map()
    for(const value of nums){
        if(map.get(value)) return true 
        else map.set(value, 1)
    }
    return false
}

console.log(checkDuplicates([1,2,3,1]))
console.log(checkDuplicates([1,2,3,4]))
