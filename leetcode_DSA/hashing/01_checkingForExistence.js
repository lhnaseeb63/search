// Checking for existence
// Arrays  need O(n) time complexity, but hash map uses O(1)

/* 
Example 1: 1. Two Sum

Given an array of integers nums and an integer target, return indices of two numbers
such that they add up to target. You cannot use the same index twice. 
*/

var twoSum = function(nums, target){
    let dic = new Map();
    for(let i=0;i<nums.length;i++){
        let num = nums[i];
        let complement = target - num;
        if(dic.has(complement)){
            return [i, dic.get(complement)];
        }

        dic.set(num, i);
    }

    return [-1,-1]
    /* 
        calculate the complement.
        if the hashmap has the complement, return the current index and index of complement
        set the current number at current index
        repeat

        O(n) time complexity
        O(1) time complexity for each operation
        O(n) space complexity as the number of keys to store scales linearly with the input size
    */
};

/* 
Example 2: 2351. First Letter to Appear Twice

Given a string s, return the first character to appear twice. 
It is guaranteed that the input will have a duplicate character.
*/

var repeatedLetter = function(s){
    let seen = new Set();
    for(let i=0;i<s.length;i++){
        let c = s[i];
        
        if(seen.has(c)){
            return c;
        }
        seen.add(c);
    }
    return ' ';

    /* 
        O(n) time complexity
        O(m) space complexity, where m is the number of allowable characters in the input
    */
}

/* 
Example 3: 

Given an integer array nums, find all the unique numbers x in nums 
that satisfy the following: x + 1 is not in nums, and x - 1 is not in nums.
*/

var findNumbers = function(nums){
    let numsSet = new Set(nums);
    let answer = [];

    for(const num of nums){
        if(!numsSet.has(num+1) && !numsSet.has(num-1)){
            answer.push(num);
        }
    }

    return answer;

}
let nums = [1,2,3,4,5,6,7,8,9,10, 7,8,9,10]
findNumbers(nums)
// ------------------------------------------------------------------------- Hashing Intro Notes
/* 
    - Data structures can be split 2 ways:
        1. Interface: 
            - How we can interact with the data strucutre
            - Operations we can perform on it, inputs it expects, and output we can expect
        2. Implementation
            - Code that makes the data structure work

    - Hashing
        - A hash function is a function that takes an input and deterministically converts it 
        to an integer that is less than a fixed size set by the programmer. 
        - Inputs are called keys and the same input will always be converted to the same integer
        - when a hash function is combined with an array, it creates a hash map/hash table/dictionary

    - Hash Map
        - With arrays, we map indices to values
        - With hash maps, we map keys to values
        - To summarize, a hash map is an unordered data structure that stores key-value pairs. 
        - A hash map can add and remove elements in O(1), as well as update values associated with a key 
        and check if a key exists, also in O(1). 
        - You can iterate over both the keys and values of a hash map, but the iteration 
        won't necessarily follow any order
        - When different keys convert to the same integer, it is called a collision.
        - How can we design our hash map to minimize collisions? 
            -The most important thing is that the size of your hash table's array 
            and modulus is a prime number
    
    - Sets
        - Uses same mechanism for hashing keys into integers
        - Sets do not map their keys to anything.
        - Useful when you only care about checking if elements exist
        - Add, remove, check existence in O(1) time
        - dont check frequency. 

    - Arrays as keys?
        - Arrays are mutable, so we need to make them immutable to be considered as a unique key.
        - Use a function, or turn the array into a string
*/