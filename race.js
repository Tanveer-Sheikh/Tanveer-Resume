// JAVA SCRIPT FOR RACE GAME
score = -1;
cross = false;
highscore = 0;
document.onkeydown = function (e) {

    board = document.querySelector(".board")

    tank = document.querySelector(".tank");
   
    enemy = document.querySelector(".enemy");
    enemy2 = document.querySelector(".enemy2");
    console.log("ket is ", e.keyCode)

 




    if (e.keyCode == 38) {
        console.log("UP KEY")
        racebg = document.querySelector(".racebg")
        racebg.style.animation = 'backgroundScroll 12s linear infinite'
        cross = true;






        enemy.classList.add("animationEnemy");
        enemy2.classList.add("animationEnemy2");
        tank.classList.add("animationTank");
 

        enemy.style.visibility = 'visible'
        enemy2.style.visibility = 'visible'
        // gameover.style.visibility = 'hidden'
        setTimeout(() => {
            tank.classList.remove("animationTank");


        }, 900);
    }
    if (e.keyCode == 39) {


        tx = parseInt(window.getComputedStyle(tank, null).getPropertyValue('left'));
       
        if (tx < 1156) {
            tank.style.left = tx + 15 + "px";

        }

    }
    if (e.keyCode == 37) {
        tank = document.querySelector(".tank");

        tx = parseInt(window.getComputedStyle(tank, null).getPropertyValue('left'));

        if (tx > 31) {

            tank.style.left = tx - 15 + "px";

        }

    }
    if (e.keyCode == 32) {
        tx = parseInt(window.getComputedStyle(tank, null).getPropertyValue('left'));
        
        tank.style.left = tx + 50 + "px";
        

    }




}
setInterval(() => {
   


}, 40);

setInterval(() => {
    tank = document.querySelector(".tank");
    
    enemy = document.querySelector(".enemy");
    enemy2 = document.querySelector(".enemy2");
    gameover = document.querySelector(".gameover");
    tank.style.transform = " rotateZ(0deg)"

    tx = parseInt(window.getComputedStyle(tank, null).getPropertyValue('left'));
    ty = parseInt(window.getComputedStyle(tank, null).getPropertyValue('top'));





    ex = parseInt(window.getComputedStyle(enemy, null).getPropertyValue('left'));
    ey = parseInt(window.getComputedStyle(enemy, null).getPropertyValue('top'));

    e2x = parseInt(window.getComputedStyle(enemy2, null).getPropertyValue('left'));
    e2y = parseInt(window.getComputedStyle(enemy2, null).getPropertyValue('top'));



    offsetx = Math.abs(tx - ex);
    offsety = Math.abs(ty - ey);

    offsetx2 = Math.abs(tx - e2x);
    offsety2 = Math.abs(ty - e2y);


  





   




    if (offsetx < 90 && offsety < 52) {
        console.log("enemy 1");
        enemy.style.left = ex + "px";
        gameover.style.visibility = 'visible'

        racebg = document.querySelector(".racebg")
        racebg.style.animation = 'none'
        tank.style.transform = " rotateZ(-30deg)"

        enemy.classList.remove("animationEnemy");
        if (score > highscore) {
            highscore = score;
        }

        document.querySelector(".highscore").innerHTML = highscore;
        score = 0;
        cross = false;
    }
    if (offsetx2 < 100 && offsety2 < 55) {
        console.log("enemy 2");

        enemy2.style.left = e2x + "px";
        gameover.style.visibility = 'visible'
        // enemy2.style.visibility = 'hidden'
        tank.style.transform = " rotateZ(-30deg)"
        racebg = document.querySelector(".racebg")
        racebg.style.animation = 'none'
        enemy2.classList.remove("animationEnemy2");
        if (score > highscore) {
            highscore = score;
        }

        document.querySelector(".highscore").innerHTML = highscore;
        score = 0;
        cross = false;
    }

    if (cross) {
        score += 1;
        enemy2.style.left = e2x
        enemy.style.left = ex
        document.querySelector(".score").innerHTML = score;

        document.querySelector(".highscore").innerHTML = highscore;
    }

}, 100);


