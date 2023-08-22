const animalsList =  [
    [`turtle`,`🐢`],
    [`octopus`,`🐙`],
    [`fish`,`🐠`],
    [`flamingo`, `🦩`],
    [`penguin`, `🐧`],
];

let array = anyArray =>{
	arr = JSON.parse(JSON.stringify(anyArray));
	renderList=[];
	for(i=0; i<arr.length; i++){
		arrItem = arr[i];
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