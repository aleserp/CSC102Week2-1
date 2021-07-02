function countdownTimer() {
    console.log("sounter timer working");
    var currTime = 50;
    document.getElementById("CountdownStatus").innerHTML = currTime;
    currTime = currTime - 5;

    //Timer for 45
    setTimeout(function(){
        //stuff in here happens after timeout
        document.getElementById("CountdownStatus").innerHTML = currTime;
        currTime = currTime - 5;
    }, 5000);

    //Timer for 40
    setTimeout(function(){
        //stuff in here happens after timeout
        document.getElementById("CountdownStatus").innerHTML = currTime;
        currTime = currTime - 5;
    }, 1000);

    //Timmer for 35
    setTimeout(function(){
        //stuff in here happens after timeout
        document.getElementById("CountdownStatus").innerHTML = currTime;
        currTime = currTime - 5;
    }, 15000);

    //Timmer for 30
     setTimeout(function(){
        //stuff in here happens after timeout
        document.getElementById("CountdownStatus").innerHTML = currTime;
        currTime = currTime - 5;
    }, 20000);

        //Timer for 25
    setTimeout(function(){
        //stuff in here happens after timeout
        document.getElementById("CountdownStatus").innerHTML = currTime;
        currTime = currTime - 5;
    }, 25000);
    
    //Timer for 20
    setTimeout(function(){
        //stuff in here happens after timeout
        document.getElementById("CountdownStatus").innerHTML = currTime;
        currTime = currTime - 5;
    }, 30000);

    //Timer for 15
    setTimeout(function(){
        //stuff in here happens after timeout
        document.getElementById("CountdownStatus").innerHTML = currTime;
        currTime = currTime - 5;
    }, 35000);

    //Timer for 10
    setTimeout(function(){
        //stuff in here happens after timeout
        document.getElementById("CountdownStatus").innerHTML = currTime;
        currTime = currTime - 5;
    }, 40000);

    //Timer for 5
    setTimeout(function(){
        //stuff in here happens after timeout
        document.getElementById("CountdownStatus").innerHTML = currTime;
        currTime = currTime - 5;
    }, 45000);
    
    //Blastoff
    setTimeout(function(){
        //stuff in here happens after timeout
        document.getElementById("CountdownStatus").innerHTML = "Blastoff!";
        currTime = currTime - 5;
    }, 50000);

}


function playCraps(){
    console.log("Craps game initated.");
    //limit possible values for die1 and die2 inbetween 1 and 6
    var die1 = Math.ceil(Math.random() * 6);
    var die2 = Math.ceil(Math.random() * 6);
    document.getElementById("die1Res").innerHTML = die1;
    document.getElementById("die2Res").innerHTML = die2;
    //dieSum is the total values of die1 and die2
    var dieSum = die1 + die2;
    document.getElementById("diceSum").innerHTML = dieSum;
    // || can be used as "or"
    if(dieSum == 7 || dieSum == 11 ){
        document.getElementById("crapsStatus").innerHTML = "Craps! You lose!";
        // if die1 and die2 return doubles return a win message
    }else if(die1 == die2 && die1 % 2 == 0){
        document.getElementById("crapsStatus").innerHTML = "Doubles! You win.";
    }
    // if previous conditions are not true, return the following message
    else{
        document.getElementById("crapsStatus").innerHTML = "You did not lose and you did not win. Please try again.";
    }
    

}