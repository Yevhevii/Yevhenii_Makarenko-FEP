kindOfBurger = prompt(`Choose your: hamburger or cheeseburger?`);
hamburger = 10;
cheeseburger = 15;
menu = `<ul>`;
if (kindOfBurger === "cheeseburger"){
    finalChek = cheeseburger;
    additionalCheese = confirm(`Would you like to add double cheese?`);
    menu = `<li class = "list">Bulka 🍔: cheeseburger</li>`;
    if (additionalCheese){
        doubleCheese = 5;
        finalChek += doubleCheese;
    }
} else {
    finalChek = hamburger;
    menu = `<li class = "list">Bulka 🍔: hamburger</li>`;
}

questionPotato = confirm(`Would you like potato?`);
smallPotato = 10;
middlePotato = 15;
bigPotato = 20;
if (questionPotato){
    potatoSize = prompt(`Choose potato size: small/middle/big :`);
    if (potatoSize === "middle"){
        finalChek += middlePotato;
        menu += `<li class = "list">Potato 🍟: middle</li>`;
        } else if (potatoSize === "big"){
            finalChek += bigPotato;
            menu += `<li class = "list">Potato 🍟: big</li>`;
        } else {
            finalChek += smallPotato;
            menu += `<li class = "list">Potato 🍟: small</li>`;
        }
}

questionSause = confirm(`Would you like sauce?`);
ketchup = 2;
mayonnaise = 3;
if (questionSause){
    chooseSause = prompt(`Choose sauce: ketchup/mayonnaise:`);
    if (chooseSause === "mayonnaise"){
            finalChek += mayonnaise;
            menu += `<li class = "list">Sauce 🧂: mayonnaise</li>`;
        } else {
            finalChek += ketchup;
            menu += `<li class = "list">Sauce 🧂: ketchup</li>`;
        }
}
document.write(`<h2>Your order:</h2>
${menu}</ul>

<p>Price: $${finalChek}</p>`);


// kindOfBurger = prompt(`Choose your: hamburger or cheeseburger?`);
// hamburger = 10;
// cheeseburger = 15;
// if (kindOfBurger === null
//     || kindOfBurger.replaceAll(" ","") === ""
//     || kindOfBurger === "hamburger"
//     || kindOfBurger !== "cheeseburger"
//     ){
//     finalChek = hamburger;
// } else if (kindOfBurger === "cheeseburger"){
//     finalChek = cheeseburger;
//     additionalCheese = confirm(`Would you like to add double cheese?`);
//     if (additionalCheese){
//         doubleCheese = 5;
//         finalChek += doubleCheese;
//     }
// }

// questionPotato = confirm(`Would you like potato?`);
// smallPotato = 10;
// middlePotato = 15;
// bigPotato = 20;
// if (questionPotato){
//     potatoSize = prompt(`Choose potato size: small/middle/big :`);
//     if (potatoSize === null
//         || potatoSize.replaceAll(" ","") === ""
//         || potatoSize === "small"
//         || potatoSize !== "middle"
//         && potatoSize !== "big"){
//             finalChek += smallPotato;
//         } else if (potatoSize === "middle"){
//             finalChek += middlePotato;
//         } else if (potatoSize === "big"){
//             finalChek += bigPotato;
//         }
// }

// questionSause = confirm(`Would you like sauce?`);
// ketchup = 2;
// mayonnaise = 3;
// if (questionSause){
//     chooseSause = prompt(`Choose sauce: ketchup/mayonnaise:`);
//     if (chooseSause === null
//         || chooseSause.replaceAll(" ","") === ""
//         || chooseSause === "ketchup"
//         || chooseSause !== "mayonnaise"){
//             finalChek += ketchup;
//         } else if (chooseSause === "mayonnaise"){
//             finalChek += mayonnaise;
//         }
// }
// console.log(`${finalChek}$`);