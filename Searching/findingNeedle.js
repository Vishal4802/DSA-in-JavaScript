//using linear search
const findFirstNeedleIndex = (haystack, needle) => {
    for(let i = 0; i<=haystack.length-needle.length; i++){
        if(needle === haystack.slice(i, i+needle.length)){
            return i;
        }
    }
    return -1
}

console.log(findFirstNeedleIndex("I love softwares so I am a software Developer", "soft"))