const arr = [1, 40, -5, 10, 0];
function sortArrUp(array) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                [arr[i], arr[j]] = [arr[j], arr[i]]
            }
        }
    }
    return array;
}
function sortArrDown(array) {
    const down = sortArrUp(array);
    return down.reverse();
}
console.log(`В порядке возрастания: ${sortArrUp(arr).join(", ")}`);
console.log(`В порядке убывания: ${sortArrDown(arr).join(", ")}`);