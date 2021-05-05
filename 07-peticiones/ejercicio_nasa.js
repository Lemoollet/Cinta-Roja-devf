const request = require("request");

const URL =
  "https://api.nasa.gov/neo/rest/v1/feed?start_date=2019-07-02&end_date=2019-07-09&api_key=EhlU2hxY7Twn8l0Qh1KlWsWwuV1c7Fg9LhNAIRdQ";

const getAsteroides = () => {
  return new Promise((resolve, reject) => {
    request.get(URL, (error, response, body) => {
      const asteroides = JSON.parse(body).near_earth_objects;
      console.log(asteroides);
      const aster = Object.values(asteroides);
      //console.log(aster)

      const potHazz = [];
      aster.forEach((e) => {
        e.forEach((e) => {
          if (e.is_potentially_hazardous_asteroid) potHazz.push(e);
        });
      });
      response.statusCode === 200
        ? resolve(potHazz)
        : reject("no hay respuesta");
    });
  });
};
getAsteroides()
  .then((res) => res)
  .catch((err) => err);
