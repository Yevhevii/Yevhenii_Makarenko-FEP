sizeArray = Math.abs(Math.round(+prompt(`Enter the length of the array from 2 to 10`)));
while(isNaN(sizeArray) 
|| sizeArray === null
|| sizeArray < 2
|| sizeArray >  10){
    sizeArray = Math.abs(Math.round(+prompt(`Enter the length of the array from 2 to 10`)));
}
arr = new Array(+`${sizeArray}`);
minRandom = -10;
maxRandom = 10;
for(i=0; i<arr.length; i++){
    arr[i] = Math.floor(Math.random() * (maxRandom - minRandom + 1)) + minRandom;
}
for(i=1, min=max=arr[0]; i<arr.length; i++){
currentElement = arr[i];
if(currentElement < min) min = currentElement;
if(currentElement > max) max = currentElement;
}
for(i=0, sum = 0; i<arr.length; i++) {sum+=arr[i];}
console.log(arr);
console.log(`Min element is ${min}`);
console.log(`Max element is ${max}`);
console.log(`Sum of arr elements is ${sum}`);