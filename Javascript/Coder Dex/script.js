


// FUNCTION TO CAPTURE EACH KEYSTROKE USER INPUTS IN TEXTBOX //

var cardsDiv = document.querySelector("#cards")
var currentUsername = "";

function getUsername(element){
    console.log(element.value);
    currentUsername = element.value;
}

// CREATES NEW CARDS WITH USER INPUT ( WHEN CLICKS GO) //

function makeCoderCard (data) {
    var res =  `<div class="card">
                    <img src="${data.avatar_url}" alt="${data.login}">
                    <div class="flex-1">
                    <h3>${data.login} - ${data.name}</h3>
                    <p>Location: ${data.location}</p>
                    <p>Repositories: ${data.public_repos}</p>
                    <p>Twitter: ${data.twitter_username}</p>
                    </div>
                </div>`
    return res;
}

// LINKS API TO THIS SEARCH BUTTON TO FETCH DATA (JSON FORMAT)// 

async function search() {
    var response = await fetch("https://api.github.com/users/" + currentUsername);
    var coderData = await response.json();
    console.log(coderData);
    cardsDiv.innerHTML = makeCoderCard(coderData) + cardsDiv.innerHTML;

    //ADDS MORE CARDS ON TOP OF WHAT IS ALREADY THERE //
}

//trying to remove text "No one here yet" when GO button is pushed //

function disappear() {
    var textToRemove = document.querySelector('.text');
    remove(textToRemove);
}




/* turquoise-hexagon 
apoorv74 
brendanmaw
seanfaze
matthewmckeon
*/