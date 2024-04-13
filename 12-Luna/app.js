const userCardNumber = "4561-1213-4367-2612";
const userCardNumber2 = "4561-1213-4367-2611";
const userCardNumber3 = "45999361-1213-4367-2612";
const userCardNumber4 = "45ф61-1вп213-4367-2612";


function checkCardNumberLuna(cardNumber) {
    cardNumber = cardNumber.replaceAll("-", "").split("").map((num) => Number(num))

    if (cardNumber.includes(NaN) || cardNumber.length > 16) {
        return "Это не номер карты"
    }

    for (let i = 0; i < cardNumber.length; i = i + 2) {
        cardNumber[i] = cardNumber[i] * 2 > 9 ? cardNumber[i] * 2 - 9 : cardNumber[i] * 2;
    }
    const sum = cardNumber.reduce((total, element) => total + element);
    return sum % 10 === 0 ? "Корректный номер карты" : "Некорректный номер карты"
}


console.log(checkCardNumberLuna(userCardNumber))
console.log(checkCardNumberLuna(userCardNumber2))
console.log(checkCardNumberLuna(userCardNumber3))
console.log(checkCardNumberLuna(userCardNumber4))