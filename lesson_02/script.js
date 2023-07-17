firstNumber = +prompt(`Enter a negative number`);
firstNumber = +firstNumber.toFixed(2);
console.log(firstNumber);
secondNumber = +prompt(`Enter a positive number`);
secondNumber = +secondNumber.toFixed(2);
console.log(secondNumber);
min = firstNumber;
max = secondNumber;
randomNumber = Number(Math.random() * (max - min + 1) + min);
console.log(randomNumber);
randomNumber = +randomNumber.toFixed(2);
console.log(randomNumber);
alert(`Random number is: ${randomNumber}`);
thirdNumber = +prompt(`Enter third number`);
console.log(thirdNumber);
thirdNumber = +thirdNumber.toFixed(2);
console.log(thirdNumber);
sum = randomNumber + thirdNumber;
subtraction = randomNumber - thirdNumber;
multiplication = randomNumber * thirdNumber;
division = randomNumber / thirdNumber;
console.log(sum, subtraction, multiplication, division);
document.write(<table>
    <tr>
        <thead>
            <th>Operation</th>
            <th>Expression</th>
            <th>Value</th>
        </thead>
    </tr>
    <tr>
        <th>Sum</th>
        <th>randomNumber + thirdNumber</th>
        <th>sum</th>
    </tr>
    <tr>
        <th>Subtraction</th>
        <th></th>
        <th>subtraction</th>
    </tr>
    <tr>
        <th>Multiplication</th>
        <th></th>
        <th>multiplication</th>
    </tr>
    <tr>
        <th>Division</th>
        <th></th>
        <th>division</th>
    </tr>
</table>)