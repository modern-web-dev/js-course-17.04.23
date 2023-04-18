const myElements = [1, new Date(), 'Marek', false, true, {name: 'Marek'}, a => -a];
let myNumbers = [1, 45, 67, 77, 23, 45];


let sum = 0;
for (let i = 0; i < myNumbers.length; i++) {
    const taxedValue = addTaxOf(5)(myNumbers[i]);
    const onlyImportantValues = onlyImportantValuesWithThreshold(30);
    if (onlyImportantValues(taxedValue)) {
        sum = calculateSum(sum, taxedValue);
    }
}
console.log(sum);
const importanceThreshold = 30;
const calculatedSum = myNumbers
    .map(addTaxOf(5))
    .filter(onlyImportantValuesWithThreshold(importanceThreshold))
    .reduce(calculateSum);

console.log(calculatedSum);
console.log(add(1, 2, 4, 5, 6, 666, 6));

function calculateSum(acc, currentValue) {
    return acc + currentValue;
}

// const importanceThreshold = 30;
function onlyImportantValuesWithThreshold(importanceThreshold) {
    return function (value) {
        return value > importanceThreshold;
    }
}

function addTaxOf(taxValue) {
    return function addTax(value) {
        return value + taxValue;
    }
}

function add() {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
}

