// Function to Get Number Information (including Invalid Input)
function getNumberInfo() {
    // Set Up Variable
    let txt = "";
    // Get the Value of the Input Field
    let num = document.getElementById("mynumber").value;
    // Check if input is valid
    if (isNaN(num) || num.toString().length == 0 || num<2 || num>9 || !Number.isInteger(Number(num))) {
        txt += `Invalid Input.  Please enter a whole number between 2 and 9.`;
    } else {
        // Remove any leading zeros
        num = parseInt(num);
        txt += `You have requested ${num} digits.<p>`;
        txt += `Largest 1 to ${num} pandigital ${num}-digit number is ${pandigitalMultiples(num)}.`;
    }

    // Display Information in the Browser
    document.getElementById("numinfo").innerHTML = txt;
}