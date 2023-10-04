const $ball=document.getElementsByClassName("ball")
const $team1score=document.getElementById("score-team1")
const $team1wickets=document.getElementById("wickets-team1")
const $team2score=document.getElementById("score-team2")
const $team2wickets=document.getElementById("wickets-team2")
const resetbutton=document.getElementById("reset")
const strikebutton=document.getElementById("strike")

var team1score=0
var team2score=0
var team1wickets=0
var team2wickets=0
var ballsfaced=0
var turn=1 


function finished(){
    if(team1score>team2score) alert("India wins");
    if(team1score<team2score) alert("Pakistan wins");
    if(team1score==team2score) alert("Draw");
}

const possibleoutcomes=[0,1,2,3,4,5,6,"W"]


strikebutton.onclick=()=>{
    ballsfaced++;
    if (turn===2){
        var score=possibleoutcomes[Math.floor(Math.random()*possibleoutcomes.length)]
        
        if (score==="W"){
         team2wickets++;
         $team2wickets.innerText=team2wickets
         document.querySelector(`#team2-superover .ball:nth-child(${ballsfaced})`).innerHTML=score
        }
        
        else{
         team2score+=score;
         $team2score.innerText=team2score
         document.querySelector(`#team2-superover .ball:nth-child(${ballsfaced})`).innerHTML=score
        }
    
        if (ballsfaced==6||team1wickets==2||team1score<team2score){
            turn=3
            finished()
        }
    }
   
   
    if (turn===1){
       var score=possibleoutcomes[Math.floor(Math.random()*possibleoutcomes.length)]
       
       if (score==="W"){
        team1wickets++;
        $team1wickets.innerText=team1wickets
        document.querySelector(`#team1-superover .ball:nth-child(${ballsfaced})`).innerHTML=score
       }

       else{
        team1score+=score;
        $team1score.innerText=team1score
        document.querySelector(`#team1-superover .ball:nth-child(${ballsfaced})`).innerHTML=score
       }

       if (ballsfaced==6||team1wickets==2){
        turn=2
        ballsfaced=0
       }
    }
   

}

resetbutton.onclick=()=>{window.location.reload()}//to reset the webpage.

