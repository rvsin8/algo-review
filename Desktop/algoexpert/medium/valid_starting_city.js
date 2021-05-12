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

//solution 1
//simply going through all the city and see if they work as a valid starting city 
//brute force approach
//runs in n^2 time 

//solution 2 more optimal
//we know we will have 1 valid city
//the amount of fuel given will always equal to the distance
//the city where we have the least amount of gas in must be the city we start at
//we are trying to pick the city with the minimum number of gas
//we will iterate through every city starting with city 0 and return the city with the least amount of gas


//time complexity 
//O(n)

//space complexity 
//O(1)


function validStartingCity(distances, fuel, mpg) {
    const numberOfCities = distances.length; //length of distances gives us number of cities 
    let milesRemaining = 0; //miles start at 0

    let indexOfStartingCityCandidates = 0; //first city
    let milesRemainingAtStartingCityCandidate = 0; //no gas at the beginning

    for (let cityIdx = 1; cityIdx < numberOfCities; cityIdx++) { //loop through the cities
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