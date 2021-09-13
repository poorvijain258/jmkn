class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    });

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

 start(){
    
      contestant = new Contestant();
      
        contestant.getCount();
      
      question = new Question()
      question.display();
    
  }

  play(){
    question.hide();
    background("orange");
    fill(0);
    textSize(30);
    text("Result of the Quiz",340, 50);
    text("----------------------------",320, 65);
    Contestant.getPlayerInfo();
    //Write a condition,data is not equal to undefined.
    if( allContestants !== undefined ){
      debugger;
      var display_Answers = 230;
      fill("red");
      textSize(15);
      //add a Note to help contestants understand the result.
      text("Contestant who answered correct are highlated in green color and those who answered wrong are highlited in blue color!",10,230);
     // Write a for loop statement and check the condition if the correct answer is equal to the contestant’s answer. 
     for(var plr in allContestants) {
      debugger; 
        var correctAns = "2";
        if (correctAns === allContestants[plr].answe)
          fill("Green");
        else
          fill("blue");

          display_Answers+=30;
        textSize(16);
        text(allContestants[plr].answer+":"+allContestants[plr].name,250,display_Answers)
      }
    } 
  }
}