module.exports = function reverse (n) {
    if (n < 0) n = -n;
    let numInString = String(n);
    let res = '';
    for (let i = 0; i < numInString.length; i++) {
       res = numInString[i] + res;
    }
    return +res;
}
