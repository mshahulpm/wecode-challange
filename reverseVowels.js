/**
 * 
 * @param {string} s 
 * @returns {string}
 */
var reverseVowels = function (s) {
    let start = 0
    let end = s.length - 1
    let vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'])
    s = s.split('')
    let temp = ''
    while (start <= end) {
        if (vowels.has(s[start]) && vowels.has(s[end])) {
            temp = s[start]
            s[start] = s[end]
            s[end] = temp
            start++
            end--
        } else if (vowels.has(s[start])) {
            end--
        } else if (vowels.has(s[end])) {
            start++
        } else {
            start++
            end--
        }
    }
    return s.join('')
};