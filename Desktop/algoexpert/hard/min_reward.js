//Min Rewards
//Arrays

//my understandings
//given a list of integers and it represents a score that the students got in the final exam
//the order matters
//if a score is larger than another score next to it, it should have a higher reward and vice versa
//[8,4,2,1,3,6,7,9,5]
//[4,3,2,1,2,3,4,5,1], 25
//if we keep iterating through the array, we will probably need to iterate back to update some scores
//when we are iterating back, the rewards array at idx j --> rewards[i] = max {rewards[j] pr rewards[j+1]+1}
//if you iterate from left to right, when you got a score that is greater than the previous one you just give it the rewards that the previous one had + 1, if it is smaller than the previous one then you give it 1 and start iterating it back, then you assign the max we already we assigned or whatever they got + 1 and pick the max of that
//that was the naive approach --> O(n^2) time and O(n)

//optimal solution
//we will use a technique called peaks and values, local max's and local min's
//we have trends in our scores as if we were to graph them going up and down
//in that graph you can find local mins and maxs
//


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