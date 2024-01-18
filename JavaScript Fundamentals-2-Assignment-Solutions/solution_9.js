function uniqueCharactersCheck(username){
    let usernameLowerCase = username.toLowerCase()
    let usernameArr = usernameLowerCase.split("");
    let usernameSet  = new Set(usernameArr);
    if(usernameArr.length == usernameSet.size){
        console.log(`The input string contains unique characters.`);
    }
    else{
        console.log(`The input contains duplicates.`);
    }
}

uniqueCharactersCheck("mithun");

uniqueCharactersCheck("anurag");
