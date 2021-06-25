for(var i=0; i<document.querySelectorAll(".btn").length; i++){
    document.querySelectorAll("button")[i].addEventListener("click", function(){
        sounds(this.innerHTML);
        animation(this.innerHTML);
    })
}

document.querySelector(".btn-play").addEventListener("click", function(){
    var key = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var clicked = setInterval(function(){
            document.querySelector("."+key[Math.floor(Math.random()*26)]).click();
    }, 300);
    document.querySelector(".btn-stop").addEventListener("click", function(){
        clearInterval(clicked);
    })
})

document.addEventListener("keydown", function(event){
    sounds(event.key);
    animation(event.key);
})

function sounds(key){
    switch(key){
        case "a":
            var a = new Audio("sounds/A.mp3");
            a.play();
            break;
        case "b":
            var b = new Audio("sounds/B.mp3");
            b.play();
            break;
        case "c":
            var c = new Audio("sounds/C.mp3");
            c.play();
            break;
        case "d":
            var d = new Audio("sounds/D.mp3");
            d.play();
            break;
        case "e":
            var e = new Audio("sounds/E.wav");
            e.play();
            break;
        case "f":
            var f = new Audio("sounds/F.mp3");
            f.play();
            break;
        case "g":
            var g = new Audio("sounds/G.mp3");
            g.play();
            break;
        case "h":
            var h = new Audio("sounds/H.mp3");
            h.play();
            break;
        case "i":
            var i = new Audio("sounds/I.wav");
            i.play();
            break;
        case "j":
            var j = new Audio("sounds/J.mp3");
            j.play();
            break;
        case "k":
            var k = new Audio("sounds/K.mp3");
            k.play();
            break;
        case "l":
            var l = new Audio("sounds/L.wav");
            l.play();
            break;
        case "m":
            var m = new Audio("sounds/M.mp3");
            m.play();
            break;
        case "n":
            var n = new Audio("sounds/N.mp3");
            n.play();
            break;
        case "o":
            var o = new Audio("sounds/O.wav");
            o.play();
            break;
        case "p":
            var p = new Audio("sounds/P.mp3");
            p.play();
            break;
        case "q":
            var q = new Audio("sounds/Q.mp3");
            q.play();
            break;
        case "r":
            var r = new Audio("sounds/R.wav");
            r.play();
            break;
        case "s":
            var s = new Audio("sounds/S.mp3");
            s.play();
            break;
        case "t":
            var t = new Audio("sounds/T.wav");
            t.play();
            break;
        case "u":
            var u = new Audio("sounds/U.wav");
            u.play();
            break;
        case "v":
            var v = new Audio("sounds/V.mp3");
            v.play();
            break;
        case "w":
            var w = new Audio("sounds/W.mp3");
            w.play();
            break;
        case "x":
            var x = new Audio("sounds/X.mp3");
            x.play();
            break;
        case "y":
            var y = new Audio("sounds/Y.wav");
            y.play();
            break;
        case "z":
            var z = new Audio("sounds/Z.mp3");
            z.play();
            break;
    }
}

function animation(key){
    document.querySelector("."+key).classList.add("pressed");
    setTimeout(function(){
        document.querySelector("."+key).classList.remove("pressed");
    }, 100);
}