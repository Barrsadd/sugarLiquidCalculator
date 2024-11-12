const input = document.getElementById('input');
const button = document.getElementById('button');
const water = document.getElementById('water-weight');
const sugar = document.getElementById('sugar-weight');
const resultField = document.querySelector('.result-field'); // Select the result field

function calculate() {
    const inputValue = input.value;
    const inputValueLength = inputValue.toString().length

    // CEK APAKAH INPUT VALUE ADA NILAINYA
    if (inputValueLength <= 4) {
        // loading animasi
        resultField.innerHTML = '<div class="loading">Loading...</div>';

        // set delay
        setTimeout(() => {
            const sugarWeight = (5 / 9) * inputValue;
            const waterWeight = (4 / 9) * inputValue;

            water.textContent = Math.round(waterWeight) + ' ml';
            sugar.textContent = Math.round(sugarWeight) + ' ml';

            // remove loading animation after getting results
            resultField.innerHTML = `
            <div class="sugar-field">
                <p>Sugar</p>
                <p id="sugar-weight">${Math.round(sugarWeight)} ml</p> 
            </div>
            <div class="water-field">
                <p>Water</p>
                <p id="water-weight">${Math.round(waterWeight)} ml</p> 
            </div>
        `;
        }, 1000);
    } else {
        alert()
    }
    // UNFOCUS INPUT FIELD
    input.blur()
}

button.addEventListener('click', calculate);

// ENTER KEYBOARD AS A CLICK
document.addEventListener('keydown', function (event) {
    const ENTERKEY = 13;
    if (event.keyCode === ENTERKEY) {
        calculate();
    }
});
