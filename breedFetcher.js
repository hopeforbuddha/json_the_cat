const request = require("request");
const input = process.argv[2];


const fetcher = (breedName, callback) => {
request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
 if (error) {
  callback(error, null)
 }
 if (breedName) {
  const data = JSON.parse(body); 
  const description = data[0].description;
  callback(null, description)
 } else {
   callback("you're a big dumb dumb")
 }
});

};



fetcher(input, (err, description) => {
  if (err) {
    console.log("you messed up", err)
  } else {
    console.log(description)
  }
})