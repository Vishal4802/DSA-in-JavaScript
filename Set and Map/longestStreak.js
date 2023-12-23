// O(n) solution
// Input: nums = [100,4,200,1,3,2]
// Output: 4
// Input: nums = [0,3,7,2,5,8,4,6,0,1]
// Output: 9
// Input: nums = []
// Output: 0

const longestStreak = (nums) => {
    if (!nums.length) {
        return 0;
    }
    const set = new Set(nums)
    let max = 0
    for(const num of set){
        if(!set.has(num-1)){
            let currentNum = num
            let currentLength = 1;

            while(set.has(currentNum+1)){
                currentNum++;
                currentLength++;
            }
            max = Math.max(currentLength, max)
        }
    }
    return max
}

console.log(longestStreak([100,4,200,1,3,2]))
console.log(longestStreak([0,3,7,2,5,8,4,6,0,1]))
console.log(longestStreak([]))
