var score = 0;
let getal1;
let getalTwee;


function makeRandomNumber(){
    return Math.floor(Math.random()*99+1);
}

function showRandomNumber1(){
    let randomGetal = makeRandomNumber()
    document.querySelector(".getal1").innerHTML = randomGetal;
    return randomGetal;
}
getal1 = showRandomNumber1();


function showRandomNumber2(){
    let randomGetal2 = makeRandomNumber()
    document.querySelector(".getalTwee").innerHTML = randomGetal2;
    return randomGetal2;
}
getalTwee = showRandomNumber2();


function geefAntwoord(input){
    if(input == "hoger"){
       if (getal1 < getalTwee) {
           console.log("punt NIET gescored");
           document.body.style.backgroundColor = "red"; //niet goed 1
           score = score - 1;
           document.querySelector(".score").innerHTML = score;
           getal1 = showRandomNumber1();
           getalTwee = showRandomNumber2();
        
        }
        else{
        document.body.style.backgroundColor = "green"; //goed 2
            console.log("punt gescored");
            score = score + 1;
            document.querySelector(".score").innerHTML = score;
            getal1 = showRandomNumber1();
            getalTwee = showRandomNumber2();
       } //user heeft op de hoger knop geklikt
    }
    if (input == "lager"){
        if(getal1 > getalTwee){
            console.log("punt NIET gescored");
            document.body.style.backgroundColor = "red"; //niet goed  
            score = score - 1;
            document.querySelector(".score").innerHTML = score;
            getal1 = showRandomNumber1();
            getalTwee = showRandomNumber2();
        } else{
            document.body.style.backgroundColor = "green";
            console.log("punt gescored");
            score = score + 1;
            console.log(score);
            document.querySelector(".score").innerHTML = score;
            getal1 = showRandomNumber1();
            getalTwee = showRandomNumber2();
            // goed
            
            
        }
    }
}


