class Bulka{
    constructor(name, size){
        this.name = name;
        this.size = size;
        this.ingredients = [`cutlet`, `salada`, `tomato`];
        this.setAdditionalIngredients = function(ingredients){
            return this.ingredients = this.ingredients.concat(ingredients);
        }
    }
}
let Humburger = new Bulka(`Humburger`, `small`);
Humburger.setAdditionalIngredients ([`avocado`, `mushrooms`]);
let Cheeseburger = new Bulka(`Cheeseburger`, `big`);
Cheeseburger.setAdditionalIngredients([`nion`, `black pepper`]);
console.log(Humburger);
console.log(Cheeseburger);