let arr = [1, 2, 3, 4, 5, 100, 123, 1324];
let res;

function cb(el, i, array) {
    console.log(el);
    console.log(i);
    console.log(array);
}

console.log('----------------');
console.log('forEach:')
function forEach(array, callback) {
    for (let key = 0; key < array.length; key++) {
        callback(array[key], key, array);
    }
}
forEach(arr, cb);
console.log('----------------');

function map(array, callback) {
    let result = [];
    for (let key = 0; key < array.length; key++) {
        result.push(callback(array[key], key, array));
    }
    return result;
}
res = map(arr, function (item) {
    return item + 1;
});

console.log('map: ' + res)
console.log('----------------');

function filter(array, callback) {
    let result = [];
    for (let key = 0; key < array.length; key++) {
        if (callback(array[key], key, array)) {
            result.push(array[key]);
        }
    }
    return result;
}
res = filter(arr, function (item) {
    return item > 10;
});

console.log('filter: ' + res)
console.log('----------------');

function every(array, callback) {
    let count = 0;
    for (let key = 0; key < array.length; key++) {
        if (callback(array[key], key, array)) {
            count++
        }
    }

    if (count === array.length) {
        return true
    } else {
        return false
    }
}
res = every(arr, function (item) {
    return item > 10;
});

console.log('every: ' + res)
console.log('----------------');

function some(array, callback) {
    for (let key = 0; key < array.length; key++) {
        if (callback(array[key], key, array)) {
            return true
        }
    }
    return false;
}
res = some(arr, function (item) {
    return item > 10;
});

console.log('some: ' + res)
console.log('----------------');