const form = document.getElementById("calc-form");
const leftInput = document.getElementById("left");
const rightInput = document.getElementById("right");
const operatorInput = document.getElementById("operator");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const leftText = leftInput.value.trim();
    const rightText = rightInput.value.trim();

    // Only positive integers, including zero
    if (
        !/^\d+$/.test(leftText) ||
        !/^\d+$/.test(rightText)
    ) {
        alert("Error :(");
        return;
    }

    const left = Number(leftText);
    const right = Number(rightText);
    const operator = operatorInput.value;
    let result;

    if (!Number.isSafeInteger(left) || !Number.isSafeInteger(right)) {
        alert("Error :(");
        return;
    }

    if ((operator === "/" || operator === "%") && right === 0) {
        alert("It's over 9000!");
        return;
    }

    switch (operator) {
        case "+":
            result = left + right;
            break;
        case "-":
            result = left - right;
            break;
        case "*":
            result = left * right;
            break;
        case "/":
            result = left / right;
            break;
        case "%":
            result = left % right;
            break;
    }

    if (!Number.isFinite(result)) {
        alert("Error :(");
        return;
    }

    alert(String(result));
    console.log(result);
});

// Reminder every 30 seconds
setInterval(function () {
    alert("Please, use me...");
}, 30000);
