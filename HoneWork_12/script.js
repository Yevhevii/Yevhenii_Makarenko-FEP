const PROMO = `PATRON`;

const PRODUCTS = [
    {
        id: 1,
        title: "iPhone 9",
        price: 549,
        discountPercentage: 12.96,
        rating: 4.69
    },
    {
        id: 2,
        title: "iPhone X",
        price: 899,
        discountPercentage: 17.94,
        rating: 4.44
    },
    {
        id: 3,
        title: "Samsung Universe 9",
        price: 1249,
        discountPercentage: 15.46,
        rating: 4.09
    },
    {
        id: 4,
        title: "OPPOF19",
        price: 280,
        discountPercentage: 17.91,
        rating: 4.3
    },
    {
        id: 5,
        title: "Huawei P30",
        price: 499,
        discountPercentage: 10.58,
        rating: 4.09
    },
    {
        id: 6,
        title: "MacBook Pro",
        price: 1749,
        discountPercentage: 11.02,
        rating: 4.57
    },
    {
        id: 7,
        title: "Samsung Galaxy Book",
        price: 1499,
        discountPercentage: 4.15,
        rating: 4.25
    }
];

let userByPromo = prompt(`Enter ptomo:`,`P AT R ON`);
if (userByPromo !== null && userByPromo.replaceAll(" ","") !== "" ) userByPromo = userByPromo.replaceAll(" ","").toUpperCase();
const PROMO_ACTIVE = userByPromo === PROMO;

function compareNumeric(a, b) {
    if (a.rating > b.rating) return 1;
    if (a.rating == b.rating) return 0;
    if (a.rating < b.rating) return -1;
  };
const sortProductsRating = confirm(`Do you need to sort the product by rating?`);

const PRODUCTS_TITLE =  [`Product title`, `Product price`, `Product discount percentage`, `Product rating`];
const getThead = arr => 
    `<thead>
        <tr>
            <th>${arr.join(`</th><th>`)}</th>
        </tr>
    </thead>`;

const getTbody = arr => {
    let Trs = arr.map(item => {
        return `<tr>
                <td>${item.title}</td>
                <td>${item.price}$</td>
                <td>${item.discountPercentage}%</td>
                <td>${item.rating}</td>
                </td>
            </tr>`
    });
    return `<tbody>
    ${Trs.join(``)}
    </tbody>`
};
// debugger
const getFullPrice = (products, promo) => (
    products.reduce((currentValue, item) => {
        // debugger
        if(promo){
            const discountProduct = item.price - ((item.price * item.discountPercentage)/100) + currentValue;
            return +discountProduct.toFixed(2);
        } else return currentValue + item.price;
    }, 0)
);

const getTfoot = (products, promo)=>{
    return ` <tfoot>
    <tr>
        <td colspan="${products.length-1}">Final price: ${getFullPrice(products, promo)}$</td>
    </tr>
</tfoot>`
};

const renderProductsTable = (products, promo, ratingSort) => {
    let coryProducts = JSON.parse(JSON.stringify(products));
    if (ratingSort) coryProducts.sort(compareNumeric).reverse();
    document.write(
        `<table>
        ${getThead(PRODUCTS_TITLE)}
        ${getTbody(coryProducts)}
        ${getTfoot(coryProducts, promo)}
        </table>`
    )
};
renderProductsTable(PRODUCTS, PROMO_ACTIVE, sortProductsRating);