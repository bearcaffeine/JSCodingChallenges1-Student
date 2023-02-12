//driver function used for display and passing values.
function convertIt() {

    //get the user entered value
    let kmValue = parseFloat(document.getElementById("kmInputValue").value);
    let faValue = parseFloat(document.getElementById("faInputValue").value);

    if (!isNaN(kmValue) ) {
        //call your function to convert the vm value to miles
        let milesValue = convertToKm(kmValue);

        //display your value 
        document.getElementById("results").innerHTML = `${kmValue} km = ${milesValue.toFixed(2)} miles`;
    }

    if (!isNaN(faValue) ) {
        //call your function to convert the vm value to miles
        let celsiusValue = convertToFa(faValue);

        //display your value 
        document.getElementById("resultsFa").innerHTML = `${faValue} fahrenheit = ${celsiusValue.toFixed(2)} celsius`;
    }

}

//takes an array of strings and returns the longest one. 
function convertToKm(kmValue) {
    let milesValue = 0;

    milesValue = (kmValue * 0.6214);

    return milesValue;
}

function convertToFa(faValue) {
    let celsiusValue = 0;

    celsiusValue = (faValue - 32) * 0.5556;

    return celsiusValue;
}