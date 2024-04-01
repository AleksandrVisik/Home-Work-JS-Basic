const arr = [1, 40, -5, 10, 0,];
const arr1 = [15, 21, 0, -29, -2, 16];
function sortArrUp(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] > array[j]) {
                [array[i], array[j]] = [array[j], array[i]]
            }
        }
    }
    return array;
}
function sortArrDown(array) {
    const down = sortArrUp(array);
    return down.reverse();
}
console.log(`В порядке возрастания: ${sortArrUp(arr1).join(", ")}`);
console.log(`В порядке убывания: ${sortArrDown(arr).join(", ")}`);