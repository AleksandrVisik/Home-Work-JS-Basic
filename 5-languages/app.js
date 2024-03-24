const userLang = prompt("Введите ваш язык (enter your language)");
switch (userLang) {
    case "ru":
        console.log("Привет!");
        break;
    case "en":
        console.log("Hello!");
        break;
    case "fr":
        console.log("Bonjour!");
        break;
    default:
        console.log("Нет такого языка");
}