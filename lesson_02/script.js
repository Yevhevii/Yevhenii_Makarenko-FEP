firstNumber = +prompt(`Enter a negative number`);
firstNumber = +firstNumber.toFixed(2);
secondNumber = +prompt(`Enter a positive number`);
secondNumber = +secondNumber.toFixed(2);
randomNumber = Number(Math.random() * (secondNumber - firstNumber + 1) + secondNumber);
randomNumber = +randomNumber.toFixed(2);
alert(`Random number is: ${randomNumber}`);
thirdNumber = +prompt(`Enter third number`);
thirdNumber = +thirdNumber.toFixed(2);
sum = randomNumber + thirdNumber;
sum = +sum.toFixed(2);
subtraction = randomNumber - thirdNumber;
subtraction = +subtraction.toFixed(2);
multiplication = randomNumber * thirdNumber;
multiplication = +multiplication.toFixed(2);
division = randomNumber / thirdNumber;
division = +division.toFixed(2);
document.write(`<table>
    <tr>
        <th class = "title">Operation</th>
        <th class = "title">Expression</th>
        <th class = "title">Value</th>
    </tr>
    <tr>
        <th class = "operation">Sum</th>
        <th>${randomNumber} + ${thirdNumber}</th>
        <th>${sum}</th>
    </tr>
    <tr>
        <th class = "operation">Subtraction</th>
        <th>${randomNumber} - ${thirdNumber}</th>
        <th>${subtraction}</th>
    </tr>
    <tr>
        <th class = "operation">Multiplication</th>
        <th>${randomNumber} * ${thirdNumber}</th>
        <th>${multiplication}</th>
    </tr>
    <tr>
        <th class = "operation">Division</th>
        <th>${randomNumber} / ${thirdNumber}</th>
        <th>${division}</th>
    </tr>
</table>`);