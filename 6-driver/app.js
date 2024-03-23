const hasLicence = true;
const age = 17;
const isDrunk = false;
const canGo = hasLicence && age >= 18 && !isDrunk;
console.log(`Водитель может ехать: ${canGo ? "Может" : "Не может"}`);