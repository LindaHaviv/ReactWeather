//we will load in axio (third party)
//create a function that gets retunred when someone requires the module
// we will call axios to fetch weather

var axios = require('axios');

// generate base url
//const is a var that can't be altered
const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=c288e2d0c474f6b1028007375541fd73&units=imperial';

module.exports = {
  getTemp: function(location) {
    var encodedLocation = encodeURIComponent(location);
    //es6 template strings
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

    //axios takes a url and fetches the results
    return axios.get(requestUrl).then(function (res) {
      if(res.data.cod && res.data.message) {
        throw new Error(res.data.message);
      } else {
        return res.data.main.temp;
      }
    }, function (res) {
      throw new Error(res.data.message);
    });
  }
} 


//30246d489d2627329840465fce83905a