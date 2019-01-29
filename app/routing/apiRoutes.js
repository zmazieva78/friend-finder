// Shows the json and find the match

var friendChoices = require("../data/friends.js");

module.exports = function (app) {

    // Get Json data from Friends 
    app.get("/api/friends", function (req, res) {
        res.json(friendChoices);
    });

    app.post("/api/friends", function (req, res) {

        var newFriend = req.body;
        friendChoices.push(newFriend);

        //res.json(newFriend);
        console.log("Added new details");

        var findMatch = {
            name: "",
            photo: "",
            friendDifference: Infinity
        };

        var friend = req.body;
        var userScores = friend.scores;
        var matchScore;

        for (var i = 0; i < (friendChoices.length - 1); i++) {
            var friendsInList = friendChoices[i];
            matchScore = 0;

            // match scores
            for (var j = 0; j < friendsInList.scores.length; j++) {
                var friendsInListScore = friendsInList.scores[j];
                var currentUserScore = userScores[j];

                matchScore += Math.abs(parseInt(currentUserScore) - parseInt(friendsInListScore));
            }

            // replace the match 
            if (matchScore <= findMatch.friendDifference) {
                // Reset the findMatch to be the new friend.
                findMatch.name = friendsInList.name;
                findMatch.photo = friendsInList.photo;
                findMatch.friendDifference = matchScore;
            }

        }
        res.json(findMatch);
    });

}
