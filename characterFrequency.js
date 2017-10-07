/*
I: input string of characters
O: array of arrays descending order of frequency then ascending order by character
*/

function characterFrequency (string) {
    //make histogram
    const hist = {};
    string.split('').forEach(char => {
        if(hist[char]) {
            hist[char] += 1;
        } else {
            hist[char] = 1;
        }
    });
      
    const tuples = [];
    for (var key in hist) {
        tuples.push([key, hist[key]]);
    }
    
    tuples.sort((a,b) => {
        if (a[1] === b[1]) {
            if (a[0] > b[0]) {
            return 1;
            } else {
            return -1;
            }
        } else {
            return b[1] - a[1];
        }
    });
    return tuples;
}
    