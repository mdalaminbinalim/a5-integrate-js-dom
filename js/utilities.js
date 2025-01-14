function donateNow(inputAmount, totalDonated, donationSector) {
    const balance = parseFloat(document.getElementById('main-balance').innerText);
    const inputValue = document.getElementById(inputAmount).value;
    const donatedAmount = parseFloat(document.getElementById(totalDonated).innerText);
    const inputValueNumber = parseFloat(inputValue);
    const donationTitle = document.getElementById(donationSector);
    const historySection = document.getElementById('history-container');

    if ((inputValue >= 0 || typeof inputValue === 'number') && (balance >= inputValueNumber)) {
        document.getElementById(inputAmount).value = '';
        alert('Congrats! You have donated for Humankind');

        const totalDonatedAmount = donatedAmount + inputValueNumber;
        document.getElementById(totalDonated).innerText = totalDonatedAmount;

        const remainingBalance = balance - inputValueNumber;
        document.getElementById('main-balance').innerText = remainingBalance;
        document.getElementById('total-balance').innerText = remainingBalance;

        const div = document.createElement('div');
        div.innerHTML = `
        <div class="border-2 rounded-xl border-gray-400 shadow-lg p-4">
            <h1 class="font-bold text-lg md:text-xl">${inputValueNumber} Taka is donated for ${donationTitle.innerText}</h1>
            <p class="text-text font-light my-3">Date: ${new Date()}</p>
        </div>
        `;
        div.classList.add('my-10', 'md:my-20')
        historySection.appendChild(div);
    }
    else {
        return alert('Invalid donation amount');
    }
}


const mainSection = document.getElementById('main-section');
const historySection = document.getElementById('history-container');
const donationButton = document.getElementById('donation-button');
const historyButton = document.getElementById('history-button');

document.getElementById('history-button').addEventListener('click', function () {
    mainSection.classList.add('hidden');
})