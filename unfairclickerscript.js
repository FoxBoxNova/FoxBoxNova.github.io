spoint = 0;
presmulti = 1;
let count = 5;
setInterval(function () {
    document.getElementById("countdown").innerHTML = count--;
    if (count == -2) {
        clearInterval(count);
        document.getElementById("countdown").innerHTML = 0;
        document.getElementById("scold").innerHTML = "Game Over";
        console.log("Game Over");
        document.querySelector("button").style.display = "none";
    }
}, 1000);

function spin() {
    count = 5

    ranButtonColor = Math.floor(Math.random() * 16777215).toString(16);
    randomPos1 = Math.floor(Math.random() * 100);
    randomPos2 = Math.floor(Math.random() * 100);
    document.querySelector("button").style.backgroundColor = "#" + ranButtonColor;
    document.querySelector("button").style.filter = "brightness(60%)";
    document.querySelector("button").style.top = randomPos1 + "%";
    document.querySelector("button").style.left = randomPos2 + "%";
    setTimeout(function () {
        document.querySelector("button").style.backgroundColor = "#" + ranButtonColor;
        document.querySelector("button").style.filter = "brightness(100%)";
        document.querySelector("button").style.top = randomPos1 + "%";
        document.querySelector("button").style.left = randomPos2 + "%";
    }, 100);


    rand1 = Math.floor(Math.random() * 6 * presmulti);
    const wordList = ["My Mother Could Roll A Better Number", "Rolling A 1 Does Not Mean You Win!", "Remind Me To Leave You At Home When I Go To Vegas", "You Are Banned From DnD!", "WTF WAS THAT!", "You Call That A Roll?", "For Every 1 You Roll, I Will Cut Off 50% of The Suck Up Points From Your Paycheck", "You Are Not Allowed To Roll A 1", "BOOOOOOO! You Stink!"];
    rand2 = wordList[Math.floor(Math.random() * wordList.length)];



    spoint = spoint + rand1 * presmulti
    document.getElementById("premult").innerHTML = presmulti;

    document.getElementById("spointout").innerHTML = rand1;

    if (spoint > 100 * presmulti * 0.9) {
        spoint = 0;
        presmulti += 1;
    }
    if (rand1 == 1) {
        document.querySelector("button").style.display = "none";

        setTimeout(function () {
            spoint = spoint / 1.2;
            document.getElementById("spointtot").innerHTML = spoint;
        }, 1000);
        setTimeout(function () {
            document.querySelector("button").style.display = "block";
        }, 5000);
        spoint -= 2;
        document.getElementById("scold").innerHTML = rand2;
    }

    document.getElementById("spointtot").innerHTML = spoint;
}