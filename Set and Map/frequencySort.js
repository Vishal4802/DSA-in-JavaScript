const frequencySort = (s) => {
    let map = new Map();

    for(let i=0; i< s.length; i++){
        if(map.has(s[i])){
            map.set(s[i], map.get(s[i])+1)
        }else{
            map.set(s[i], 1)
        }
    }

    let arr = Array.from(map)

    arr.sort((a,b)=>{
        return b[1] - a[1]
    })

    let str=''

    for(let i=0; i< arr.length; i++){
        let [key,val] = arr[i]
        str= str+ key.repeat(val)
    }

    return str
};

console.log(frequencySort("tree"))