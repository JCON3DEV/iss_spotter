/**
 * Makes a single API request to retrieve the user's IP address.
 * Input:
 *   - A callback (to pass back an error or the IP string)
 * Returns (via Callback):
 *   - An error, if any (nullable)
 *   - The IP address as a string (null if error). Example: "162.245.144.188"
 */

//=========================================
// const { fetchMyIP } = require('./iss');
// This is to take the output of the file ./iss bu cal;ing index.js
//===========================================


const { fetchMyIP } = require('./iss');
const { fetchCoordsByIP } = require('./iss');
const { fetchISSFlyOverTimes } = require('./iss');

const exampleCoords = {latitude:37.38600, longitude:- 122.08380}

console.log(fetchMyIP());
console.log(fetchCoordsByIP());
console.log(fetchISSFlyOverTimes(exampleCoords));


