<!-- <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Weather App</title>
</head>
<body>
        <form>
        <label for="cityInput">City Name: </label>
        <input id="cityInput" type="text" name="cityName">
        <button type="submit">Go</button>
        </form>
</body>
</html>


let express = require("express");

const https = require("https");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
  
});

app.post("/", function(req, res){
    

    const query = req.body.cityName;
    const apiKey = "cccf066f94990ad5cc427f9687a4e67d";
    const units = "metric";
    const url = "https://api.openweathermap.org/data/2.5/weather?q=" + query + "&appid=" + apiKey +"&units=" + units+""
    
    https.get(url, function(response){
        console.log(response);
        response.on("data", function(data){
            const weatherData =  JSON.parse(data)
            const temp = weatherData.main.temp
            const weatherDescription = weatherData.weather[0].weatherDescription
            const icon = weatherData.weather[0].icon
            const imageURL = "http://openweathermap.org/img/" + icon + "wn/@2x.png"
            res.write("<p>The weather is currently " + weatherDescription + "</p>");
            res.write("<h1>The temperature in " + query+ " is " + temp + "degrees Celcius</h1>" )
            res.write("<img src=" + imageURL +">");
            res.send()
        })
    })
    
})

app.listen(3000, function(){
    console.log("Server is running on port 3000.");
}) -->