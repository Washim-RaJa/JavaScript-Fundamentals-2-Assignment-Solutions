let users = ["Mithun","Washim","RaJa","Masum","Alka","Farman"];

function isUserPresent(inputName){
    if(users.includes(inputName)){
        console.log(`Yes, ${inputName} is a valid user.`)
    }
    else{
        console.log(`No, ${inputName} is not a valid user.`)
    }
}
isUserPresent("Mithun");

isUserPresent("Someone");