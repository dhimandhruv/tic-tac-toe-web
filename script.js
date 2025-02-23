let box=document.querySelectorAll(".box");
let d1=document.querySelector("#one");
let d2=document.querySelector("#two");
let d3=document.querySelector("#three");
let d4=document.querySelector("#four");
let d5=document.querySelector("#five");
let d6=document.querySelector("#six");
let d7=document.querySelector("#seven");
let d8=document.querySelector("#eight");
let d9=document.querySelector("#nine");
let bigbox=document.querySelectorAll(".conatiner");
let res=document.querySelector(".result");
let turn=0;
function result(){
    if(d1.innerText==d2.innerText &&d2.innerText==d3.innerText && d3.innerText=="X" || d4.innerText==d5.innerText &&d5.innerText==d6.innerText && d6.innerText=="X" || d7.innerText==d8.innerText &&d8.innerText==d9.innerText && d9.innerText=="X"/*row wise conition*/|| d1.innerText==d4.innerText &&d4.innerText==d7.innerText && d7.innerText=="X"||d2.innerText==d5.innerText &&d5.innerText==d8.innerText && d8.innerText=="X"||d3.innerText==d6.innerText &&d6.innerText==d9.innerText && d9.innerText=="X"||d1.innerText==d5.innerText &&d5.innerText==d9.innerText && d9.innerText=="X"||d3.innerText==d5.innerText &&d5.innerText==d7.innerText && d7.innerText=="X"){
        return 1;
    }
    else if(d1.innerText==d2.innerText &&d2.innerText==d3.innerText && d3.innerText=="O" || d4.innerText==d5.innerText &&d5.innerText==d6.innerText && d6.innerText=="O" || d7.innerText==d8.innerText &&d8.innerText==d9.innerText && d9.innerText=="O"/*row wise conition*/|| d1.innerText==d4.innerText &&d4.innerText==d7.innerText && d7.innerText=="O"||d2.innerText==d5.innerText &&d5.innerText==d8.innerText && d8.innerText=="O"||d3.innerText==d6.innerText &&d6.innerText==d9.innerText && d9.innerText=="O"||d1.innerText==d5.innerText &&d5.innerText==d9.innerText && d9.innerText=="X"||d3.innerText==d5.innerText &&d5.innerText==d7.innerText && d7.innerText=="X"){
        return 2;
    }
}
function change(){
    console.log("it was clicked");
    bx=this;
    let id=bx.getAttribute("id");
    console.log(id);
    let btx=document.querySelector(`#${id}`);
    if(turn%2==0){
        btx.innerHTML="X";
    }
    else{
        btx.innerHTML="O";
    }
    turn++;
    let c= result();
    if(c==1){
        console.log("player 1 won");
        res.innerText="Player 'X' Won";
        bigbox.classList.add("resultfinal");
    }
    else if(c==2){
        console.log("player 2 won");
        res.innerText="Player 'O' Won";
        bigbox.classList.add("resultfinal");
    }
    else{
        res.innerText="Match Draw";
    }

    
}

for (bx of box){
    bx.addEventListener("click",change)
}