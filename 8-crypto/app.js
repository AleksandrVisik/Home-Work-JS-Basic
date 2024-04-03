
function crypto(password) {
    // password.split("");
    // const halfPassword = Number(password.length) / 2;
    const halfPassword = password.length / 2;
    const leftPart = password.slice(0, halfPassword);
    const leftPartPassword = leftPart.split("").reverse();
    const rightPart = password.slice(halfPassword);
    const rightPartPassword = rightPart.split("").reverse();
    const cryptoPassword = leftPartPassword.concat(rightPartPassword);

    //console.log(password.split(""));
    // console.log(typeof halfPassword);
    // console.log(halfPassword);
    // console.log(typeof leftPart);
    // console.log(leftPartPassword);
    // console.log(rightPartPassword);

    return cryptoPassword.join("");
}

function check(cryptoPassword, userPassword) {

    if (userPassword.length != cryptoPassword.length) {
        // console.log("No")
        return false;
    }
    crypto(cryptoPassword);
    // const halfCryptoPassword = cryptoPassword.length / 2;
    // const leftCryptoPart = cryptoPassword.slice(0, halfCryptoPassword);
    // const leftPartCryptoPassword = leftCryptoPart.split("").reverse();
    // const rightCriptoPart = cryptoPassword.slice(halfCryptoPassword);
    // const rightPartCryptoPassword = rightCriptoPart.split("").reverse();
    // const unCryptoPassword = leftPartCryptoPassword.concat(rightPartCryptoPassword).join("");
    // console.log(leftPartCryptoPassword);
    // console.log(rightPartCryptoPassword);
    // console.log(unCryptoPassword);
    return cryptoPassword === crypto(userPassword) && crypto(cryptoPassword) === userPassword;
}
const passphrase = "purpleschpool";
const secret = crypto(passphrase);

console.log(`Пароль пользователя: ${passphrase}`);
console.log(`Секретный пароль: ${secret}`);
console.log(`Пароли соответствуют: ${check(secret, passphrase)}`);
console.log(`Пароли соответствуют: ${check(secret, "pass")}`); // false