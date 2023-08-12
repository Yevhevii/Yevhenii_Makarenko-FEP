sports = [
	['skier','⛷'],
	['snowboarder','🏂'],
	['apple','🍎'],
	['hockey','🏒'],
	['ice skate','⛸'],
	['swimmer','🏊'],
	['surfer','🏄‍'],
	['watermelon','🍉'],
	['lemon','🍋'],
	['rowboat','🚣'],
	['bicyclist','🚴‍']
];
winter_sports = sports.slice(0,5);
summer_sports = sports.slice(-6);
firstPartFruits = winter_sports.splice(2,1);
secondPartFruits = summer_sports.splice(2,2);
fruits = firstPartFruits.concat(secondPartFruits);
winterElement=[];
console.log(`*** Winter sports *** `);
for(i=0; i<winter_sports.length; i++){
    winterElement = winter_sports[i];
    winterArrey = winterElement.join(": ");
	console.log(winterArrey);
}
summerElement=[];
console.log(`*** Summer sports *** `);
for(i=0; i<summer_sports.length; i++){
    summerElement = summer_sports[i];
    summerArrey = summerElement.join(": ");
	console.log(summerArrey);
}
fruitsElement=[];
console.log(`*** Fruits *** `);
for(i=0; i<fruits.length; i++){
    fruitsElement = fruits[i];
    fruitsArrey = fruitsElement.join(": ");
	console.log(fruitsArrey);
}