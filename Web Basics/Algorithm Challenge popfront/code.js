// REMOVE AND RETURN THE VALUE AT THE BEGINNING OF THE ARRAY. USING POP() //

function popFront(arr) {
    var poppedNumber = arr[0];
    for (var i=0; i<arr.length; i++) {
        arr[i] = arr[i +1];
    } 
    arr.pop();
    return [poppedNumber, arr];
}


popFront([5, 93, 22, 4]);



console.log(popFront([5, 93, 22, 4]));