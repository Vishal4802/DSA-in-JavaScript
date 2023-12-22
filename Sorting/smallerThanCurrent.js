//Input: nums = [8,1,2,2,3]
// Output: [4,0,1,1,3]

const smallerThanCurrent = (nums) => {
    let collector = {}
    let ans = []

    for(let i = 0; i<nums.length; i++){
        if(collector[nums[i]]) ans[i] = collector[nums[i]]
        else{
            let count = 0;
            for(j = 0; j<nums.length; j++){
                if(i !== j && nums[i] > nums[j]) count++
            }
            collector[nums[i]] = count
            ans[i] = count
        }
    }

    return ans
}

console.log(smallerThanCurrent([8,1,2,2,3]))