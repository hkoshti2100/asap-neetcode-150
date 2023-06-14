// Given two strings s and t, return true if t is an anagram of s,
// and false otherwise.
// An Anagram is a word or phrase formed by rearranging the letters
// of a different word or phrase, typically using all the original letters exactly once.
// Example 1:
// Input: s = "anagram", t = "nagaram"
// Output: true
// Example 2:
// Input: s = "rat", t = "car"
// Output: false
// Constraints:
// 1 <= s.length, t.length <= 5 * 104
// s and t consist of lowercase English letters.
function isAnagram(s, t) {
    if (s.length !== t.length)
        return false;
    var first = s.split('');
    var second = t.split('');
    for (var i = 0; i < second.length; i++) {
        var element = second[i];
        var found = first.indexOf(element);
        if (found !== -1) {
            first[found] = null;
        }
        else {
            return false;
        }
    }
    return true;
}
