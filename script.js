var canvas = document.getElementById("canvas"),
    ctx = canvas.getContext("2d"),
    start = document.getElementById("start"),
    end = document.getElementById("end"),
    end2 = document.getElementById("end2"),
    lampPosition1 = 0,
    lampPosition2 = 0,
    increment1 = 1,
    increment2 = 1,
    lineHeight1 = 0,
    lineHeight2 = 0;

var drawThatShit = function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    ctx.strokeStyle = "red";
    ctx.lineWidth = 2;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    var startRect = start.getBoundingClientRect(),
        endRect = end.getBoundingClientRect(),
        end2Rect = end2.getBoundingClientRect();

    // Menggambar garis dan menghitung panjangnya untuk garis 1 (start-end)
    ctx.beginPath();
    ctx.moveTo(
        startRect.left + startRect.width / 2,
        startRect.top + startRect.height / 2
    );
    ctx.lineTo(
        endRect.left + endRect.width / 6,
        endRect.top + endRect.height / 2
    );
    ctx.stroke();
    lineHeight1 = Math.sqrt(
        Math.pow(
            endRect.left +
            endRect.width / 6 -
            (startRect.left + startRect.width / 2),
            2
        ) +
        Math.pow(
            endRect.top +
            endRect.height / 2 -
            (startRect.top + startRect.height / 2),
            2
        )
    );

    // Menggambar garis dan menghitung panjangnya untuk garis 2 (start-end2)
    ctx.beginPath();
    ctx.moveTo(
        startRect.left + startRect.width / 2,
        startRect.top + startRect.height / 2
    );
    ctx.lineTo(
        end2Rect.left + end2Rect.width / 2,
        end2Rect.top + end2Rect.height / 2
    );
    ctx.stroke();
    lineHeight2 = Math.sqrt(
        Math.pow(
            end2Rect.left +
            end2Rect.width / 2 -
            (startRect.left + startRect.width / 2),
            2
        ) +
        Math.pow(
            end2Rect.top +
            end2Rect.height / 2 -
            (startRect.top + startRect.height / 2),
            2
        )
    );

    // Menggambar lampu 1 pada posisi yang tepat di sepanjang garis 1
    ctx.beginPath();
    ctx.arc(
        startRect.left +
        startRect.width / 2 +
        ((endRect.left +
            endRect.width / 6 -
            startRect.left -
            startRect.width / 2) *
            lampPosition1) /
        lineHeight1,
        startRect.top +
        startRect.height / 2 +
        ((endRect.top +
            endRect.height / 2 -
            startRect.top -
            startRect.height / 2) *
            lampPosition1) /
        lineHeight1,
        5,
        0,
        Math.PI * 2
    );
    ctx.fillStyle = "yellow";
    ctx.fill();

    ctx.beginPath();
    ctx.arc(
        startRect.left +
        startRect.width / 2 +
        ((end2Rect.left +
            end2Rect.width / 2 -
            startRect.left -
            startRect.width / 2) *
            lampPosition2) /
        lineHeight2,
        startRect.top +
        startRect.height / 2 +
        ((end2Rect.top +
            end2Rect.height / 2 -
            startRect.top -
            startRect.height / 2) *
            lampPosition2) /
        lineHeight2,
        5,
        0,
        Math.PI * 2
    );
    ctx.fillStyle = "yellow";
    ctx.fill();

    lampPosition1 += increment1;
    if (lampPosition1 >= lineHeight1 || lampPosition1 <= 0) {
        increment1 *= -1;
    }

    lampPosition2 += increment2;
    if (lampPosition2 >= lineHeight2 || lampPosition2 <= 0) {
        increment2 *= -1;
    }

    requestAnimationFrame(drawThatShit);
};

drawThatShit();