function naiveSearch(string, subString) {
    for (let i = 0; i <= string.length - subString.length; i++) {
        let found = true;
        for (let j = 0; j < subString.length; j++) {
            if (string[i + j] !== subString[j]) {
                found = false;
                break;
            }
        }
        if (found) {
            return true;
        }
    }
    return false;
}

module.exports = naiveSearch;
