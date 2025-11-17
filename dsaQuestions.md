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