const axios = require("axios");

const options = {
  method: "GET",
  url: "https://vindecoder.p.rapidapi.com/decode_vin",
  params: { vin: "4F2YU09161KM33122" },
  headers: {
    "X-RapidAPI-Host": "vindecoder.p.rapidapi.com",
    "X-RapidAPI-Key": "427ff9ae32msh64c78338f5db243p197d7cjsn734f3d2ede26",
  },
};

axios
  .request(options)
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.error(error);
  });
