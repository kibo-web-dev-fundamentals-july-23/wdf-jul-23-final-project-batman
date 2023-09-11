console.log("welcome to Tic Tac Toe");

// To select all the necessary html element
let boxes = document.querySelectorAll('.tile');
let boxtext = document.querySelectorAll('.boxtext');
let info = document.querySelector('.info');
let image = document.querySelector('.image');
let turnOf = document.getElementById("turn")

// initializing the game. Showing it's at the beginning
let turn = "X";
let isgameover = false;
const changeTurn = ()=>{
    return turn === "X" ? "O" : "X"
}

// makes each cell on the board interactive when hovered over
Array.from(boxes).forEach(element =>{
    element.classList.add('hover');
})

// this checks if player has won. It iterates through the combinations below
const checkWin = () =>{
    let wins = [
      [0,1,2,0,-12,0],
      [3,4,5,0,0,0],
      [6,7,8,0,12,0],
      [0,3,6,-12,0,90],
      [1,4,7,0,0,90],
      [2,5,8,12,0,90],
      [0,4,8,0,0,45],
      [2,4,6,0,0,-45],
  ]

  wins.forEach(e =>{
      if( (boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== ""))
      {
          boxes[e[0]].classList.add('background');
          boxes[e[1]].classList.add('background');
          boxes[e[2]].classList.add('background');
          boxtext[e[0]].style.color = "#fff";
          boxtext[e[1]].style.color = "#fff";
          boxtext[e[2]].style.color = "#fff";
          info.innerText = boxtext[e[0]].innerText + " Won!";
          isgameover = true;
          image.getElementsByTagName('img')[0].style.width = "150px";
          
          
          Array.from(boxes).forEach(element =>{
            element.classList.remove('hover');
        })
    }

        
      
  })
};

// sets up event listeners for each cell on the board
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click',()=>{
        if(!isgameover  && boxtext.innerText === ''){
            boxtext.innerText = turn;
            turn = changeTurn();
            color();
            checkWin();
            if(!isgameover){
            document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
        }
        }
    })
    
});

// this function changes text colour on the board for the X and O
function color(){
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.boxtext');
    if(boxtext.innerText === "X"){
        boxtext.style.color = "brown";
    }
    if(boxtext.innerText === "O"){
        boxtext.style.color = "black";
    }
})
};

// adds event listener to the reset button
reset.addEventListener('click',()=>{
    Array.from(boxtext).forEach(element =>{
        element.innerText = "";
    });
    turn = "X";
    isgameover = false;
    document.getElementsByClassName("info")[0].innerText ="Turn for " + turn;
    document.querySelector('.image').getElementsByTagName('img')[0].style.width = "0px";
    document.querySelector('.line').style.width = "0%";
    background();
});

// this function removes the background class inorder to reset the game
function background(){
    let box = document.querySelectorAll('.tile');
    Array.from(box).forEach(element =>{
        element.classList.remove('background');
    })
};

