//SNIPPET 1//

var contactInfo = ["Paula", "Smith", "1234 Main Street", "St. Louis", "MO", 12345];
console.log(contactInfo);

output -  ["Paula", "Smith", "1234 Main Street", "St. Louis", "MO", 12345]

//SNIPPET 2//

var produce = ["apples", "oranges"];
var frozen = ["broccoli", "ice cream"];
frozen.push("hashbrowns");
console.log(frozen);


output - ["broccoli", "ice cream", "hashbrowns"]

//SNIPPET 3//

var movieLibrary = ["Bambi", "E.T.", "Toy Story"];
movieLibrary.push("Zorro"); //  -->["Bambi", "E.T.", "Toy Story", "Zorro"]  //
movieLibrary[1] = "Beetlejuice";
console.log(movieLibrary);

output - ["Bambi", "Beetlejuice", "Toy Story", "Zorro"] 
