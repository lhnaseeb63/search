function checkIfPalindrome(s) {
    let left = 0;
    let right = s.length - 1;

    while(left < right){
        if(s[left] !== s[right]){
            return false;
        }
        left++;
        right--;
    }

    return true;
    /* 
        O(n) time complexity: the while loop iterations cost O(1) each, 
        and there can never be more than O(n) iterations of the while loop. 
    */
}

/* Example 2: Given a sorted array of unique integers and a target integer, 
return true if there exists a pair of numbers that sum to target, false otherwise.*/
let nums = [1, 2, 4, 6, 8, 9, 14, 15];
let target = 13;

function targetSum(nums, target){
    let left = 0;
    let right = nums.length - 1;

    while(left < right){
        if(nums[left] + nums[right] > target){
            right--;
        } else {
            left++;
        }
        if(nums[left] + nums[right] === target){
            return true;
        }
        
    }
    return false;
    /* 
        O(n) time complexity
        O(1) space complexity
    */
}

console.log(targetSum(nums, target));

/* Example 3: Given two sorted integer arrays arr1 and arr2, 
return a new array that combines both of them and is also sorted. */
function combine(arr1, arr2){
    let sortedArray = [];
    let i = 0;
    let j = 0;

    while(i < arr1.length && j<arr2.length){
        if(arr1[i] < arr2[j]){
            sortedArray.push(arr1[i]);
            i++;
        }
        else{
            sortedArray.push(arr2[j]);
            j++;
        }
    }

    while(i < arr1.length){
        sortedArray.push(arr1[i]);
        i++;
    }
    while(j < arr2.length){
        sortedArray.push(arr2[j]);
        j++;
    }

    return sortedArray;

    /*  
        time complexity of O(n) and uses O(1) space 
        (if we don't count the output as extra space, which we usually don't). 
    */
}

/* 
    Example 4: 392. Is Subsequence.

    Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

    A subsequence of a string is a sequence of characters that can be obtained by deleting some 
    (or none) of the characters from the original string, while maintaining the relative order 
    of the remaining characters. For example, "ace" is a subsequence of "abcde" while "aec" is not.
*/
function isSubsequence(s, t){
    let i = 0;
    let j = 0;

    while(j<t.length){
        if(s[i] === t[j]){
            i++;
        }
        j++;
    }

    return s.length === i;

    /* 
        O(1) space complexity
        O(s + t) time complexity
    */
}

// --------------------------------------------------------------------------------------- PROBLEMS
function reverseString(nums){
    let left = 0;
    let right = nums.length -1;

    while(right>left){
        let temp = nums[left];
        nums[left] = nums[right];
        nums[right] = temp;
        left++;
        right--;
    }

    return nums;
}

/* 
    Given an integer array nums sorted in non-decreasing order, 
    return an array of the squares of each number sorted in non-decreasing order.
*/
function bubbleSort (arr){
    for(let i = 0; i<arr.length; i++){
        for(let j = 0; j< arr.length - i- 1; j++){
            if(arr[j] > arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
           
        }
    }
    return arr;
}
function sortedSquares(nums){
    for(let i = 0; i< nums.length; i++){
        nums[i] = nums[i] * nums[i];
    }
    let ans = bubbleSort(nums);
    return ans;

}