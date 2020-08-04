const request = require('request-promise-native');

// 
/*
Have to fertch IP address
use ip address to get geolocations coords
feeed that into ISS api
*/
request(`https://api.ipify.org?format=json`)
  .then( (data) => {
    const ipAddress = JSON.parse(data).ip;
    
    console.log(ipAddress);
    return request(`https://ipvigilante.com/${ipAddress}`)
  })
  .then( (coords) => {
    console.log(coords);
    const parsedCoords = JSON.parse(coords);
    const latitude = Number(parsedCoords.latitude);
    const longitude = Number(parsedCoords.longitude);
    return request(`http://api.open-notify.org/iss-pass.json?lat=${latitude}&lon=${longitude}`);
  })
  .then( (transitTimes) => {
    console.log(transitTimes);
  })
  .catch ((error) => {
  console.log("It didn't work: ", error.message);
});
  