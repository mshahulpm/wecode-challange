/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function (arr) {
    let hash = new Map()
    for (const a of arr) {
        hash.set(a, (hash.get(a) || 0) + 1)
    }
    let set = new Set(hash.values())
    return set.size === hash.size
};