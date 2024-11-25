
let userscore=0;
let computerscore=0;
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");
const choices=document.querySelectorAll(".choice");
 const draw=()=>{
    console.log("game was draw");
 }
const showwinner =(userwin, userchoice , computer)=>{
    if(userwin)
    {
        userscore++;
        userScorePara.innerText=userscore;
        msg.innerText = `You win! Your ${userchoice} beats ${computer}`;
        msg.style.backgroundColor = "green";
}
    else{
        computerscore++;
        compScorePara.innerText=computerscore;
        msg.innerText = `You lost. ${computer} beats your ${userchoice}`;
        msg.style.backgroundColor = "red";
    }
}
const playgame=(userchoice)=>{
    console.log(userchoice);
    const computer=getcompchoice(); 
    console.log(computer);
    if(computer===userchoice)
       { draw();}
    else
    {let userwin=true;
        if(userchoice==="stone")
            userwin=computer==="scissors"?true:false;
        else if(userchoice=="paper")
        {
            userwin=computer==="scissors"?false:true;
        }
        else
        {
            userwin=computer=="stone"?false:true
        }
        showwinner(userwin,userchoice,computer);
    }
};
const getcompchoice=()=>
{
    const option=["stone","paper","scissors"]
    const randidx=Math.floor(Math.random()*3)
    return option[randidx];
}
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id")
        playgame(userchoice);

    })
})
