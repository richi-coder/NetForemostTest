function getLongestNonRepChars(str) {
    // 1. Look for repetitive chars
    const repeatedChar = getRepeatedChar(str);
    // 2. Regexp to segment string
    const res = getTheString(repeatedChar, str);
    // 3. Segment possibilities and get longest part
    const possibleString = getParts(res, str);
    // 4 . Get combination
    const endStr = endString(repeatedChar, possibleString, str);
    console.log('End string:', endStr);
}

function getRepeatedChar(str) {
    const chartToArray = str.split('');
    let repeated = '';
    chartToArray.forEach((char, i) => {
        if (i > 0) {
            if (char === chartToArray[i - 1]) 
            repeated = char;
        }
    });
    return repeated;
}

function getTheString(repeatedChar, str) {
    const regexp = new RegExp(`${repeatedChar}+`, 'i')
    const res = str.match(regexp)[0];
    return res
}

function getParts(res, str) {
    const possibbleStrs = str.split(res);
    const lengths = possibbleStrs.map(str => str.length);
    const longest = Math.max(...lengths);
    const longestStr = possibbleStrs.filter(str => str.length === longest)[0]; // Extensible for more probabilities
    return longestStr;
}

function endString(repeatedChar, possibleString, str) {
    const firstPoss = repeatedChar + possibleString;
    const secondPoss = possibleString + repeatedChar;
    const regexp = new RegExp(firstPoss, 'i');
    if (regexp.test(str)) return firstPoss;
    else return secondPoss;
}

getLongestNonRepChars('ABCDDDDEGHI');
// ABCDDDDEGHI example value to test