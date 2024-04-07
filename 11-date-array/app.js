const dateArray = ["31-05-2022", "тест", "11/12/2023", "00/13/2022", "41/12/2023"];
const dateArray2 = ["31-04-2001", "29/02/2000", "29-02-2001", "00/00/0000", "31.11.2013", "29.02.1996", "day/month/year", "31-06-2024", "07.04.2024"];

function getDates(array, func) {
    return array.map(stringToArray).filter(func).flatMap(element => element.join("-"))
}

function stringToArray(string) {
    let day, month, year;
    if (string.includes("/")) {
        [day, month, year] = string.split("/");
    }
    if (string.includes(".")) {
        [day, month, year] = string.split(".");
    }
    else if (string.includes("-")) {
        [day, month, year] = string.split("-");
    }
    if (!day || !Number(day) || !Number(month) || !Number(year)) {
        return null;
    }
    return [day, month, year];
}

function isCorrectDate(array) {
    if (array === null) {
        return false;
    }
    [day, month, year] = array.map(Number);

    if (day < 1 || day > 31 || month < 1 || month > 12 || year === 0) {
        return false;
    }


    const LONG_MONTH_ARRAY = [1, 3, 5, 7, 8, 10, 12];// 31 день в месяце
    if (day === 31 && !LONG_MONTH_ARRAY.includes(month)) {
        return false;
    }

    const isLeapYear = (year % 4 === 0 || year % 400 === 0); // високосные года
    if (month === 2 && day === 29 && !isLeapYear) {
        return false;
    }
    return true;
}

console.log(dateArray);
const resault = getDates(dateArray, isCorrectDate);
console.log(resault);

console.log(dateArray2);
const resault2 = getDates(dateArray2, isCorrectDate);
console.log(resault2);