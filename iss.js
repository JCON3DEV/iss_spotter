const request = require('request');
const fetchMyIP = function(callback) {
  // use request to fetch IP address from JSON API
  request(`https://api.ipify.org?format=json`, (error, response, body) => {
    // console.log('error:', error);
    // console.log(response.statusCode);
    // console.log('body:', body);
    if (error) {
      callback(error, null);
      return;
    }
    // if non-200 status, assume server error
    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${body}`;
      callback(Error(msg), null);
      return;
    }

    // if we get here, all's well and we got the data
    
    const ip = JSON.parse(body);
    //error stating that below is not a function;
    // callback(null, ip);
    console.log(ip);
    // return ip;
  });
};

const fetchCoordsByIP = function(ip, callback) {
  const request = require('request');
  request('https://ipvigilante.com/8.8.8.8', function(error, response, body) {
    if (error) {
      callback(error, null);
      return;
    }
    
    if (response.statusCode !== 200) {
      callback(Error(`Status Code ${response.statusCode} when fetching Coordinates for IP: ${body}`), null);
      return;
    }
    const { latitude, longitude }  = JSON.parse(body).data;
    console.log('lat/lng data:', { latitude, longitude });
    // below, cant figure how this works yet
    // callback(null, { latitude, longitude });
  });

};

/**
 * Makes a single API request to retrieve upcoming ISS fly over times the for the given lat/lng coordinates.
 * Input:
 *   - An object with keys `latitude` and `longitude`
 *   - A callback (to pass back an error or the array of resulting data)
 * Returns (via Callback):
 *   - An error, if any (nullable)
 *   - The fly over times as an array of objects (null if error). Example:
 *     [ { risetime: 134564234, duration: 600 }, ... ]
 */
const fetchISSFlyOverTimes = function (coords, callback) {
  request('http://api.open-notify.org/iss-pass.json?lat=LAT&lon=LON', function (error, response, body) {
    // console.error('error:', error); // Print the error if one occurred
    // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    // console.log('body:', body); // Print the HTML for the Google homepage.
    if (error) {
      // callback(error, null);
      // return;
    }

    if (response.statusCode !== 200) {
      // callback(Error(`Status Code ${response.statusCode} when fetching ISS pass times: ${body}`), null);
      // return;
    }
    const issData = JSON.parse(body).data;
    // callback(null, passes);
    console.log("iss times and location:", issData);
    return issData;
    // {timestamp, iss_position} 
  });


};


module.exports = {
  fetchMyIP,
  fetchCoordsByIP,
  fetchISSFlyOverTimes
};