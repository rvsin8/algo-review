
import { formatter } from "./util.js";
import { displayMap } from "./map.js";
import { cardComponentT1 } from "./components.js";
import { showChartHistory, showChartHistoryByCountry,showWorldWidePie } from "./charts.js";
const API_BASE_URL = `https://disease.sh/v2`;
const tosater = document.getElementById('error-toaster');
let errorFlag = 0;
const fetchData = async (urlPath, callback) => {
    fetch(`${API_BASE_URL}/${urlPath}`)
    .then(async (data) => {
        if (data.status===200) {
            data = await data.json()
            callback(data);
        }else {
            if(!errorFlag){
                errorFlag = 1;
                tosater.classList.remove('d-none');
                const tosaterText = document.querySelector('.error-text');
                tosaterText.innerHTML = "Data not found for your search";
                setTimeout(() => {
                    tosater.classList.add('d-none');
                    errorFlag = 0;
                }, 3000);
            }
        }
    }).catch(error => {
        console.log('Connection error', error)
    })
};

const createWordStatCards = (statData)=>{
    const worldStatsCardGroup = document.getElementById('worldStatCards');
    worldStatsCardGroup.innerHTML = "";
    const cardsGroupData = [
        {id:1,icon:"fas fa-users",title:"Total Cases",count: `${formatter.format(statData.cases)}`},
        {id:2,icon:"fas fa-users",title:"Today Cases",count: `${formatter.format(statData.todayCases)}`},
        {id:3,icon:"fas fa-procedures",title:"Total Deaths",count: `${formatter.format(statData.deaths)}`},
        {id:4,icon:"fas fa-procedures",title:"Today Deaths",count: `${formatter.format(statData.todayDeaths)}`},
        {id:5,icon:"fas fa-heart",title:"Total Recovered",count: `${formatter.format(statData.recovered)}`},
        {id:6,icon:"fas fa-heart",title:"Today Recovered",count: `${formatter.format(statData.todayRecovered)}`},
        {id:7,icon:"fas fa-heartbeat",title:"Total Active",count: `${formatter.format(statData.active)}`},
        {id:8,icon:"fas fa-hospital-user",title:"Critical",count: `${formatter.format(statData.critical)}`},
        {id:9,icon:"fas fa-vial",title:"Total Tests",count: `${formatter.format(statData.tests)}`},
        {id:10,icon:"fas fa-globe-europe",title:"Population",count: `${formatter.format(statData.population)}`},
        {id:11,icon:"fas fa-user-times",title:"Affected Countries",count: `${formatter.format(statData.affectedCountries)}`},
        // {id:12,icon:"fa fa-user",title:"Cases Per Million",count:statData.casesPerOneMillion},
    ];
    cardsGroupData.forEach((item)=>{
        worldStatsCardGroup.innerHTML += cardComponentT1(item);
    })
    showWorldWidePie(statData,".pieChart-worldwide");
}
const createCountriesStatCards = (statData)=>{
    document.getElementById('countryName').innerHTML = statData.country;
    const worldStatsCardGroup = document.getElementById('countryStatCards');
    worldStatsCardGroup.innerHTML = "";
    const cardsGroupData = [
        {id:1,icon:"fas fa-users",title:"Total Cases",count:`${formatter.format(statData.cases)}`},
        {id:2,icon:"fas fa-users",title:"Today Cases",count:`${formatter.format(statData.todayCases)}`},
        {id:3,icon:"fas fa-procedures",title:"Total Deaths",count: `${formatter.format(statData.deaths)}`},
        {id:4,icon:"fas fa-procedures",title:"Today Deaths",count: `${formatter.format(statData.todayDeaths)}`},
        {id:5,icon:"fas fa-heart",title:"Total Recovered",count: `${formatter.format(statData.recovered)}`},
        {id:6,icon:"fas fa-heart",title:"Today Recovered",count: `${formatter.format(statData.todayRecovered)}`},
        {id:7,icon:"fas fa-heartbeat",title:"Total Active",count: `${formatter.format(statData.active)}`},
        {id:8,icon:"fas fa-hospital-user",title:"Critical",count: `${formatter.format(statData.critical)}`},
        {id:9,icon:"fas fa-vial",title:"Total Tests",count: `${formatter.format(statData.tests)}`},
        {id:10,icon:"fas fa-globe-europe",title:"Population",count: `${formatter.format(statData.population)}`},
        // {id:11,icon:"fas fa-user-times",title:"Affected Countries",count:statData.affectedCountries},
        // {id:12,icon:"fa fa-user",title:"Cases Per Million",count:statData.casesPerOneMillion},
    ];
    cardsGroupData.forEach((item)=>{
        worldStatsCardGroup.innerHTML += cardComponentT1(item);
    })
    displayMap(statData);
    showWorldWidePie(statData,".pieChart-countrywide");
}

const updateSearchCountries = (data)=>{
    fetchData("countries/"+data, createCountriesStatCards);
    fetchData("historical/"+data, showChartHistoryByCountry);
}

window.addEventListener('DOMContentLoaded', (event) => {
    fetchData("historical/all", showChartHistory);
    fetchData("all", createWordStatCards);
    //load default country data
    updateSearchCountries('uk');

    const searchByNameForm = document.getElementById('searchByNameForm');
    searchByNameForm.addEventListener('submit', (e)=>{
        e.preventDefault();
        const searchText = searchByNameForm.elements['searchByNameInput'].value;
        updateSearchCountries(searchText);
    })

    // const selectByNameForm = document.getElementById('selectByNameForm');
    const searchByNameInput = document.getElementById('countrySelection');
    searchByNameInput.addEventListener('change', (e)=>{
        e.preventDefault();;
        const searchText = searchByNameInput.value;
        updateSearchCountries(searchText);
    })
})