function betterThanAverage(arr) {
    var sum = 0;
    // calculate the average
    for(let i=0; i< arr.length; i++){
        sum+= arr[i];
    }
    average = sum/ arr.length;
    var count = 0
    // count how many values are greated than the average
    for(let i=0; i< arr.length; i++){
        if(average < arr[i]){
            count ++;
        }
    }
    return count;
}
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result); // we expect back 4
