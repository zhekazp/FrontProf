function whichNumberIsBiggerTs(a: number, b: number): number | string {
    if (a === b) {
        return "Numbers are equal";
    } else if (a > b) {
        return a;
    } else {
        return b;
    }
}

console.log(whichNumberIsBiggerTs(5, 7));