268. Missing Number
var missingNumber = function(nums) {
    let n = nums.length;
    let sum = n*(n+1)/2;
    let arrSum = 0;
    for(let i = 0; i < nums.length; i++){
        arrSum+= nums[i];
    }
    return sum - arrSum;
};

485. Max Consecutive Ones
var findMaxConsecutiveOnes = function(nums) {
    let count = 0;
    let maxCount = 0;
    for(let i = 0; i < nums.length; i++){
        if(nums[i] == 1){
            count++;
        }else{
            if(count > maxCount){
                maxCount = count;
            }
            count = 0;
        }
    }
    return count > maxCount ? count : maxCount;
};

283. Move Zeroes
var moveZeroes = function(nums) {
    let x = 0;
    for(let i = 0; i < nums.length; i++){
        if(nums[i] != 0){
            nums[x] = nums[i];
            x++;
        }
    }
    for(let j = x; j < nums.length; j++){
        nums[j] = 0;
    }
    return nums;
};
704. Binary Search
var search = function(nums, target) {
    let start = 0;
    let end = nums.length - 1; 
    while(start <= end){ 
        let mid = Math.floor((start + end)/2); 
        if(target == nums[mid]) return mid;
        if(target > nums[mid]){
            start = mid + 1;
        }else{
            end = mid - 1;
        }
    }
    return -1;
};
// sum of first n number using recursion
function sum(num){
    if(num == 0) return 0;
    return num + sum(num - 1)
}
console.log(sum(5))

// sum of all elements in an array
let arr = [5, 2, 6, 1, 3];
function sum(index){
    if(index == 0) return arr[index];
    return arr[index] + sum(index - 1)
}
console.log(sum(arr.length - 1))

// sum of all odd number in an array using recursion
let arr = [5, 2, 6, 1, 3];
function sum(index){
    let isOdd = arr[index] % 2 != 0;
    if(index == 0) return isOdd ? arr[index] : 0;
    return (isOdd ? arr[index] : 0) + sum(index -1)
}
console.log(sum(arr.length - 1))

// calculate factorial using recursion
function factorial(n){
    if(n == 1) return 1;
    return n * factorial(n-1)
}
console.log(factorial(5))

//231. Power of Two
var isPowerOfTwo = function(n) {
    if(n == 1){
        return true;
    }
    if(n > 1){
        return isPowerOfTwo(n/2);
    }else{
        return false;
    }
};
