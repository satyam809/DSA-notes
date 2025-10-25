// Count the Number of Digits in an Integer
// 234
function countDigit(num){
    if(num == 0) return 1;
    let count = 0;
    let copyNum = Math.abs(num)
    while(copyNum > 0){
        copyNum = Math.floor(copyNum/10);
        count++;
    }
    return count;
}
console.log(countDigit(234))