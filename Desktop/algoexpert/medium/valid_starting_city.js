//Valid Starting City
//Greedy Algorithms

//my understandings 
//we are given three inputs - distances, fuel and mpg all arrays
//we need to imagine we have cities mapped out in a circular row
//we have miles btw cities
//gallons of fuel we can collect at each city
//mpg for our imaginary car
//the amount of cities will be the same as the length of our distances and fuel 
//every city will be atleast 1 mile apart
//

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

        if (milesRemaining < milesRemainingAtStartingCityCandidate) {
            milesRemainingAtStartingCityCandidate = milesRemaining;
            indexOfStartingCityCandidates = cityIdx;
        }
    }
    return indexOfStartingCityCandidates;
}