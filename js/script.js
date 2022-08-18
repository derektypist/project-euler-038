// Function to Get Number Information (including Invalid Input)
function getNumberInfo() {
    // Set Up Variable
    let txt = "";
    // Get the Value of the Input Field
    let num = document.getElementById("mynumber").value;
    // Check if input is valid
    if (isNaN(num) || num.toString().length == 0 || num < 2 || num > 9 || !Number.isInteger(Number(num))) {
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

/*
    Function to Return the largest 1 to k pandigital k-digit number that can
    be formed as the concatenated product of an integer with (1,2,...n)
    where n is greater than 1
    pandigitalMultiples(8) returns 78156234
    pandigitalMultiples(9) returns 932718654
*/
function pandigitalMultiples(k) {
    function getKDigitConcatenatedProduct(num, k) {
        let concatenatedProduct = num.toString();
        for (let i = 2; concatenatedProduct.length < k; i++) {
            concatenatedProduct += num * i;
        }
        return concatenatedProduct.length === k ? concatenatedProduct : false;
    }

    function is1toKPandigital(num, k) {
        const numStr = num.toString();
        if (numStr.length !== k) return false;
        for (let i = k; i > 0; i--) {
            if (numStr.indexOf(i.toString()) === -1) return false;
        }
        return true;
    }

    let largestNum = 0;
    for (let i = 10**Math.floor(k / 2) + 1; i--) {
        const concatenatedProduct = getKDigitConcatenatedProduct(i, k);
        if (is1toKPandigital(concatenatedProduct, k)) {
            const number = parseInt(concatenatedProduct, 10);
            if (number > largestNum) largestNum = number;
        }
    }
    return largestNum;
}

// Function to Clear Information
function clearInfo() {
    let txt = "";
    document.getElementById("numinfo").innerHTML = txt;
}