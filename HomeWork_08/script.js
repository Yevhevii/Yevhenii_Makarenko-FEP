animals = [
	['🐭','mouse','Jerry'],
	['🐹','hamster','Biscuit'],
	['🐰','rabbit','Bugs'],
	['🦊','fox','Mrs. Fox'],
	['🐻','bear','Paddington']
];
food = [
	['🍎','apple',10],
	['🍐','pear',12],
	['🍊','tangerine',15],
	['🍋','lemon',5],
	['🍌','banana',7]
];

function getInfo(anyArrey,anyHeding) {
    anyTitle = `<h3>${anyHeding}</h3>`;
    trs = [];
for(i=0; i<anyArrey.length; i++){
    anyItem = anyArrey[i];
    tds = [];
    for(j=0; j<anyItem.length; j++){
        tds.push(`<td>${anyItem[j]}</td>`)
    }
    tr = `<tr>${tds.join(``)}</tr>`
    trs.push(tr);
    }
    return `<h3>${anyTitle}</h3>
    <table>${trs.join(``)}</table>`;
}
animalsTable = getInfo(animals, `Animals info`);
animalsInfo = `<div>${animalsTable}</div>`;
foodsTable = getInfo(food, `Food info`);
foodsInfo = `<div>${foodsTable}</div>`;

document.write(`<div class="table-info">
       ${animalsInfo}
       ${foodsInfo}
</div>`);