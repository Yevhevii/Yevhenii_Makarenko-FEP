const animalsList =  [
    [`turtle`,`🐢`],
    [`octopus`,`🐙`],
    [`fish`,`🐠`],
    [`flamingo`, `🦩`],
    [`penguin`, `🐧`],
];

let array = anyArray =>{
	let arr = JSON.parse(JSON.stringify(anyArray));
	let renderList=[];
	for(let i=0; i<arr.length; i++){
		let arrItem = arr[i];
		renderList.push(`<p>${arrItem.join(`: `)}</p>`);
	}
	return renderList;
}
array(animalsList);

renderList.forEach((animals, i) => {
	setTimeout(() => {
	  document.write(animals);
	}, i * 1000);
  });