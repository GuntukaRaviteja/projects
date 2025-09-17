let userScore=0;
let compScore=0;
let img=document.querySelectorAll(".img");
let button=document.querySelector(".count3");
let button1=document.querySelector(".count4");
let m1=document.querySelector(".m1");
let m2=document.querySelector(".m2");
let arr=[];


img.forEach((img1)=>
    {
        img1.addEventListener("click",()=>
            {
                const userChoice=img1.getAttribute("id");
                
                playGame(userChoice);
                // compu();
                let revalue=compu();
                winner(revalue,userChoice);
   
  
  }
  );
});



const playGame=(userChoice)=>
{
   console.log("userChoice =",userChoice);
};
const compu=()=>
{
    arr[2]=[];
  img.forEach((img2,idx)=>
  {
    
      const randIndex=img2.getAttribute("id");
      arr[idx]=[randIndex];
    });
 const compChoice=arr[Math.floor(Math.random() * arr.length)];
 console.log("computerChoice=",compChoice);
 return compChoice;

};


const winner =(compChoice,userChoice) =>
{
 if(userChoice==compChoice)
    {
    button.innerText=`Draw There are no Winners`;
    button.style.backgroundColor="blue";

    }
else if((userChoice=="rock" && compChoice=="sicssor") || (userChoice=="sicssor" && compChoice=="paper")  || (userChoice=="paper" && compChoice=="rock"))
    {
    button.innerText=`You Won ${userChoice} beat ${compChoice}`;
    button.style.backgroundColor="green";
    userScore++;
    m1.innerText=userScore;

    }
else
    {
     button.innerText=`Sorry Computer Won ${compChoice} beat ${userChoice} `; 
      button.style.backgroundColor="red";  
      compScore++;
      m2.innerText=compScore;

    }
}

button1.addEventListener("click",()=>
{
 userScore=0;
 compScore=0;
  m1.innerText=userScore;
   m2.innerText=compScore;
    button.innerText="";
}
);









