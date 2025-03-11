/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function (gain) {

    let max_alt = 0
    let cur_alt = 0
    for (let i = 0; i < gain.length; i++) {
        cur_alt += gain[i]
        max_alt = Math.max(max_alt, cur_alt)

    }
    return max_alt
};