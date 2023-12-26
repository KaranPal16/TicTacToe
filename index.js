const boxes = document.querySelectorAll('.box');
const player1 =document.querySelector('.player1');
const player2 =document.querySelector('.player2');
const player =document.querySelector('.player');
const buttons =document.querySelector('.button');
const exit =document.querySelector('.exit');
let turn_0 = true;
let drawCondition = true;
const winPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 4, 6],
    [2, 5, 8],
    [3, 4, 5],
    [6, 7, 8]
];
boxes.forEach((box) => {
    box.addEventListener('click', () => {
        if (turn_0) {
            box.innerText = 'O';
            turn_0 = false;
            player.classList.remove('active1')
            player.classList.add('active2')
        }
        else {
            box.innerText = 'X';
            turn_0 = true;
            player.classList.add('active1')
            player.classList.remove('active2')
        }
        box.disabled = true;
        checkPattern();
    });


});

function checkPattern() {
    for (let pattern of winPattern) {
        pos1 = boxes[pattern[0]].innerText;
        pos2 = boxes[pattern[1]].innerText;
        pos3 = boxes[pattern[2]].innerText;

        if(pos1 != "" && pos2 != "" && pos3 != ""){
            if(pos1 === pos2 && pos2 === pos3){
               Winner();
               disabled();
               drawCondition= false;
            }
        }

    }
}


function Winner(){
    let span = document.createElement('span');
    span.innerHTML ="winner"
    if(!turn_0){
        player1.appendChild(span);
    }
    else{
        player2.appendChild(span);
    }
}

 function disabled(){
         for( let box of boxes){
            box.disabled = true;
         }
 } 
 function enable(){
         for( let box of boxes){
            box.disabled = false;
           location.reload();
        
         }
 }

 buttons.addEventListener('click',enable);
 exit.addEventListener('click',()=>{
    let permission= prompt("do you want to Exit");
     if(permission){
        window.close();
     }
    
 })