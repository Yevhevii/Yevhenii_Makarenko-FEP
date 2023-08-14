animals = [
	['🐭','mouse','Jerry'],
	['🐹','hamster','Biscuit'],
	['🐰','rabbit','Bugs'],
	['🦊','fox','Mrs. Fox'],
	['🐻','bear','Paddington']
];

function getInfo(animalsArrey) {
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
    return `<table>${trs.join(``)}</table>`;
}
animalsTable = getInfo(animals);
animalsTitle = `<h3>Animals info</h3>`;
animalsInfo = `<div class="table-case">
<h3>${animalsTitle}</h3>
<div>${animalsTable}</div>
</div>`

food = [
	['🍎','apple',10],
	['🍐','pear',12],
	['🍊','tangerine',15],
	['🍋','lemon',5],
	['🍌','banana',7]
];

function getFruits(fruitsArrey) {
    trs = [];
for(i=0; i<fruitsArrey.length; i++){
    fruitsItem = fruitsArrey[i];
    tds = [];
    for(j=0; j<fruitsItem.length; j++){
        tds.push(`<td>${fruitsItem[j]}</td>`)
    }
    tr = `<tr>${tds.join(``)}</tr>`
    trs.push(tr);
    }
    return `<table>${trs.join(``)}</table>`;
}
fruitsTable = getFruits(food);
fruitsTitle = `<h3>Food info</h3>`;
fruitsInfo = `<div class="table-case">
<h3>${fruitsTitle}</h3>
<div>${fruitsTable}</div>
</div>`
document.write(`<div class="table-info">
       ${animalsInfo}
       ${fruitsInfo}
</div>`);