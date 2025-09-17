let boxes=document.querySelectorAll(".box");
let resetbutton=document.querySelector("#reset-button");
let newbutton=document.querySelector("#New-button");
let msgco=document.querySelector(".mess-container");
let msg=document.querySelector(".msg");

let turnO=true;//playerX,playerO
let x=0;

let winpatt=[[0,1,2],[3,4,5],[6,7,8],[1,4,7],[0,3,6],[2,5,8],[0,4,8],[2,4,6]];


const resetGame=()=>
{
    trueO=true;
    enableboxes();
    msgco.classList.add("ms2");
    c=0;
    x=0;
    // boxes.style.backgroundColor="rgba(2, 116, 131, 0.374)";
}

const disableboxes= ()=>
{
    for(let box of boxes)
    {
        box.disabled=true;
    }
}


const enableboxes= ()=>
{
    for(let box of boxes)
    {
        box.disabled=false;
        box.innerText="";
    }
}

boxes.forEach((box)=>
{
    box.addEventListener("click",
        ()=>
        {
           if(turnO==true )
           {
            box.innerText="O";
            box.style.color="rgba(33, 129, 110, 1)";
            // box.style.backgroundColor="rgba(64, 132, 96, 0.36)";
            turnO=false;
           }
           else
            {
                box.innerText="X";
                box.style.color="rgba(130, 21, 48, 0.69)";
                // box.style.backgroundColor="rgba(52, 60, 128, 0.36)";
                turnO=true;
           }
           box.disabled=true;
           checkWinner();
           c++;

         if(c==9 && x==0)
         {
            draw();
         }
           
         
        });
});



  const showWinner=(winner)=>
  {
  msg.innerText=`congratulations, Winner is ${winner}`;
  x=1;
  msgco.classList.remove("ms2");
  disableboxes();
  }
    

let c=0;
 const checkWinner=() =>
 {
    
    for( let pattern of winpatt)
    {
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;

        
         if(pos1!="" && pos2!="" && pos3!="") 
         {
            if(pos1===pos2 && pos2===pos3 && pos3===pos1) 

        {
            //   alert(`winner is player ${pos1}`);
            
            showWinner(pos1);
          
            
            
        }

         }
          
    }
 }
 const draw=()=>
  {
  msg.innerText=`There are no winners it's a draw`;
  msgco.classList.remove("ms2");
  disableboxes();
  }



 newbutton.addEventListener("click",resetGame);
 resetbutton.addEventListener("click",resetGame);
