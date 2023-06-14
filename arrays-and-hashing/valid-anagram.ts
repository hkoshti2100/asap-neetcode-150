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

function isAnagram(s: string, t: string) {
	if (s.length !== t.length) return false;

	let first: Array<string | null> = s.split('');
	const second = t.split('');

	for (let i = 0; i < second.length; i++) {
		const element = second[i];

		let found = first.indexOf(element);

		if (found !== -1) {
			first[found] = null;
		} else {
			return false;
		}
	}

	return true;
}