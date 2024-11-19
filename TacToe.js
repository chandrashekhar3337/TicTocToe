let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let turnO =  true;//playerX, playerY
let newgameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-conainer");
let msg = document.querySelector("#msg");
let count =0;
// 2D ARRAY:
/* let arr2 = [["apple","litchi"],["potatao","mushroom"],["pants","shirts"]];
let fruit = arr2[0][0];
console.log(fruit); */
const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];
boxes.forEach((box) =>{
    box.addEventListener("click", () =>{
        if(turnO){
            box.innerText ="O"
            turnO = false;
        }
        else{
            box.innerText = "X"
            turnO = true;
        }
        box.disabled=true;
        count++;
        let isWinner = checkWinner();
       if(count ===9 && !isWinner){
        console.log("i am arun");
        gameDraw();
       }
    })
}) 
const gameDraw = () =>{
    msg.innerText="this game is draw";
    msgContainer.classList.remove("hide");
    disabled();
}


const resetGame = () => {
    turnO =true;
    enabled();
    msgContainer.classList.add("hide");

}

const disabled = () =>{
    for(box of boxes){
        box.disabled = true;
    }
}
const enabled = () =>{
    for(box of boxes){
        box.disabled = false;
        box.innerText ="";
    }
}

const showWinner = (Winner) => {
   console.log( msg.innerText= `congratulation, Winner is ${Winner}`);
    msgContainer.classList.remove("hide");
    disabled();
}


const checkWinner = () =>{
    for(let pattern of winPatterns){
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;
        if(pos1val != "" && pos2val != "" && pos3val != ""){
            if(pos1val === pos2val && pos2val === pos3val){
                showWinner(pos1val);
                return true;
            }
        }
    }
}
newgameBtn.addEventListener("click" , resetGame);
resetBtn.addEventListener("click" , resetGame);

