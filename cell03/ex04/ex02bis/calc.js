
$(document).ready(function () {
    $("#calculate").click(function () {
        const leftText = $("#left").val().trim();
        const rightText = $("#right").val().trim();
        const operator = $("#operator").val();

        const left = Number(leftText);
        const right = Number(rightText);

        if (
            leftText === "" ||
            rightText === "" ||
            !/^\d+$/.test(leftText) ||
            !/^\d+$/.test(rightText)
        ) {
            alert("Error :(");
            return;
        }

        if ((operator === "/" || operator === "%") && right === 0) {
            alert("It's over 9000!");
            console.log("It's over 9000!");
            return;
        }

        let result;

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
                result = Math.floor(left / right);
                break;
            case "%":
                result = left % right;
                break;
        }

        alert(result);
        console.log(result);
    });

    setInterval(function () {
        alert("Please, use me...");
    }, 30000);
});
