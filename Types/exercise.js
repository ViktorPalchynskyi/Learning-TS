function twoFer(name) {
    if (name === void 0) { name = 'you'; }
    return "one for ".concat(name, ", one for me");
}
function isLeapyear(year) {
    console.log(year % 400);
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}
console.log(isLeapyear(2012));
console.log(isLeapyear(2013));
