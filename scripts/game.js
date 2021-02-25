var TRAPS = [10, 14, 18, 21, 27, 7, 29]
PLAYER = JSON.parse(window.localStorage.getItem('player'))
PLAYER.turn = 0

document.getElementById('one').src = PLAYER[0].src
document.getElementById('two').src = PLAYER[1].src


document.getElementById('name-player1').innerHTML = PLAYER[0].name
document.getElementById('name-player2').innerHTML = PLAYER[1].name

document.getElementById('P-0').src = PLAYER[0].src
document.getElementById('P-1').src = PLAYER[1].src

// move tokens across the board
function getOffset(el) {
    var _x = 0;
    var _y = 0;
    while (el && !isNaN(el.offsetLeft) && !isNaN(el.offsetTop)) {
        _x += el.offsetLeft - el.scrollLeft;
        _y += el.offsetTop - el.scrollTop;
        el = el.offsetParent;
    }
    return { top: _y, left: _x };
}
function movePlayer(Pos, d1, x) {

    //if tile is greater than 30 STOP
    if (Pos > 30) {
        var winnerList = window.localStorage.getItem('winner_list')
        if (winnerList) {
            winnerList = JSON.parse(winnerList)
        }
        else {
            winnerList = []
        }
        if (PLAYER[0].position > 30) {
            var str = PLAYER[0].src;
            var res = str.replace("images/", "");
            var res = res.replace(".png", "");
            window.location.href = "winner.html?" + res;
            winnerList.push(PLAYER[0].name)
            window.localStorage.setItem('winner_list', JSON.stringify(winnerList));
            window.localStorage.removeItem('player')
        }
        if (PLAYER[1].position > 30) {
            var str = PLAYER[1].src;
            var res = str.replace("images/", "");
            var res = res.replace(".png", "");
            window.location.href = "winner.html?" + res;
            winnerList.push(PLAYER[1].name)
            window.localStorage.setItem('winner_list', JSON.stringify(winnerList));
            window.localStorage.removeItem('player')
        }
        Pos = 30;
    }

    switch (x.id) {
        case "P-0":
            var left = getOffset(document.getElementById("tile_" + Pos)).left;
            var top = getOffset(document.getElementById("tile_" + Pos)).top + 20;
            break;
        case "P-1":
            var left = getOffset(document.getElementById("tile_" + Pos)).left + 20;
            var top = getOffset(document.getElementById("tile_" + Pos)).top + 20;
            break;
    }

    x.style.left = left + "px";
    x.style.top = top + "px";
}
function rollDice() {
    var die1 = document.getElementById("die");
    var d1 = Math.floor(Math.random() * 6) + 1;
    let Pos = PLAYER[PLAYER.turn].position += d1;

    die1.innerHTML = d1;

    let x = document.getElementById("P-" + PLAYER.turn);
    ///alert(PLAYER[1].position)
    if (PLAYER.turn <= 0) {

        //alert('player 1')
        document.getElementById("two").style.outline = " none";
        document.getElementById("one").style.outline = " 6px solid #70A6CE";
    }
    else {
        ///alert('player 2')
        ////alert('player 1')
        document.getElementById("one").style.outline = "none";
        document.getElementById("two").style.outline = " 6px solid #FF8428";
    }

    console.log(Pos);

    movePlayer(Pos, d1, x);
    if (TRAPS.includes(Pos)) {
        console.log("trap " + Pos);
        document.getElementById("tile_" + Pos).style.backgroundColor = "#8A0000";
        document.getElementById("infoMessage").style.display = "block";

        //fade out red tile and popup after 2seconds
        setTimeout(function (val) {
            document.getElementById("tile_" + val).style.backgroundColor = "white";
            document.getElementById("infoMessage").style.display = "none";
        }, 2000, Pos);
        y = (TRAPS.indexOf(Pos) * 2 + 1) % 6;
        d1 = y + 1;
       
        Pos -= 7;
        setTimeout(function (Pos, x) {
            movePlayer(Pos, 0, x);
        }, 600, Pos, x);
    }

    // fuction for giving player a second turn when dice roll == 6

    if (die1 === 6 || d1 === 6) {
        PLAYER.turn;  
    } else {
        PLAYER.turn = (PLAYER.turn == 0 ? 1 : 0);
    }

    console.log("Player turn: " + PLAYER.turn);
    document.getElementById("status").textContent = "It is " + PLAYER[PLAYER.turn].name + "'s turn:";
}

function gameRules() {
    alert("These are the game rules:\n1. The aim of the game is to move your token across the board without activating a trap.\n2. Players move around the board by rolling the dice. The dice roll determines the player's position on the board.\n3. Landing on a tile with a trap makes the player move back 5 steps on the board.\n4. Rolling a 6 on the dice grants the player another turn.\n5. The first player to reach the 30th tile wins!");
};
