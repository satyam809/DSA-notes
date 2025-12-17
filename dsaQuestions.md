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

