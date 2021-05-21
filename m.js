function faisla(user, com) {



    if (user == com) {

        return 2;
    }

    else if (user == "rock") {
        if (com == "paper") {

            return 0;
        }
        else if (com == "scissor") {

            return 1;
        }


    }
    else if (user == "paper") {
        if (com == "rock") {

            return 1;
        }
        else if (com == "scissor") {

            return 0;
        }



    }
    else if (user == "scissor") {
        if (com == "paper") {

            return 1;
        }
        else if (com == "rock") {

            return 0;
        }

    }


}

let i = 0
let j = 0
var w = 0;
function game(o) {

    // var s = document.getElementById("scr");
    // var p = document.getElementById("paper");
    // var r = document.getElementById("stone");
    var v
    if (o == scr) {
        v = "scissor"
    }
    if (o == paper) {
        v = "paper"
    }
    if (o == stone) {
        v = "rock"
    }

    var k = ["paper", "scissor", "rock"];

    var y = k[Math.floor(Math.random() * 3)];
    document.getElementById("com_c").innerHTML = y;
    document.getElementById("user_c").innerHTML = v;

    q = faisla(v, y);

    if (q == 1) {
        document.getElementById("r").innerHTML = "You wins";
        document.getElementById("user_p").innerHTML = ++i;
        document.getElementById("round").innerHTML = ++w;
    }
    else if (q == 0) {
        document.getElementById("r").innerHTML = "Computer wins";
        document.getElementById("com_p").innerHTML = ++j;
        document.getElementById("round").innerHTML = ++w;
    }
    else if (q == 2) {
        document.getElementById("r").innerHTML = "Draw";
        document.getElementById("round").innerHTML = ++w;
    }


}








