animals = [
	['🐭','mouse','Jerry'],
	['🐹','hamster','Biscuit'],
	['🐰','rabbit','Bugs'],
	['🦊','fox','Mrs. Fox'],
	['🐻','bear','Paddington']
];

function getInfo(animalsArrey,animalsHeding) {
    animalsTitle = `<h3>${animalsHeding}</h3>`;
    trs = [];
for(i=0; i<animalsArrey.length; i++){
    animalsItem = animalsArrey[i];
    tds = [];
    for(j=0; j<animalsItem.length; j++){
        tds.push(`<td>${animalsItem[j]}</td>`)
    }
    tr = `<tr>${tds.join(``)}</tr>`
    trs.push(tr);
    }
    return `<h3>${animalsTitle}</h3>
    <table>${trs.join(``)}</table>`;
}
animalsTable = getInfo(animals, `Animals info`);
animalsInfo = `<div>${animalsTable}</div>`

food = [
	['🍎','apple',10],
	['🍐','pear',12],
	['🍊','tangerine',15],
	['🍋','lemon',5],
	['🍌','banana',7]
];

function getFruits(foodsArrey, foodsHeding) {
    foodsTitle = `<h3>${foodsHeding}</h3>`;
    trs = [];
for(i=0; i<foodsArrey.length; i++){
    foodsItem = foodsArrey[i];
    tds = [];
    for(j=0; j<foodsItem.length; j++){
        tds.push(`<td>${foodsItem[j]}</td>`)
    }
    tr = `<tr>${tds.join(``)}</tr>`
    trs.push(tr);
    }
    return `<h3>${foodsTitle}</h3>
    <table>${trs.join(``)}</table>`;
}
foodsTable = getFruits(food, `Food info`);
foodsInfo = `<div>${foodsTable}</div>`

document.write(`<div class="table-info">
       ${animalsInfo}
       ${foodsInfo}
</div>`);