// moneySum - сумма средств
// currencyFunds - валюта средств
// targetCurrency - целевая валюта

// Курсы валют к рублю


function exchange(moneySum, currencyFunds, targetCurrency) {
    const USD = 90;
    const EUR = 100;
    const CNY = 15;
    switch (currencyFunds) {
        case "RUB":
            switch (targetCurrency) {
                case "USD":
                    return moneySum / USD;
                case "EUR":
                    return moneySum / EUR;
                case "CNY":
                    return moneySum / CNY;

                default:
                    return null;
            }
        case "USD":
            switch (targetCurrency) {
                case "RUB":
                    return moneySum * USD;
                case "EUR":
                    return moneySum * USD / EUR; // перевел в рубли по курсу, потом поделил на курс евро - рубль
                case "CNY":
                    return moneySum * USD / CNY;
                default:
                    return null
            }
        case "EUR":
            switch (targetCurrency) {
                case "RUB":
                    return moneySum * EUR;
                case "USD":
                    return moneySum * EUR / USD;
                case "CNY":
                    return moneySum * EUR / CNY;
                default:
                    return null;
            }
        case "CNY":
            switch (targetCurrency) {
                case "RUB":
                    return moneySum * CNY;
                case "USD":
                    return moneySum * CNY / USD;
                case "EUR":
                    return moneySum * CNY / EUR;
                default:
                    return null;
            }
        default:
            return null;
    }
}
console.log(exchange(1, "CNY", "EUR"))
