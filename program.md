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

// check Palindrome

function checkPalindrome(num){
    let copyNum = num;
    let rev = 0;
    while(num > 0){
        let lastDigit = num%10;
        rev = (10 * rev) + lastDigit;
        num = Math.floor(num/10);
    }
    return (rev == copyNum) ? true : false;
}
console.log(checkPalindrome(10))