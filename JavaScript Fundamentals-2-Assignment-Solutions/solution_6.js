const productDetails = {
    name: "Apple 2020 Macbook Air Laptop",
    price: 82000,
    color: "Grey",
    hardDisk: "256 GB"
}

console.log(`Below are the product details.`)

for( let keynames of Object.keys(productDetails)){
    console.log(`${keynames} : ${productDetails[keynames]}`);
}
