const numbers = [9, 1, 3, 27, 15, -5, 13, 7];

//driver function used for display and passing values.
function displayNumbers() {
    
    //implement the four functions to return sum, avg, max and min
    let sum = sumNumbers(numbers);
    let avg = avgNumber(numbers);
    let max = maxNumber(numbers);
    let min = minNumber(numbers);

    //used for display not need to change unless you are doing only the sum function
    let msg = `Sum = ${sum}<br>Avg = ${avg.toFixed(2)}<br>Max = ${max}<br>Min = ${min}`;
    
    //display the message    
    document.getElementById("results").innerHTML = msg;
    document.getElementById("numberslist").innerHTML = numbers.toString();
}

//takes an array of numbers and returns the sum of all the numbers
function sumNumbers(numArry) {
    let result = 0;

    for (let index = 0; index < numArry.length; index++) {
        result += numArry[index];
    }

    return result;
}
//takes an array of numbers and returns the average of all the numbers
function avgNumber(numArry) {
    let result = 0;

    for (let index = 0; index < numArry.length; index++) {
        result += numArry[index];
    }

    return result / numArry.length;
}

//takes an array of numbers and returns the max number
function maxNumber(numArry) {
    let max = numArry[0];

    for (let index = 0; index < numArry.length; index++) {
        if (numArry[index] > max) {
            max = numArry[index];
        }  
    }
    return max;
}

//takes an array of numbers and returns the min number
function minNumber(numArry) {
    let min = numArry[0];
    
    for (let index = 0; index < numArry.length; index++) {
        if (numArry[index] < min) {
            min = numArry[index];
        }  
    }

    return min;
}