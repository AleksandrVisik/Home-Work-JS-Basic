const arr = [1, 40, -5, 10, 0];

function directionArr(firstNum, secondNum, directionUp = true) {
    if (!directionUp) {
        return firstNum < secondNum;
    }
    return firstNum > secondNum;
}

function sortArrUp(array, direction) {
    const arrResult = array.slice();
    for (let i = 0; i < arrResult.length; i++) {
        for (let j = i + 1; j < arrResult.length; j++) {
            const sortArr = directionArr(arrResult[i], arrResult[j], direction)
            if (sortArr) {
                [arrResult[i], arrResult[j]] = [arrResult[j], arrResult[i]];
            }
        }
    }
    return arrResult;
}
console.log(arr); // исходный массив
console.log(sortArrUp(arr)); // по возрастанию
console.log(sortArrUp(arr, false)); // по убыванию
console.log(arr); // исходный массив после вызова функции