function largest(arr: number[]): number {

    let max = arr[0];

    for (let i = 1; i < arr.length; i++) {

        if (arr[i] > max) {
            max = arr[i];
        }
    }

    return max;
}

console.log(largest([10, 40, 10, 50, 15]));

// in this code we are updating input data