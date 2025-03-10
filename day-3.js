/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function (nums, k) {
    let sum_of_k = 0
    for (let i = 0; i < k; i++) {
        sum_of_k += nums[i]
    }
    let max = sum_of_k
    let first = 0
    let last = k
    while (last < nums.length) {
        sum_of_k = sum_of_k - nums[first] + nums[last]
        max = Math.max(max, sum_of_k)
        first++
        last++
    }
    return max / k
};