function calculateTotalCartValue(){
    let amount = 0;
    for(i=0;i<arguments.length;i++){
        amount += arguments[i];
    }
    console.log(`The total cart value is ${amount}`);
}

calculateTotalCartValue(125,20,30);