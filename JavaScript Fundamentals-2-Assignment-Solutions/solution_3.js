const students = [
    { name: "Mithun", marks: 95 },
    { name: "Prabir", marks: 75 },
    { name: "Alka", marks: 92 },
    { name: "Shivam", marks: 70 },
    { name: "Farman", marks: 99 },
]
function checkResults(inputName){
    for(let elements of students){
        if(elements.name == inputName){
            if(elements.marks >90){
                console.log(`Congratulations ${elements.name}! You have cleared the exam.`);
                return true;
            }
            else{
                console.log(`Sorry ! You have not cleared the exam.`);
                return true;
            }
        }
    }
    console.log("Invalid User !!!");
}


checkResults("Mithun");

checkResults("Prabir");

checkResults("Mithun S");