var board = [0,0,0,0,0,0,0,0,0];
// 0 = niks
// 1 = kruis
// 2 = rondje
var x = true;
win = false;
function Rust(i)
{
    if(win){
        win = false;
        restart();
    }
    console.log(board);
    if(x){
        if(board[i] == 0){
            board[i] = 1;
        }else{
            console.log("al vol");
            return;
        }
    }else{
        if(board[i] == 0){
            board[i] = 2;
        }else{
            console.log("al vol");
            return;
        }
    }
    render(i, x);
    x = !x;
}

function render(i, x){
    element = document.getElementsByClassName("button")[i];
    if(x){
        element.innerHTML = "X";
    }else{
        element.innerHTML = "O";
    }
    let text = document.getElementById("text");
    if((board[0] == 1 && board[3] == 1 && board[6] == 1) || (board[1] == 1 && board[4] == 1 && board[7] == 1) || (board[2] == 1 && board[5] == 1 && board[8] == 1) || (board[0] == 1 && board[1] == 1 && board[2] == 1) || (board[6] == 1 && board[7] == 1 && board[8] == 1) || (board[3] == 1 && board[4] == 1 && board[5] == 1)){
        // kruis wint
        text.innerHTML = "Kruisje Wint!";
        win = true;
    }else if((board[0] == 2 && board[3] == 2 && board[6] == 2) || (board[1] == 2 && board[4] == 2 && board[7] == 2) || (board[2] == 2 && board[5] == 2 && board[8] == 2) || (board[0] == 2 && board[2] == 2 && board[2] == 2) || (board[6] == 2 && board[7] == 2 && board[8] == 2) || (board[3] == 2 && board[4] == 2 && board[5] == 2)){
        // rond wind
        text.innerHTML = "Rondje Wint!";
        win = true;
    }
    y = 0;
    for(let x = 0; x < board.length; x++){
        if(board[x] == 1 || board[x] == 2){
            y++;
        }
        if(y >= 9){
            restart();
        }
    }
}

function restart(){
    x = true;
    board = [0,0,0,0,0,0,0,0,0];
    let text = document.getElementById("text");
    text.innerHTML = "Hello!";
    var buttons = document.getElementsByClassName("button");
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].innerHTML = "";
    }
}