const express = require("express");
const app = express();

// import schema
const subscriberModel = require("./models/subscribers");

// This method is used to parse the incoming requests with JSON payloads and is based upon the bodyparser. This method returns the middleware that only parses JSON.
app.use(express.json());





// The app.get() routes the HTTP GET Requests to the path which is being specified with the specified callback functions.
// It will return h2 tag
app.get("/", async (req, res) => {
  res.send(`<h2> Get Youtube Subscriber </h2>`);
});





// TO GET DETAILS OF ALL SUBSCRIBERS
app.get("/subscribers", async (req, res) => {
  // to collect data from a database we apply .find() function
  let subscriber = await subscriberModel.find();

  //The try statement defines a code block to run (to try).
  try {
    res.send(subscriber);
  } catch (error) {
    // The catch statement defines a code block to handle any error.
    res.status(404).send(error);
  }
});





// TO GET NAMES AND SUBSCRIBED CHANNEL OF ALL SUBSCRIBERS
app.get("/subscribers/names", async (req, res) => {
  try {
    // to collect SELECTED data from a database we apply .find().select() function
    const subscriber = await subscriberModel.find().select({
      name: 1,
      subscribedChannel: 1,
      _id: 0,
    });
    // it will only return name and subscribed channel of all subscribers
    res.send(subscriber);
  } catch (error) {
    // sends error if url not found
    res.status(404).send(error);
  }
});





// TO GET DETAILS OF THE SUBSCRIBER WITH PARTICULAR ID
app.get("/subscribers/:_id", async (req, res) => {
  // .findById() functions finds data for the particular ID
  await subscriberModel
    .findById(req.params._id)
    .then((data) => {
        res.send(data);
    })

    .catch(() => {
      res.status(400).json({
        // sends error if ID does not match
        message: `id does not match`,
      });
    });
});





//  throws error message when wrong endpoint is inserted
app.use((req, res) => {
  res.status(404).send({ message: "error 404 , invalid route" });
});

module.exports = app;
