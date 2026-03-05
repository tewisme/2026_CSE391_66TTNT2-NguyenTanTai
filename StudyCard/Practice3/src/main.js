$("#btnHello").on("click", function () {
    alert("Hello from jQuery!");
});

const btnRed = document.getElementById("btnRed");

btnRed.addEventListener("click", function () {
    document.body.style.fontSize = '10px';
})