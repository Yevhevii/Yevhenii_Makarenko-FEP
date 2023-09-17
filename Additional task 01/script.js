// const vegetables = [
//     {
//         name: `tomato`,
//         icon: `🍅`,
//         price: 2.3
//     },
//     {
//         name: `carrot`,
//         icon: `🥕`,
//         price: 1.5
//     },
//     {
//         name: `corn`,
//         icon: `🌽`,
//         price: 2.78,
//         season: true
//     }
// ];

const fruits = [
    {
        name: `watermelon`,
        icon: `🍉`,
        price: 7.7,
        season: true
    },
    {
        name: `cherries`,
        icon: `🍒`,
        price: 8.5,
        season: true
    },
    {
        name: `pineapple`,
        icon: `🍍`,
        price: 9.8
    }
];
// const toCapitalize = wrd => wrd[0].toUpperCase() + wrd.slice(1).toLowerCase();

//     const Product = {
//         getInfo(){
//             let info = Object
//                 .entries(this)
//                 .map(value => {
//                     if(value[0] === `price`) value[1] = this.getPrice();
//                     return value;
//                 })
//                 .map(value => {
//                     return `${toCapitalize(value[0])}: ${value[1]}`;
//                 })
//                 .join(`.\n`);
    
//             return `${info}.`;
//         },
//     getPrice(){
//         let price = this.price;
//         if(this.season) price *= this.seasonKoef;
//         return `$${price.toFixed(2)}`;
//     }
// }
// const Fruit = {
//     type: `fruit`,
//     seasonKoef: 2,
//     __proto__: Product
//   }
// const Vegetable = {
//   type: `vegetable`,
//   seasonKoef: 1.3,
//   __proto__: Product
// } 

// vegetables
//     .map(product => {
//         product.__proto__ = Vegetable;
//         return product;
//     })
//     .forEach(product => document.write(`<ul>${product.getInfo()}</ul>`));
// fruits
//     .map(product => {
//         product.__proto__ = Fruit;
//         return product;
//     })
//     .forEach(product => document.write(`<ul>${product.getInfo()}</ul>`));

const Parent = {
    getInfo(){
        return `${(this.name)}. I'm fruts.`
    }
}
let Fruits = Object.create(Parent);
Object.assign(Fruits,fruits);
console.log(Fruits);
console.log(Fruits.getInfo());