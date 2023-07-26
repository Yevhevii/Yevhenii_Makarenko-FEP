debugger
question = confirm(`Tell me three most important words`);
if (question){
    firstWord = prompt(`Enter word#1`);
    while(firstWord === null || firstWord.replaceAll(" ","") === ""){
        firstWord = prompt(`Enter word#1`);
    }
    decorFirstWord = prompt(`Choose type of transformation for ${firstWord}: uppercase, lowercase, capitalize`);
    while(decorFirstWord === null 
        || decorFirstWord.replaceAll(" ","") === "" 
        || decorFirstWord !== "uppercase"
        && decorFirstWord !== "lowercase"
        && decorFirstWord !== "capitalize"
        ){
        decorFirstWord = prompt(`Choose type of transformation for ${firstWord}: uppercase, lowercase, capitalize`);
    }
    if (decorFirstWord === "uppercase"){
        decorFirstWord = firstWord.toUpperCase()
    } else if (decorFirstWord === "lowercase"){
        decorFirstWord = firstWord.toLowerCase()
    } else if (decorFirstWord === "capitalize"){
        decorFirstWord = firstWord[0].toUpperCase() + firstWord.slice(1).toLowerCase();
    }
    secondWord = prompt(`Enter word#2`);
    while(secondWord === null || secondWord.replaceAll(" ","") === ""){
        secondWord = prompt(`Enter word#2`);
    }
    decorSecondWord = prompt(`Choose type of transformation for ${secondWord}: uppercase, lowercase, capitalize`);
    while(decorSecondWord === null 
        || decorSecondWord.replaceAll(" ","") === "" 
        || decorSecondWord !== "uppercase"
        && decorSecondWord !== "lowercase"
        && decorSecondWord !== "capitalize"
        ){
            decorSecondWord = prompt(`Choose type of transformation for ${secondWord}: uppercase, lowercase, capitalize`);
    }
    if (decorSecondWord === "uppercase"){
        decorSecondWord = secondWord.toUpperCase()
    } else if (decorSecondWord === "lowercase"){
        decorSecondWord = secondWord.toLowerCase()
    } else if (decorSecondWord === "capitalize"){
        decorSecondWord = secondWord[0].toUpperCase() + secondWord.slice(1).toLowerCase();
    }
    thirdWord = prompt(`Enter word#2`);
    while(thirdWord === null || thirdWord.replaceAll(" ","") === ""){
        thirdWord = prompt(`Enter word#2`);
    }
    decorThirdWord = prompt(`Choose type of transformation for ${thirdWord}: uppercase, lowercase, capitalize`);
    while(decorThirdWord === null 
        || decorThirdWord.replaceAll(" ","") === "" 
        || decorThirdWord !== "uppercase"
        && decorThirdWord !== "lowercase"
        && decorThirdWord !== "capitalize"
        ){
            decorThirdWord = prompt(`Choose type of transformation for ${thirdWord}: uppercase, lowercase, capitalize`);
    }
    if (decorThirdWord === "uppercase"){
        decorThirdWord = thirdWord.toUpperCase()
    } else if (decorThirdWord === "lowercase"){
        decorThirdWord = thirdWord.toLowerCase()
    } else if (decorThirdWord === "capitalize"){
        decorThirdWord = thirdWord[0].toUpperCase() + thirdWord.slice(1).toLowerCase();
    }
    console.log(`${decorFirstWord} ${decorSecondWord} ${decorThirdWord}!`);
}