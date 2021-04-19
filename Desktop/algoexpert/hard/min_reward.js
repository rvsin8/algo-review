//Min Rewards
//Arrays

//my understandings
//given a list of integers and it represents a score that the students got in the final exam
//the order matters
//if a score is larger than another score next to it, it should have a higher reward 


//time complexity 
//O(n)

//space complexity 
//O(n)

function minRewards(scores) {
    const rewards = scores.map(_ => 1);
    for (let i = 1; i < scores.length; i++) {
        if (scores[i] > scores[i - 1]) rewards[i] = rewards[i-1] + 1;
    }
    for (let i = scores.length - 2; i >= 0; i--) {
        if (scores[i] > scores[i+1]) rewards[i] = Math.max(rewards[i], rewards[i+1] + 1 );
    }
    return rewards.reduce((a,b) => a + b);
}