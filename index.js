// const product={
//     name:"parker jotter standard ct ball pen",
//     rating:12,
//     offer:5,
//     price:270

// };
// console.log(typeof product["name"]);
let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#btn");
let newbtn=document.querySelector("#newbtn");
let msgcontainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

let turn0=true;

const winpatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

const resetgame=()=>{
    turn0=true;
    enableboxes();
    msgcontainer.classList.add("hide");
}
boxes.forEach((box) => {
    box.addEventListener("click",() =>{
        console.log("button is clicked");
        if(turn0){
            box.innerText="0";
            turn0=false;
        }
        else{
            box.innerText="x";
            turn0=true;
        }
        box.disabled=true;

        checkwinner();
    });
    
});

const disabledboxes=()=>{
    for(let box of boxes){
         box.disabled=true;
    }
}
const enableboxes=()=>{
    for(let box of boxes){
         box.disabled=false;
         box.innerText="";
    }
}

const showWinner= (winner) => {
    msg.innerText=`congragulations ,winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disabledboxes();
}

const checkwinner= () =>{
    for(let pattern of winpatterns){
        let pos1val=boxes[pattern[0]].innerText;
        let pos2val=boxes[pattern[1]].innerText;
        let pos3val=boxes[pattern[2]].innerText;

        if(pos1val!="" && pos2val!="" && pos3val!=""){
            if(pos1val==pos2val&&pos2val==pos3val){
                console.log("winner",pos1val);
                showWinner(pos1val);
                return;
            }
        }
    }
};

newbtn.addEventListener("click",resetgame);
resetbtn.addEventListener("click",resetgame);

