const intersection = (nums1, nums2) =>{
    // const arr = [];
    // for(const key of nums2) {
    //     if(!arr.includes(key) && nums1.includes(key)) arr.push(key)
    // }
    // return arr;

    const set1 = new Set(nums1);
    const set2 = new Set(nums2);
    const arr = [];
    for(const key of set2) {
        if(set1.has(key)) arr.push(key);
    }
    return arr;
}

console.log(intersection([4,9,5], [9,4,9,8,4]))