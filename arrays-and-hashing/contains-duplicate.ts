// Given an integer array nums, return true if any value appears at
// least twice in the array, and return false if every element is distinct.


// Example 1:
// Input: nums = [1,2,3,1]
// Output: true

// Example 2:
// Input: nums = [1,2,3,4]
// Output: false

// Example 3:
// Input: nums = [1,1,1,3,3,4,3,2,4,2]
// Output: true

// Constraints:
// 1 <= nums.length <= 105
// -109 <= nums[i] <= 109

function containsDuplicate(nums: number[]): boolean {
	if(nums.length === (new Set(nums)).size) {
		return false;
	}
	return true;
}

console.log(containsDuplicate([1,2,3,4,5]));
console.log(containsDuplicate([1,2,3,4,5,3,1]));
console.log(containsDuplicate([1,2,3,4,5,5]));
console.log(containsDuplicate([1,2,3,4,5,34,7,8,9,10,11,12,2]));