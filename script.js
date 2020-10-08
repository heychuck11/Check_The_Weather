var apiKey = "0f29c2c8847681ce41550d39bd7e97ef"



$(document).ready(function(){
  $("#searchBtn").on("click", function(){
    var cityName = $("#searchInput").val()
    $("#searchInput").val("")
    searchWeather(cityName)

  })

  function searchWeather(cityName){
    $.ajax({
      type: "GET",
      url: "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + apiKey,
      dataType: "json",
      success: function(data){
        console.log(data)
        $("#currentWeather").empty()
        var name = $("<h3>").text(data.name)
        //var date 
        var wind = $("<p>").addClass("card-text").text("wind speed" + data.wind.speed)
        var humid = $("<p>").addClass("card-tex").text("humidity" + data.main.humidity) 
        var temp = $("<p>").addClass("card-text").text("temp" + data.main.temp)
        //var icon
        var card = $("<div>").addClass("card")
        var cardBody = $("<div>").addClass("card-body")
        cardBody.append(name,wind,humid,temp)
        card.append(cardBody)
        $("#currentWeather").append(card)
        getForecast(cityName)

      }
     
    })

  }

function getForecast(cityName){
  $.ajax({
    type: "GET",
      url: "https://api.openweathermap.org/data/2.5/forecast?q=" + cityName + "&appid=" + apiKey,
      dataType: "json",
      success: function(data){
        console.log(data)
        for(i=0; i < data.list.length; i++){
        if(data.list[i].dt_txt.indexOf("15:00:00") !==1) {
          var col = $("<div>").addClass("col-md-2")
          var card = $("<div>").addClass("card bg-secondary text-white")
          var cardBody = $("<div>").addClass("card-body p-2")
          var name = $("<h5>").addClass("card-title").text(data.city.name)
          //var date
          //var icon
          var temp = $("<p>").addClass("card-text").text("t: " + data.list[i].main.temp)
          var humid = $("<p>").addClass("card-text").text("h: " + data.list[i].main.humidity)
          col.append(card.append(cardBody.append(name,temp,humid)))
          $("#forecastWeather").append(col)


        }
      }
      
      
      }
  })
}


})