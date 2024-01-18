const eventDate = '2024-08-31';
function calculateRemainingDays(eventDate){
    let date = new Date(eventDate);
    let currentDate = new Date();
    let calculateDays = (date - currentDate)/(1000*60*60*24);
    let remainingDays = Math.round(calculateDays);
    return remainingDays;
}

console.log(calculateRemainingDays(eventDate));
