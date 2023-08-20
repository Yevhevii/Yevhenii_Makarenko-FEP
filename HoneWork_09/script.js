const products = [
	['apple',10],
	['banana',8],
	['mango',20],
	['grape',18]
];
let summerKoef = 0.8;
let winterKoef = 2;

function summerValue(value){
	return value*summerKoef;
}

function winterValue(value){
	return value*winterKoef;
}

function getPrice(product, seasonFunc){
	copiedProducts = JSON.parse(JSON.stringify(product));
	let sum = 0;
	for(i=0; i< copiedProducts.length; i++){
		
	sum += typeof seasonFunc === `function`
		? seasonFunc(copiedProducts[i][1])
		: copiedProducts[i][1];
	}

	return sum;
}
let productPrice = getPrice(products);
let productSummerPrice = getPrice(products,summerValue);
let producWintertPrice = getPrice(products,winterValue);
console.log(productPrice);
console.log(productSummerPrice);
console.log(producWintertPrice);