//Tournament Winner
//Arrays

//my understandings
//an algorithm competition where multiple teams will compete against each other
//have multiple competitions and there will be one winner and one loser
//each team will compete each other one time - round robbin
//the team that wins, has the most num of points
//there will never be a tie
//you have an array in which there are strings, the first string is the home team and the second string is the away string
//the result array will have the winner of the competition and will be the same size as the competition array
//if you see a 0 in the result array, to that corresponding idx in the competition array the home team won and 1 means the away team has away
//competitions = [["HTML", "C#"], ["C#", "Python"], ["Python", "HTML"]}
//results = [0,0,1] --> Python won the tournament, they won 2 games

//solution
//HTML lost the first competition and C# won
//Python won the second competition, C#  lost
//Python won the last competition, HTML lost
//Python has 6 points, C# has 3 points and HTML has 0
//keep track of all the teams and how many points they have and then find the team with the most points
//use a hash map or hash table and in there we will have the name of the team and the value as their score
//loop through all the competition list and see who won each comp
//update their score, whoever won add three to their ds
//if the team is not in the ds, we assume they did not win a game
//we do this so on ...
//save the best team as a string in the beginning of the algorithm and we will continue to update this string
//

//time complexity 
//O(n) n is the number of competition we have aka the length of that list

//space complexity 
//O(k) //k is number of teams we have competing, our scores ds stores k and its values 


const HOME_TEAM_WON = 1; //we can use this constant variable

function tournamentWinner(competitions, results) { //takes in two parameters
    let currentBestTeam = ''; //keep track of our best team with the highest scores
    const scores = {[currentBestTeam]: 0}; //set it to the default value of 0

    for (let idx = 0; idx < competitions.length; idx++) { //access to the value and ele in our competition array with its indices 
        const result = results[idx]; //our corresponding index
        const [homeTeam, awayTeam] = competitions[idx]; //splits it into 2 components

        const winningTeam = result === HOME_TEAM_WON ? homeTeam : awayTeam; //the winning team is equal to the home team if the result if equal to the home team won else it is the away team

        updateScores(winningTeam, 3, scores); //update the score with the winning, three points and the total score

        if (scores[winningTeam] > scores[currentBestTeam]) { //if scores of the winning team is better than the score of the current best team
            currentBestTeam = winningTeam; //we update that winning team to the current best team
        }
    }
    return currentBestTeam;

}

function updateScores(team, points, scores) { 
    if (!(team in scores)) scores[team] = 0; //if the key does not exist in the ds, we need to add it then to the ds

    scores[team] += points; //add the points to the team given here
}

//recheck this cannot submit solution