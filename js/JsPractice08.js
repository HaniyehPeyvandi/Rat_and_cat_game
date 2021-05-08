var LEFT_KEY = 37;
var UP_KEY = 38;
var RIGHT_KEY = 39;
var DOWN_KEY = 40;
var speed = 10;
var cat = document.getElementsByClassName("cat").item(0);
var rat = document.getElementsByClassName("rat").item(0);
var timeLeft = 10;


/*--------------------Timer--------------*/
timer();
function timer(){
    if(timeLeft <= 0){
        document.getElementById("countdown").innerHTML = "0" ;
        setTimeout(function() {
            alert("Game over ☹");
        },10)
        timeLeft = 11;
        setTimeout(function() {
            cat.style.left = 0 ;
            cat.style.top = 0 ;
            moveRat();
        },10)
    } else {
        document.getElementById("countdown").innerHTML = timeLeft ;
    }
    timeLeft--;
    setTimeout("timer()", 1000);
}


/*----------------------Move a Rat-------------------------*/
moveRat();
function moveRat(){
    rat.style.top = Math.round(Math.random() * (400-70)) + "px";
    rat.style.left = Math.round(Math.random() * (700-70)) + "px";

    setTimeout("moveRat()",2000);
}


/*----------------------Move a Cat-------------------------*/
document.addEventListener('keydown',moveCat);

function moveCat(event){
    var key = event.keyCode;

    if (key === LEFT_KEY){
        cat.style.left = parseInt(cat.style.left) - speed + "px";
    }else if (key === RIGHT_KEY){
        cat.style.left = parseInt(cat.style.left) + speed + "px";
    }else if (key === UP_KEY){
        cat.style.top = parseInt(cat.style.top) - speed + "px";
    }else if (key === DOWN_KEY){
        cat.style.top = parseInt(cat.style.top) + speed + "px";
    }


    if (parseInt(cat.style.top) < 0 ){
        cat.style.top = "330px";
    }else if (parseInt(cat.style.top) > 330 ){
        cat.style.top = 0;
    }else if (parseInt(cat.style.left) < 0 ){
        cat.style.left = "630px";
    }else if (parseInt(cat.style.left) > 630 ){
        cat.style.left = 0;
    }
    window.requestAnimationFrame(moveCat);
    // catchRat();
}
window.requestAnimationFrame(moveCat);


/*-------------------Catching rat-----------------*/
catchRat();
function catchRat(){
    var TopOfRat = rat.offsetTop;
    var LeftOfRat = rat.offsetLeft;
    var TopOfCat = cat.offsetTop;
    var LeftOfCat = cat.offsetLeft;

    if ((Math.abs(TopOfCat - TopOfRat)) <= 10 && (Math.abs(LeftOfCat - LeftOfRat)) <= 10 ){
        alert("Congratulations 🎉 \n Yon won 😎");
        cat.style.left = 0 ;
        cat.style.top = 0 ;
        moveRat();
        timeLeft = 10;
    }
    setTimeout("catchRat()",1)
}


