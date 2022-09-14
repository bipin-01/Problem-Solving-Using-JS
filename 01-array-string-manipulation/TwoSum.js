// Given an array of integrs, return indices of the two numbers such that they add up to specific target.


//Example  1: 
// Input: nums = [2, 7, 11, 15], target = 9
// Output: [0, 1]


// Brute Force Approach
var twoSum = function(nums, target) {
    for(let i = 0; i< nums.length ; i++) {
        for(let j = i+1; j< nums.length; j++) {
            if(nums[i] + nums[j] === target){
                return [i, j]
            }
        }
    }
}


// using hash map

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
    const maps = {};
    for(let i=0; i<nums.length; i++) {
        maps[nums[i]] = i
    }
    for(let i=0; i<nums.length; i++) {
        const complement = target - nums[i];
        if(maps[complement] != undefined  && i != maps[complement]) {  
            return [i, maps[complement]]
        }
    }
};



console.log(twoSum([3, 2, 4], 6))