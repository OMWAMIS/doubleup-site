let invested = 0;
let current = 0;

function invest() {
    let amount = parseFloat(document.getElementById("amountInput").value);
    let phone = document.getElementById("phoneInput").value;

    if (!amount || !phone) {
        alert("Please enter amount and phone number.");
        return;
    }

    invested = amount;
    current = amount;

    document.getElementById("investedAmount").innerText = invested;
    document.getElementById("currentAmount").innerText = current;

    document.getElementById("dashboard").style.display = "block";
}

function trade() {
    current *= 2;
    document.getElementById("currentAmount").innerText = current;

    if (current >= invested * 3) {
        document.getElementById("withdrawBtn").style.display = "inline-block";
    }
}

function withdraw() {
    alert("You have withdrawn KES " + current + ". Thank you for using DoubleUp!");
    invested = 0;
    current = 0;
    document.getElementById("dashboard").style.display = "none";
    document.getElementById("withdrawBtn").style.display = "none";
}
