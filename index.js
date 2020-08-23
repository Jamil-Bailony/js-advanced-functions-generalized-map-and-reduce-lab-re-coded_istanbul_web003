function map(array, callback) {
    let r = []

    for (let i = 0; i < array.length; i++) {
        r.push(callback(array[i]))
    }

    return r
}

function reduce(array, callback, startingValue = 'notGiven') {
    let total, start;
    if(startingValue !== 'notGiven') {
        total = startingValue;
        start = 0;
    } else {
        total = array[0];
        start = 1;
    }

    for (let i = start; i < array.length; i++) {
        console.log(total);
        total = callback(total, array[i]);
    }

    return total
}