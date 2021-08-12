//event listeners
document.getElementsByTagName('form')[0].addEventListener("click", function(e){
    e.preventDefault()
  });

document.getElementById('input').addEventListener("change", function(e){
    setSpeed(document.getElementById('input').value);
    console.log('rodou')
} );

// on and off functions
var redShine = document.styleSheets[1].cssRules[0];
var blueShine = document.styleSheets[1].cssRules[1];
var yellowShine = document.styleSheets[1].cssRules[2];
var greenShine = document.styleSheets[1].cssRules[3];

function turnOff(){
    redShine.deleteRule('100%');
    blueShine.deleteRule('100%');
    yellowShine.deleteRule('100%');
    greenShine.deleteRule('100%');
}
function turnOn(){
    redShine.appendRule("100% {box-shadow: 1px 1px 15px rgb(219, 39, 39), -1px -1px 15px rgb(243, 29, 29);}");
    blueShine.appendRule("100% {box-shadow: 1px 1px 15px rgb(0, 0, 255), -1px -1px 15px rgb(0, 0, 255);}");
    yellowShine.appendRule("100% {box-shadow: 1px 1px 15px rgb(237, 240, 57), -1px -1px 15px rgb(239, 243, 29);}");
    greenShine.appendRule("100% {box-shadow: 1px 1px 15px rgb(17, 160, 17), -1px -1px 15px rgb(51, 214, 51);");
}
// set speed
function setSpeed(n){
    var balls = [];
    for(var i = 23; i < 27; i++){
        balls.push(document.styleSheets[0].cssRules[i].style);
    }
    for(ball in balls){
        if(balls[ball].animationName === "YellowShine" || balls[ball].animationName === "GreenShine"){
            balls[ball].animationDuration = 2/n + "s";
            balls[ball].animationDelay = 2/n + "s";
            console.log(balls[ball]);
            console.log(balls[ball].value);
        }
        else {
            balls[ball].animationDuration = 2/n + "s";
        }
    }
}   
