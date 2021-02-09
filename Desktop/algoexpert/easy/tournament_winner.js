//Tournament Winner
//Arrays

//my understandings


//time complexity 
//O(n)

//space complexity 
//O(k)


const HOME_TEAM_WON = 1;

function tournamentWinner(competitions, results) {
    let currentBestTeam = '';
    const scores = {[currentBestTeam]: 0};

    for (let idx = 0; idx < competitions.length; idx++) {
        const result = results[idx];
        const [homeTeam, awayTeam] = competitons[idx];

        const winningTeam = result === HOME_TEAM_WON ? homeTeam : awayTeam;

        updateScores(winningTeam, 3, scores);

        if (scores[winningTeam] > scores[currentBestTeam]) {
            currentBesTeam = winningTeam;
        }
    }
    return currentBestTeam;

}

function updateScores(team, points, scores) {
    if (!(team in scores)) scores[team] = 0;

    scores[team] += points;
}