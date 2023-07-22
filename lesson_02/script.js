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
<thead>
    <tr>
        <th>Operation</th>
        <th>Expression</th>
        <th>Value</th>
    </tr>
</thead>
<tbody>
    <tr class = "tbody">
        <td class = "operation">Sum</td>
        <td>${randomNumber} + ${thirdNumber}</td>
        <td>${sum}</td>
    </tr>
    <tr class = "tbody">
        <td class = "operation">Subtraction</td>
        <td>${randomNumber} - ${thirdNumber}</td>
        <td>${subtraction}</td>
    </tr>
    <tr class = "tbody">
        <td class = "operation">Multiplication</td>
        <td>${randomNumber} * ${thirdNumber}</td>
        <td>${multiplication}</td>
    </tr>
    <tr class = "tbody">
        <td class = "operation">Division</td>
        <td>${randomNumber} / ${thirdNumber}</td>
        <td>${division}</td>
    </tr>
</tbody>
</table>`);