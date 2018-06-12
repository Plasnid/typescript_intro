function startGame(e){
    //starting a new game
    //I love notes, they're awesome!
    let messagesElement = document.getElementById("messages");
    messagesElement.innerText = "I likes me a sammich!";
    console.log("bork bork bork! de bork o borkness! Oh how I love to bork!");
}

document.getElementById("gameStarter").addEventListener('click', startGame);