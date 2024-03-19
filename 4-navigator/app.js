//адрес назначение
const addressLat = 110;
const adressLong = 40;
// текущая позиция
const positionLat = 10;
const positionLong = 10;
//решение
const distance = ((addressLat - positionLat) ** 2 + (adressLong - positionLong) ** 2) ** 0.5;
console.log(distance);