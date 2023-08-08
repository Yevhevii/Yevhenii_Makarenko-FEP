colors = ['red',`orange`,`yellow`,`green`,`light blue`,`blue`,`violet`];
hero = ['Ivan'];
native = ['York','Of'];
destination = ['Poltava','In'];
rainbow = destination.concat(native, hero).reverse();
nameHero = `Richard`;
rainbow[0] = nameHero;
rainbow.splice(3,0,'Gave','Battle');
rainbow.pop();
rainbow.push(`Vain`);
console.log(rainbow);
for(i=0; i<rainbow.length; i++){
    rainbow[i]=`<div class = "color ${colors[i]}"><div class ="text">${rainbow[i]}</div></div>`
}
console.log(rainbow);
document.write(`<div class="colors-case">${rainbow.join(" ")}</div>`);