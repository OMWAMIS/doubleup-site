let tradeCount = 0;

document.getElementById('tradeBtn').addEventListener('click', function () {
    const amountInput = document.getElementById('amount');
    const totalDisplay = document.getElementById('total');
    const withdrawBtn = document.getElementById('withdrawBtn');

    const amount = parseInt(amountInput.value);
    if (isNaN(amount) || amount <= 0) {
        alert("Enter a valid amount");
        return;
    }

    tradeCount++;
    const currentTotal = parseInt(totalDisplay.innerText);
    totalDisplay.innerText = currentTotal + amount;

    if (tradeCount >= 3) {
        withdrawBtn.disabled = false;
    }
});

document.getElementById('withdrawBtn').addEventListener('click', function () {
    const messageBox = document.getElementById('message');
    messageBox.innerText = "Kaa chini ufanye kazi, Papa Graham ni mnoma!";
});
