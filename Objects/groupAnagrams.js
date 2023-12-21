// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

const groupAnagrams = (strs) => {
    let ans = {}

    for(let str of strs){
        let sortedStr = str.split("").sort().join()

        !ans[sortedStr] ? ans[sortedStr] = [str] : ans[sortedStr].push(str)
        
        // if(!ans[sortedStr]){
        //     ans[sortedStr] = [str];
        // }
        // else ans[sortedStr].push(str);
    }

    return Object.values(ans)
}

console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]))
console.log(groupAnagrams([""]))
console.log(groupAnagrams(["a"]))