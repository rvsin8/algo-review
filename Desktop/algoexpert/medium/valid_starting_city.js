//Valid Starting City
//Greedy Algorithms

//my understandings 

//time complexity 
//O(n)

//space complexity 
//O(1)


function validStartingCity(distance, fuel, mpg) {
    const numberOfCities = distances.length;
    let milesRemaining = 0;

    let indexOfStartingCityCandidates = 0;
    let milesRemainingAtStartingCityCandidate = 0;

    for (let cityIdx = 1; cityIdx < numberOfCities; cityIdx++) {
        const distanceFromPreviousCity = distances[cityIdx - 1];
        const fuelFromPreviousCity = fuel[cityIdx - 1];
        milesRemaining += fuelFromPreviousCity * mpg - distanceFromPreviousCity;
    }
}