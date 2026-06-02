let boxes = document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset-btn");
let newGameBtn=document.querySelector("#new-btn");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
// playeO ki turn ha q k yh true pt set ha
let turnO=true; 
const winPatterns=[
[0,1,2],
[0,3,6],
[0,4,8],
[1,4,7],
[2,5,8],
[2,4,6],
[3,4,5],
[6,7,8], 
];
const resetGame =()=>{
    turn0=true;
    enabaledBoxes();
    msgContainer.classList.add("hide");
}
boxes.forEach((box) => {
    box.addEventListener("click",() =>{
        // console.log("box was clicked");
      if(turnO){
        box.innerText="O";
        turnO=false;
      }
      else{
        box.innerText="X";
                turnO=true;
      }
      box.disabled=true;
      checkWinner();
});
});
const disbaledBoxes=()=>{
    for(let box of boxes){
        box.disables=true;
    }
}
const enabaledBoxes=()=>{
    for(let box of boxes){
        box.enaabled=true;
        box.innerText="";
    }
}

const showWinner=(pos0Val)=>{
        // console.log(winner);
    msg.innerText=`Congratulations, Winner is ${pos0Val}`;
    msgContainer.classList.remove("hide");
    disbaledBoxes();
}

const checkWinner=() =>{            
    for( let pattern of winPatterns){
//         console.log(pattern[0],pattern[1],pattern[2]);

// console.log(boxes[pattern[0]].innerText,boxes[pattern[1]].innerText,boxes[pattern[2]].innerText );
let pos0Val=boxes[pattern[0]].innerText;
let pos1Val=boxes[pattern[1]].innerText;
let pos2Val=boxes[pattern[2]].innerText;
if(pos0Val!= "" && pos1Val!= "" && pos2Val!= ""){
    if(pos0Val=== pos1Val && pos1Val===pos2Val){
// console.log("Winner",pos0Val );
showWinner(pos0Val);
    }
}
    }
};
newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);
