function donateNow(inputAmount, totalDonated) {
    const balance = parseFloat(document.getElementById('balance').innerText);
    const inputValue = document.getElementById(inputAmount).value;
    const donatedAmount = parseFloat(document.getElementById(totalDonated).innerText);
    const inputValueNumber = parseFloat(inputValue);

    if ((inputValue >= 0 || typeof inputValue === 'number') && (balance >= inputValueNumber)) {
        const totalDonatedAmount = donatedAmount + inputValueNumber;
        document.getElementById(totalDonated).innerText = totalDonatedAmount;
        const remainingBalance = balance - inputValueNumber;
        document.getElementById('balance').innerText = remainingBalance;
    }
    else {
        return alert('Invalid donation amount');
    }
    document.getElementById(inputAmount).value = '';
}