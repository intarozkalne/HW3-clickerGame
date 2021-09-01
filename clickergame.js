

let button = document.querySelector("#clickHere");
//console.info("Button: ", button);


let clicks = 0;
function handleButtonClick(){
clicks = clicks + 1
//console.info(clicks)

if (clicks%5==0){
  addRandomCube();
}
document.querySelector("#clickCounter").innerHTML = "Clicks: " + clicks;
document.querySelector("#clicksCount").innerHTML = "Clicks: " + clicks;
//console.info("clicks: " + clicks)
}

button.addEventListener("click",handleButtonClick)

//Start time
let startTime;
function startGame(){
  startTime = new Date()
  // if (click = 1)
  document.querySelector("#startingTime").innerHTML = "Starting time: " + startTime;
}

button.addEventListener("click",startGame, {once:true})

//Clicking time
let endTime;
let clickingRime;
function allTime(){
  endTime = new Date()
  clickingTime = Math.round((endTime.getTime() - startTime.getTime())/1000);
  document.querySelector("#clickingTime").innerHTML = "Clicking time: " + clickingTime;
}

button.addEventListener("click",allTime)

//Bonuss
let bonus=0;
function getRandomArbitrary(min,max){
  return Math.floor(Math.random() * (max-min) +min)
}

function addRandomCube(){
  let cube = document.createElement("div")
  cube.innerText = "click for 5 points"
  $("#cubeHolder").append(cube);

  const windowHeight = $(window).height()-100;
  //console.info("windowheight",windowHeight)
  const randomTop = getRandomArbitrary(0,windowHeight)
  //console.info("Random", randomTop)
  $(cube).css("top",randomTop)

  const windowWidth = $(window).width()-100;
  const randomLeft = getRandomArbitrary(0,windowWidth)   
  $(cube).css("left",randomLeft)

$(cube).click(function(){
  bonus = bonus +5;
  document.querySelector("#bonusCounter").innerHTML = "Bonus: " + bonus;
  document.querySelector("#bonusCount").innerHTML = "Bonus points: " + bonus;
  cube.innerHTML = "&#9995";
  $(this).css("fontSize", "30px")
  $(this).fadeOut(50, ()=>{
      $(this).remove();
  });
});

$(cube).animate({
  borderWidth:"4px"
  },2000, function(){
      $(this).css("border-color","purple");

      $(this).animate({
          borderWidth:"8px"
      },2000, function(){
          $(this).css("border-color","rgb(5, 5, 83)");
          $(this).animate({
              borderWidth: "10px"
          },1000,()=>{
            $(this).remove();
          });
      });

  });
}

