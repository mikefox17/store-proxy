//fetch to bring in JSON file
let data;
fetch("./stores.json")
  .then(function(u) {
    return u.json();
  })
  .then(function(json) {
    data = json;
    console.log(data);

    //zip1 will be an input.value(), zip2 comes from the JSON/DB

    const apikey = "824NJ6OE2SPX26JSJRS3";
    let zip1 = 20002;
    let zip2;
    // for loop setting zip2 then making a fetch to compare zip1 and zip2 via the API
    for (var i = 0; i < data.length; i++) {
      zip2 = data[i].zipcode;
      console.log("ZIP2 = " + zip2);
      fetch(
        `https://cors-anywhere.herokuapp.com/https://api.zip-codes.com/ZipCodesAPI.svc/1.0/CalculateDistance/ByZip?fromzipcode=${zip1}&tozipcode=${zip2}&&key=${apikey}
        `
      )
        .then(function(response) {
          return response.json();
        })
        .then(function(myJson) {
          console.log(JSON.stringify(myJson.DistanceInMiles));

          //hard time sorting by distance
          function compareNumbers(distance) {
            var distance = myJson.DistanceInMiles;

            return distance - distance;

            distance.sort(compareNumbers);
          }
        });
    }
  });
