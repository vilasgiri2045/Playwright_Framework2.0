
function countFrequency(str: string) {

    let map: { [key: string]: number } = {};

    for (let ch of str) {

        map[ch] = (map[ch] || 0) + 1;
    }

    console.log(map);
}

countFrequency("automation");