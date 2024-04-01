const arr = [1, 40, -5, 10, 0];

function directionArr(firstNum, secondNum, directionUp = true) {
    if (!directionUp) {
        return firstNum < secondNum;
    }
    return firstNum > secondNum;
}

function sortArrUp(array, direction) {
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            const sortArr = directionArr(array[i], array[j], direction)
            if (sortArr) {
                [array[i], array[j]] = [array[j], array[i]];
            }
        }
    }
    return array;
}
console.log(arr); // исходный массив
console.log(sortArrUp(arr)); // по возрастанию
console.log(sortArrUp(arr, false)); // по убыванию