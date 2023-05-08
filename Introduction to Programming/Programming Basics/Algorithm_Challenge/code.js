function minToFront(arr){
    var min = arr[0];
    var temp = arr[0];
    for (var i=1; i<arr.length; i++) {
        if (arr[i] < min) {
            temp = min;
            min = arr[i];
            arr[0] = min;
            arr[i] = temp;
            
        
    }
    
}
return arr;
}

console.log(minToFront([5, 93, 22, 10, 4, 56]));