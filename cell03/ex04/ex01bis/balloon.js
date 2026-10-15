
$(document).ready(function () {
    let size = 200;
    let colorIndex = 0;

    const colors = ["red", "green", "blue"];

    $("#balloon").click(function () {
        size += 10;

        if (size > 420) {
            size = 200;
            colorIndex = 0;
        } else {
            colorIndex = (colorIndex + 1) % colors.length;
        }

        $(this).css({
            width: size + "px",
            height: size + "px",
            "background-color": colors[colorIndex]
        });
    });

    $("#balloon").mouseleave(function () {
        if (size > 200) {
            size = Math.max(200, size - 5);
            colorIndex = (colorIndex - 1 + colors.length) % colors.length;

            $(this).css({
                width: size + "px",
                height: size + "px",
                "background-color": colors[colorIndex]
            });
        }
    });
});
