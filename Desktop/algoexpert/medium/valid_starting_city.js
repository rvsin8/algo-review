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
//city 0 is 5 miles apart from city 1 and you can collect one gallon of gas that will allow you to travel ten more miles
//determine a valid starting city that will let us travel around without running out of gas
//distances = [5,25,15,10,15]
//fuel = [1,2,1,0,3]
//mpg = 10


//time complexity 
//O(n)

//space complexity 
//O(1)


function validStartingCity(distances, fuel, mpg) {
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