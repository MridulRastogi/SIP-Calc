function formatIndianNumber(number) {
    let numStr = number.toString();
    let lastThreeDigits = numStr.slice(-3); // Get the last 3 digits
    let remainingDigits = numStr.slice(0, numStr.length - 3); // Get the remaining digits

    // Add commas every 2 digits in the remaining part of the number
    remainingDigits = remainingDigits.replace(/\B(?=(\d{2})+(?!\d))/g, ",");

    // Combine the last three digits and the formatted remaining part
    return remainingDigits + "," + lastThreeDigits;
}

function updateResults() {
    // Get input values
    var investment = parseFloat(document.getElementById("investment").value);
    var interest = parseFloat(document.getElementById("interest").value);
    var time = parseFloat(document.getElementById("time").value);

    // Check if inputs are valid
    if (isNaN(investment) || isNaN(interest) || isNaN(time) || investment <= 0 || interest <= 0 || time <= 0) {
        // Clear the results if input is invalid
        document.getElementById("total-investment").textContent = "0";
        document.getElementById("final-amount").textContent = "0";
        document.getElementById("amount-gained").textContent = "0";
        return;
    }

    // Calculate the final amount using the SIP formula
    var finalAmount = (investment * (Math.pow((1 + ((interest / 100) / 12)), time * 12) - 1)) / ((interest / 100) / 12);

    // Total Investment
    var totalInvestment = investment * time * 12;

    // Amount Gained
    var amountGained = finalAmount - totalInvestment;

    // Update the results on the page
    document.getElementById("total-investment").textContent = formatIndianNumber(Math.floor(totalInvestment));
    document.getElementById("final-amount").textContent = formatIndianNumber(Math.floor(finalAmount));
    document.getElementById("amount-gained").textContent = formatIndianNumber(Math.floor(amountGained));
}

// Add event listeners to update results when inputs change
document.getElementById("investment").addEventListener("input", updateResults);
document.getElementById("interest").addEventListener("input", updateResults);
document.getElementById("time").addEventListener("input", updateResults);
