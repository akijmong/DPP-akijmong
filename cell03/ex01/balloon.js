const balloon = document.getElementById("balloon");

const colors = ["red", "green", "blue"];
let size = 200;
let colorIndex = 0;

balloon.addEventListener("click", function () {
    size += 10;

    if (size > 420) {
        size = 200;
        colorIndex = 0;
        balloon.style.backgroundColor = colors[colorIndex];
    } else {
        colorIndex = (colorIndex + 1) % colors.length;
        balloon.style.backgroundColor = colors[colorIndex];
    }

    balloon.style.width = size + "px";
    balloon.style.height = size + "px";
});

balloon.addEventListener("mouseleave", function () {
    size = Math.max(200, size - 5);

    colorIndex = (colorIndex - 1 + colors.length) % colors.length;

    balloon.style.width = size + "px";
    balloon.style.height = size + "px";
    balloon.style.backgroundColor = colors[colorIndex];
});