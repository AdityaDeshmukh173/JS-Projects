let boxes = document.querySelectorAll(".box") ;
let resetbtn = document.querySelector("#reset");
let newgamebtn = document.querySelector("#newgame");
let msgcontain = document.querySelector(".mes-container");
let msg = document.querySelector("#win");


let turnO = true ;  // playerX , playerO

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

const resetGame = () => {
    turnO = true ;
    enableBoxes();
    msgcontain.classList.add("hide");
}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log(`Box was Clicked`);
        if (turnO) {                    // Turn O
            box.innerText = "O" ;
            turnO = false;
        }else{                          // Turn X
            box.innerText = "X"; 
            turnO = true ;
        }
        box.disabled = true ;
        
        checkWinner();
    })
})

const enableBoxes = () => {
    for (const box of boxes) {
        box.disabled = false ;
        box.innerText = "" ;
    }
}

newgamebtn.addEventListener("click", resetGame);
resetbtn.addEventListener("click",resetGame);

const disableBoxes = () => {
    for (const box of boxes) {
        box.disabled = true ;
    }
}

const showWinner = (winner) => {
    msg.innerText = `Congratulations Winner is ${winner} `;
    msgcontain.classList.remove("hide");
    disableBoxes(); 
}

const checkWinner = () => {
    for (const pattern of winPatterns) {
        let pos1Val = boxes[pattern[0]].innerText ;
        let pos2Val = boxes[pattern[1]].innerText ;
        let pos3Val = boxes[pattern[2]].innerText ;

        if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                console.log("Winnerrrr !!!!", pos1Val);
                showWinner(pos1Val);
            }
        }
    }
}