var express = require("express");
var alexa = require("alexa-app");
var express_app = express();

var app = new alexa.app("sample");

app.intent("hi", {}, function (request, response) {
    response.say("hi, how are you ");
});

app.intent("hello", {}, function (request, response) {
    response.say("hello, how do you do");
});

app.intent("number", {
    "slots": { "number": "AMAZON.NUMBER" },
    "utterances": ["say the number {-|number}"]
},
    function (request, response) {
        var number = request.slot("number");
        response.say("You asked for the number " + number);
    }
);

// setup the alexa app and attach it to express before anything else
app.express({ expressApp: express_app });