function countPositives(){
    var arr = [-3, -55, 10, -19, 27, -6, 2, 0, -11, -4];
    var count = 0;
    for (var i=0; i<arr.length; i++) {
        if (arr[i] >= 0) {
            count++;
        }
    }
    return count; 
}
var newCount = countPositives();
countPositives();