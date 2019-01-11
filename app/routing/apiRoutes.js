var path 			= require('path');
var friendList = require('../data/friends.js');

module.exports = function(app){
  //a GET route that displays JSON of all possible friends
  app.get('/api/friends', function(req,res){
    res.json(friendList);
  });

  app.post('/api/friends', function(req,res){
    //grabs the new friend's scores to compare with friends in friendList array
    var newFriendScores = req.body.scores;
    var scoresArray = [];
    var bestMatch = 0;

    //runs through all current friends in list
    for(var i=0; i<friendList.length; i++){
      var scoresDifferece = 0;
      //run through scores to compare friends
      for(var j=0; j<newFriendScores.length; j++){
        scoresDifferece += (Math.abs(friendList[i].scores[j]) - (newFriendScores[j]));
      }

      //push results into scoresArray
      scoresArray.push(scoresDifferece);
    }

    //after all friends are compared, find best match
    for(var i=0; i<scoresArray.length; i++){
      if(scoresArray[i] <= scoresArray[bestMatch]){
        bestMatch = i;
      }
    }

    //return bestMatch data
    var friend = friendList[bestMatch];
    res.json(friend);

    
  });
};