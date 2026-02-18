const btnplus = document.querySelector('[data-action="btnplus"]');
const counter = document.querySelector('[data-caunter]');

// Check if BOTH elements exist before adding the listener
if (btnplus && counter) {
    btnplus.addEventListener('click', function() {
        // Convert the text to a number, increment it, then update the UI
        let currentValue = parseInt(counter.innerText) || 0;
        counter.innerText = currentValue + 1;
    });
} else {
    console.error("Missing elements! Check your data-attributes and script placement.");
}