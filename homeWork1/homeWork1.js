function whichNumberIsBigger(a, b) {
    if (a === b) {
        return "Numbers are equal";
    } else if (a > b) {
        return a;
    } else {
        return b;
    }
}

console.log(whichNumberIsBigger(5, 7));