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
912. Sort an Array
var sortArray = function(nums) {
    if(nums.length <= 1) return nums;
    let mid = Math.floor((0 + nums.length)/2);
    let left = sortArray(nums.slice(0, mid));
    let right = sortArray(nums.slice(mid))
    return merge(left, right)
};

function merge(left, right){
    let i = 0; 
    let j = 0;
    let newArr = [];
    while(i < left.length && j < right.length){
        if(left[i] < right[j]){
            newArr.push(left[i]);
            i++;
        }else{
            newArr.push(right[j]);
            j++;
        }
    }
    return [...newArr, ...left.slice(i), ...right.slice(j)]
}

1796. Second Largest Digit in a String
var secondHighest = function(s) {
    let digit = [];
    let uniqueDigit = [];
    // fetch digit
    for(let i = 0; i < s.length; i++){
        if(Number(s[i]) <= 9){
          digit.push(Number(s[i]))
        }
    }
    console.log('digit ',digit)
    // remove duplicate
    for(let j = 0; j < digit.length; j++){
        let exist = true;
       for(let k = 0; k < uniqueDigit.length; k++){
        if(digit[j] == uniqueDigit[k]){
            exist = false;
            break;
        }
       }
      if(exist) uniqueDigit.push(digit[j]);
    }
    console.log('unique digit', uniqueDigit)
    // sort
    const sort = sorting(uniqueDigit);
    console.log('sort', sort)
    return sort.length == 1 ? -1 : sort[sort.length - 2];
};

function sorting(arr){
    if(arr.length <= 1) return arr;
    let mid = Math.floor((0 + arr.length)/2);
    let left = sorting(arr.slice(0, mid));
    let right = sorting(arr.slice(mid));
    return sort(left, right);
}

function sort(left, right){
    let i = 0;
    let j = 0;
    let arr = []
    while(i < left.length && j < right.length){
        if(left[i] < right[j]){
          arr.push(left[i]);
          i++;
        }else{
            arr.push(right[j]);
            j++;
        }
    }
    return [...arr, ...left.slice(i), ...right.slice(j)]
}