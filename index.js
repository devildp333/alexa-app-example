var express = require("express");
var alexa = require("alexa-app");

var PORT = process.env.PORT || 80;
var app = express();

// Configrate the intents and utterances of the Alexa skill
var config = require("./config");

// ALWAYS setup the alexa app and attach it to express before anything else.
var alexaApp = new alexa.app("test");

alexaApp.express({
  expressApp: app,

  // verifies requests come from amazon alexa. Must be enabled for production.
  // You can disable this if you're running a dev environment and want to POST
  // things to test behavior. enabled by default.
  checkCert: false,

  // sets up a GET route when set to true. This is handy for testing in
  // development, but not recommended for production. disabled by default
  debug: true
});

// now POST calls to /test in express will be handled by the app.request() function

// from here on you can setup any other express routes or middlewares as normal
app.set("view engine", "ejs");

alexaApp.launch(function (request, response) {
  response.say("You launched the app!");
});

// add dictionary to alexa app
alexaApp.dictionary = config.dictionary;


// add interaction model to alexa app
for (var ele of config.interaction_model) {
  alexaApp.intent(
    ele.intent_name, {
      slots: ele.slots,
      utterances: ele.utterances
    }, function (request, response) {
      response.say(ele.response);
    }
  );
}

app.listen(PORT);
console.log("Listening on port " + PORT + ", try http://localhost:" + PORT + "/test");