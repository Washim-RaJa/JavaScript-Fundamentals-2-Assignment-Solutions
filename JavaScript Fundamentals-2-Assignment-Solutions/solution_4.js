const products = [
    {name: "Laptop" , price: 120000},
    {name: "Mobile" , price: 70000},
    {name: "Laptop Bag" , price: 20000},
    {name: "Watch" , price: 20000},
    {name: "Mobile Charger" , price: 1500},
];

let maxAmount = {name: "", price: 0};
let minAmount = {name: "", price: Number.MAX_VALUE};

(function (){
    for(let elements of products){
        if(elements.price>maxAmount.price){
            maxAmount = elements;
        }
        if(elements.price < minAmount.price){
            minAmount = elements;
        }
    }
})
();

console.log(`The product with maximum amount is ${maxAmount.name} which is priced at Rs. ${maxAmount.price}`);
console.log(`The product with minimum ammount is ${minAmount.name} which is priced at Rs. ${minAmount.price}`);
