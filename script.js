var apiKey = "0f29c2c8847681ce41550d39bd7e97ef"

var queryURL =   "https://api.openweathermap.org/data/2.5/weather?q=" + "city" + "&appid=" + apiKey;




//var img = $("<img>").attr("src", "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png");

$(document).ready(function(){

  //show the weather in Rochester,NY
  function showWeather(){
    var cityDataOne = $(".cityOne").val();
    var queryURLOne =  "https://api.openweathermap.org/data/2.5/weather?q=" + "Rochester,Ny" + "&appid=" + apiKey

    $.ajax({
      url: queryURLOne,
      method: "GET"
    }).then(function(response){

    
    })
    var cityDataTwo = $(".cityTwo").val();
    var queryURLTwo=  "https://api.openweathermap.org/data/2.5/weather?q=" + "St. Paul, MN" + "&appid=" + apiKey

    $.ajax({
      url: queryURLTwo,
      method: "GET"
    }).then(function(response){

    
    })
    var cityDataThree = $(".cityThree").val();
    var queryURLThree =  "https://api.openweathermap.org/data/2.5/weather?q=" + "New York City, NY" + "&appid=" + apiKey

    $.ajax({
      url: queryURLThree,
      method: "GET"
    }).then(function(response){

    
    })
    var cityDataFour = $(".cityFour").val();
    var queryURLFour =  "https://api.openweathermap.org/data/2.5/weather?q=" + "San Diego, CA" + "&appid=" + apiKey

    $.ajax({
      url: queryURLFour,
      method: "GET"
    }).then(function(response){

    
    })
    var cityDataFive = $(".cityFive").val();
    var queryURLFive =  "https://api.openweathermap.org/data/2.5/weather?q=" + "Miami, FL" + "&appid=" + apiKey

    $.ajax({
      url: queryURLFive,
      method: "GET"
    }).then(function(response){

    
    })
    var cityDataSix= $(".citySix").val();
    var queryURLSix =  "https://api.openweathermap.org/data/2.5/weather?q=" + "Buffalo, Ny" + "&appid=" + apiKey

    $.ajax({
      url: queryURLSix,
      method: "GET"
    }).then(function(response){
  
    
    })
  }

  