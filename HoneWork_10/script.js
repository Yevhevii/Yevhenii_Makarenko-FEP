const animalsList =  [
    [`turtle`,`🐢`],
    [`octopus`,`🐙`],
    [`fish`,`🐠`],
    [`flamingo`, `🦩`],
    [`penguin`, `🐧`],
];

// let array = anyArray =>{
// 	let arr = JSON.parse(JSON.stringify(anyArray));
// 	let renderList=[];
// 	for(let i=0; i<arr.length; i++){
// 		let arrItem = arr[i];
// 		renderList.push(`<p>${arrItem.join(`: `)}</p>`);
// 	}
// 	return renderList;
// }
// array(animalsList);

// renderList.forEach((animals, i) => {
// 	setTimeout(() => {
// 	  document.write(animals);
// 	}, i * 1000);
//   });
const renderItems = item => `<p>${item.join(`: `)}</p>`;
let time = 1000;
const renderItem = (list, time) => {
	list.forEach((item, index) =>{
        setTimeout(()=>document.write(renderItems(item)), ++index*time);
    })
}
renderItem(animalsList, time);