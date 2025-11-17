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