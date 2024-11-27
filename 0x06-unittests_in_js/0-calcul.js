function calculateNumber(a, b) {
    const number1 = Number(a);
    const number2 = Number(b);
    if (number1 === undefined || number2 === undefined){
        throw new Error("One of the args are not an int and can't be converted");
    }
  return Math.round(number1) + Math.round(number2);
}

module.exports = calculateNumber;
