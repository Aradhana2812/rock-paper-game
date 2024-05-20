let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const score=document.querySelectorAll(".score");
const userScore1=document.querySelector("#user-score");
const compScore1=document.querySelector("#comp-score");


const drawGame=()=>{
    console.log("drawGame");
    msg.innerText="DRAW";
    msg.style.backgroundColor="black";
    
};


const getCompChoice=()=>{
    const options=["rock","paper","scissors"];
    const compChoiceIdx= Math.floor(Math.random()*3);
    return options[compChoiceIdx];

};

const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
    {userScore++;
    msg.innerText=`YOU WIN YOUR ${userChoice} BEATS ${compChoice}`;
    msg.style.backgroundColor="green";
    userScore1.innerText=`${userScore}`;
}
    }else {console.log("you lost");
compScore++;
msg.innerText=`YOU lost ${compChoice} BEATS YOUR ${userChoice}`;
msg.style.backgroundColor="red";
compScore1.innerText=`${compScore}`;
}


};
    const playGame=(userChoice)=>{
      console.log("userchoice    "  + userChoice);
        //generate computer choice
       const compChoice= getCompChoice();
       console.log("computer choice",compChoice);

       if(userChoice===compChoice){
        drawGame();

       }else { 
        let userWin=true; 
        if(userChoice==="rock"){
            // scissors,paper
        userWin= (compChoice==="paper")? false:true;
       }else 
       if(userChoice==="paper"){
        //rock,scissors
        userWin=(compChoice==="rock")?false:true;
       }else 
       if(userChoice==="scissors"){
        // rock,paper
        userWin=(compChoice=="paper")? true:false;
       }

       showWinner(userWin,userChoice,compChoice);


    }};


choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
       const userChoice=choice.getAttribute("id");
       playGame(userChoice);
    })

});

