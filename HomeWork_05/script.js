sizeArray = +prompt(`Enter the length of the array from 2 to 10`);
debugger
while(isNaN(sizeArray) 
|| sizeArray === null 
|| sizeArray.replaceAll(" ","") === ""){
    sizeArray = prompt(`Enter the length of the array from 2 to 10`);
}
console.log(sizeArray);
// if (sizeArray<0) sizeArray = Math.abs(sizeArray);
// sizeArray = Math.round(sizeArray);
// while (isNaN(sizeArray) 
//     || sizeArray === null 
//     || sizeArray.replaceAll(" ","") === ""
//     || sizeArray <2 
//     || sizeArray >10){
//     sizeArray = prompt(`Enter the length of the array from 2 to 10`);
// }
// console.log(sizeArray);