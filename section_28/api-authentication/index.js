import express from "express";
import axios from "axios";

const app = express();
const port = 3000;
const API_URL = "https://secrets-api.appbrewery.com/";

//TODO 1: Fill in your values for the 3 types of auth.
const yourUsername = "ammar1";
const yourPassword = "ammar";
const yourAPIKey = "24b908cd-47d0-43f3-becc-54e3a68d8d20";
const yourBearerToken = "d8ec5a59-f096-437a-8a9e-d95c0ef6ba13";
app.set("view engine", "ejs");
app.get("/", (req, res) => {
  res.render("index.ejs", { content: "API Response." });
});

app.get("/noAuth", async (req, res) => {
  //TODO 2: Use axios to hit up the /random endpoint
  //The data you get back should be sent to the ejs file as "content"
  //Hint: make sure you use JSON.stringify to turn the JS object from axios into a string.
 // https://secrets-api.appbrewery.com/random
  try {
    const response = await axios.get('https://secrets-api.appbrewery.com/random');
    const content = response.data;
    console.log(content);
    res.render('index', { content: JSON.stringify(content) });
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).send('Error fetching data');
  }
});


app.get("/basicAuth", async (req, res) => {
  //TODO 3: Write your code here to hit up the /all endpoint
  //Specify that you only want the secrets from page 2
  //HINT: This is how you can use axios to do basic auth:
  // https://stackoverflow.com/a/74632908
  /*
   axios.get(URL, {
      auth: {
        username: "abc",
        password: "123",
      },
    });
  */

  try {
    const response = await axios.get('https://secrets-api.appbrewery.com/all?page=1', {
      auth: {
        username: yourUsername,
        password: yourPassword,
      },
    });
    const result = response.data;
    console.log(result);
    res.render('index', { content: JSON.stringify(result) });
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).send('Error fetching data');
  }   

});


app.get("/apiKey", async (req, res) => {
  //TODO 4: Write your code here to hit up the /filter endpoint
  //Filter for all secrets with an embarassment score of 5 or greater
  //HINT: You need to provide a query parameter of apiKey in the request.
  try {
    const response = await axios.get(`https://secrets-api.appbrewery.com/filter?score=5&apiKey=${yourAPIKey}`, {
      auth: {
        username: yourUsername,
        password:yourPassword 
        
      },
    });
    const result = response.data;
    console.log(result);
    res.render('index', { content: JSON.stringify(result) });
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).send('Error fetching data');
  }   


});

app.get("/bearerToken", async (req, res) => {
  //TODO 5: Write your code here to hit up the /secrets/{id} endpoint
  //and get the secret with id of 42
  //HINT: This is how you can use axios to do bearer token auth:
  // https://stackoverflow.com/a/52645402
  /*
  axios.get(URL, {
    headers: { 
      Authorization: `Bearer <YOUR TOKEN HERE>` 
    },
  });
  */
  try {
    const response = await axios.get('https://secrets-api.appbrewery.com/secrets/42', {
      headers: { 
        Authorization: `Bearer ${yourBearerToken}` 
      },
    });
    const result = response.data;
    console.log(result);
    res.render('index', { content: JSON.stringify(result) });
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).send('Error fetching data');
  }   



});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
