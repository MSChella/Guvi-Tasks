fetch("https://restcountries.com/v3.1/all", { method: "GET" }) //fetches you the url.Promise
  .then((response) => response.json()) //string buffer to json file
  .then((data) => createCards(data))
  .catch((error) => console.error(error));


function createCards(data) {
  let ele = document.getElementById("card");

  data.forEach((e) => {
    let cardEle = document.createElement("div");

    cardEle.innerHTML = `<div class="container card card-header card-body row col-lg-4 col-sm-12" style="width: 18rem; margin: 30px;
            padding: 45px; background-color:rgb(227, 227, 96)" >

                <h5 >${e.name.common} </h5>
                <img src="${e.flags.png}"></img>
                <p> Capital: ${e.capital}</p>
                <p> Latitude:${e.latlng[0]}</p>
                <p> Longitude: ${e.latlng[1]}</p>

                <button class="btn btn-primary" id="btn-weather">Click for Weather</button>
            </div>`;
    ele.appendChild(cardEle);

  
  });
}



// const keyAPI = "e3e1ba13519a21988eaa445fddb3cecb";
// document.getElementById('card').addEventListener('click', function (e) {
//     if (e.target && e.target.matches('.btn.btn-primary')) {
//         console.log("clicked");
//         fetchWeatherAPI();
//     }
// });

// fetch('https://restcountries.com/v3.1/all', { method: 'GET' })//fetches you the url.Promise
//     .then(response => response.json())//string buffer to json file
//     .then(data => createCards(data))
//     .catch(error => console.error(error))

// function createCards(data) {

//     let ele = document.getElementById("card");


//     data.forEach((e) => {
//         let cardEle = document.createElement('div');


//         cardEle.innerHTML =
//             `<div class="container card card-header card-body row col-lg-4 col-sm-12" style="width: 18rem; margin: 30px;
//             padding: 45px; background-color:rgb(227, 227, 96)" >
                           
//                 <h5 >${e.name.common} </h5>
//                 <img src="${e.flags.png}"></img>
//                 <p> Capital: ${e.capital}</P>
//                 <p> Latitude: ${e.latlng[0]}</p>
//                 <p> Longitude: ${e.latlng[1]}</p>
//                 <button class="btn btn-primary" id="btn-weather">Click for Weather</button>
//             </div>`
//         ele.appendChild(cardEle)

//     });
// }

// let eleBtn = document.querySelectorAll(".btn.btn-primary");

// let lat = 44.34
// let long = 10.99

// eleBtn.forEach((btn) => {

//     btn.addEventListener('click', () => {

//         console.log("clicked")
//         fetchWeatherAPI(lat, long);
//     });


// });


// async function fetchWeatherAPI(lat, long) {

//     await fetch(`https://api.openweathermap.org/data/2.5/weather?${lat}&${long}&appid=${keyAPI}`)
//         .then(res => res.json())
//         .then(result => console.log(result))

// }
// fetchWeatherAPI()