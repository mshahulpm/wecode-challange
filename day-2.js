/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {

    let no_zeros = 0
    let hash = {}
    for (i = 0; i < nums.length; i++) {
        if (nums[i]) {
            hash[i - no_zeros] = nums[i]
        } else {
            no_zeros++
        }
    }
    for (j = 0; j < nums.length; j++) {
        nums[j] = hash[j] ?? 0
    }

};

