let resetbtn = document.querySelector("#reset-btn")
let boxes = document.querySelectorAll(".box");
let turnO = true;
let msgcontainer = document.querySelector(".msg-container")
let ms = document.querySelector("#msgs")
let btn  = document.querySelector("#new-ntn")
const patterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];
console.log(boxes);
boxes.forEach(box => {
    box.addEventListener("click" ,()=>{
        console.log("the box was clicked")
        if(turnO){
            box.innerHTML = "O"
            turnO = false;
        }else{

            box.innerHTML = "X"
            turnO = true;
        }
        box.disabled = true;
        checkwinner ();
    });
});
const reset =()=>{
    turnO =true
    anbledo();
    msgcontainer.classList.add("hide");
    
}
const disavled=()=>{
    for(let box of boxes){
        box.disabled= true;
    }
}
const anbledo=()=>{
    for(let box of boxes){
        box.disabled= false;
        box.innerText =""
    }
}
const show= (winner)=>{
    ms.innerText = `congratulations to winner ${winner}`;
    msgcontainer.classList.remove("hide");
    disavled();
   
}
const checkwinner = () => {
    for (let pattern of patterns) {
        
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText

        if (pos1 !== "" && pos2 !== "" && pos3 !== "") {
            if (pos1 === pos2 && pos2 === pos3) {
                console.log("winner",pos1);
                show(pos1);
            }
        }
    }
};
resetbtn.addEventListener("click",reset)
btn.addEventListener("click",reset)
