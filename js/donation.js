const mainSection = document.getElementById('main-section');
const historySection = document.getElementById('history-container');
const donationButton = document.getElementById('donation-button');
const historyButton = document.getElementById('history-button');

document.getElementById('history-button').addEventListener('click', function () {
    mainSection.classList.add('hidden');
    historySection.classList.remove('hidden');

    historyButton.classList.add('text-black', 'bg-basic');
    donationButton.classList.add('text-text');

    historyButton.classList.remove('text-text');
    donationButton.classList.remove('text-black', 'bg-basic');
})

document.getElementById('donation-button').addEventListener('click', function () {
    mainSection.classList.remove('hidden');
    historySection.classList.add('hidden');

    historyButton.classList.remove('text-black', 'bg-basic');
    donationButton.classList.remove('text-text');

    historyButton.classList.add('text-text');
    donationButton.classList.add('text-black', 'bg-basic');
})