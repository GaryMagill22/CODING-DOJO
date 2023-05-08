function MVP(finishedHomework, hour, dayOfTheWeek){
    var reward = ''
    var finishedHomework = true;
    var reward = '';
    if (finishedHomework === true && hour < 10 ){
        reward = "latte";
        console.log(reward);
    } else if (finishedHomework === true && hour > 10 && hour <= 16){
        reward = "hot chocolate";
        console.log(reward);
    } else if (finishedHomework === true && hour > 16 && hour <= 22 && dayOfTheWeek === "Wednesday"){
        reward = "strawberry ice cream";
        console.log(reward);
    } else if (finishedHomework === true && hour > 22)
        reward = "I dont want anything other than sleep!";
        console.log(reward);
    return reward;
}
var result = MVP(true, 18, "Wednesday" );
