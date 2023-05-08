
/* function that passes two variables thru it to figure out number how many pieces of cake i will have left after diving my we pieces by 5 people*/



function howMuchLeftOverCake(numberOfPieces, numberOfPeople) {
    
    var leftOverCake = numberOfPieces % numberOfPeople;
    console.log(leftOverCake);

    if (leftOverCake == 0) {
        console.log("No leftovers for you!");
        if (leftOverCake <= 2) {
            console.log("You have some leftovers");
        }
        else if (leftOverCake >= 3 && leftOverCake <= 5) {
            console.log("You have leftovers to share")
        }
        else if (leftOverCake > 5) {
            console.log("Hold another party!")
        }

    }
}

howMuchLeftOverCake(12,5);