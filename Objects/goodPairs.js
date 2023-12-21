const goodPairs = (arr) => {
    let count = 0;
    let numCount = {}

    for(let i = 0; i < arr.length; i++){
        if(numCount[arr[i]]){
            count += numCount[arr[i]];
            numCount[arr[i]]++
        }
        else numCount[arr[i]] = 1
    }

    return count;
}

console.log(goodPairs([1,2,3,1,1,3]))