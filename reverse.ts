function reverseNumber(num: number): number {
    let reverse = 0;

    while (num > 0) {
        let digit = num % 10;
        reverse = reverse * 10 + digit;
        num = Math.floor(num / 10);
    }

    return reverse;
}

console.log(reverseNumber(12345));

//test is number is reverse or not
// what about you is it working
