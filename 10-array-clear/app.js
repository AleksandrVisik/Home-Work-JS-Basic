const arr = [3, 6, 9, 2];
// удалить true
function canDelElement(number) {
    return number > 5;
}

function filterArray(array, fn) {
    const resaultArray = [];
    for (let i = 0; i < array.length; i++) {
        const isDel = fn(array[i]);
        if (!isDel) {
            resaultArray.push(array[i]);
        }
    }
    return resaultArray;
}
const res = filterArray(arr, canDelElement);
console.log(res);
