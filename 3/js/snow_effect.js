var piece = new Array(50);
function showSnow() {


    for (var i = 0; i < piece.length; i++) {
        piece[i] = document.createElement("div");
        piece[i].style.color = "#fff";
        piece[i].innerHTML = "*";
        piece[i].style.position = "absolute";
        piece[i].style.left = Math.ceil(Math.random() * document.body.clientWidth) + "px";
        piece[i].style.top = Math.random() * document.body.clientHeight + "px";
        piece[i].style.fontSize = Math.ceil(Math.random() * 20) + 15 + "pt";
        piece[i].style.weight = "bold";
        document.body.appendChild(piece[i]);
    }
    setInterval(function () {
        for (var i = 0; i < piece.length; i++) {
            if (parseInt(piece[i].style.top) < document.body.clientHeight - 100) {
                piece[i].style.top = parseFloat(piece[i].style.top) + Math.random() * 3 + "px";
                piece[i].style.left = Math.min(Math.max(0, parseFloat(piece[i].style.left) + Math.random() * 3 - 1.5), document.body.clientWidth - 50) + "px";
            } else {
                piece[i].style.left = Math.random() * document.body.clientWidth + "px";
                piece[i].style.top = 0 + "px";
            }
        }
    }, 15);
}
showSnow();
function hideSnow() {
    for (var i = 0; i < piece.length; i++) {
        piece[i].innerHTML = "";
    }
}
function showOrHideSnow() {
    if(piece[0].innerHTML = ""){
        for (var i = 0; i < piece.length; i++) {
            piece[i].innerHTML = "*";
        }
        showSnow();
    }
    else {
    
        hideSnow();
    }
}