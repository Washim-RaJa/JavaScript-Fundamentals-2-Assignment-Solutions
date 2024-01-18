let sentence = "please please submit your assignment on time, your assignments are important";

function wordCounter(sentence){
    let sentenceMap = new Map();
    let sentenceArr = sentence.split(" ");
    for(let word of sentenceArr){
        let cleanWord = word.toLowerCase().replace("," , "");
        if(cleanWord.length>0){
            sentenceMap.set(cleanWord,(sentenceMap.get(cleanWord)||0)+1);
        }
    }
    return sentenceMap;
}

let result = wordCounter(sentence);
console.log(result);
