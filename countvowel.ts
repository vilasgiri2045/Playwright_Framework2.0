
function countVowels(str: string): number {

    let count = 0;

    for (let ch of str.toLowerCase()) {

        if ("aeiou".includes(ch)) {
            count++;
        }
    }

    return count;
}

console.log(countVowels("Automation"));