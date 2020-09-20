var express = require('express');
var kafka = require('kafka-node');
var app = express();

require('dotenv').config();

var bodyParser = require('body-parser')
app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));

var Twit = require('twit');

var Producer = kafka.Producer,
    client = new kafka.KafkaClient(),
    producer = new Producer(client);

var T = new Twit({
    consumer_key: process.env.CONSUMER_KEY,
    consumer_secret: process.env.CONSUMER_SECRET,
    access_token: process.env.ACCESS_TOKEN,
    access_token_secret: process.env.ACCESS_TOKEN_SECRET,
    timeout_ms: 60 * 1000,  // optional HTTP request timeout to apply to all requests.
    strictSSL: true,     // optional - requires SSL certificates to be valid.
});

//
// filter the public stream by english tweets containing `#apple`
//

var stream = T.stream('statuses/filter', { track: '#apple', language: 'en' })

producer.on('ready', function () {
    console.log('Producer is ready');
});

producer.on('error', function (err) {
    console.log('Producer is in error state');
});

stream.on('tweet', function (tweet) {
    console.log("The tweet:", tweet);
    console.log("created at - ",tweet.created_at);
    console.log("text of tweet - ", tweet.text);
    const messages = JSON.stringify({
        "queryString" : "apple",
        "createdAt": tweet.created_at,
        "user": tweet.user.name
    })
    let payloads = [
        { "topic": "NodePOCTopic", messages, partition: 0 }
    ]
    producer.send(payloads, function (err, data) {
        console.log("apple found");
        console.log(data);
    });
})

var stream2 = T.stream('statuses/filter', { track: '#microsoft', language: 'en' })

stream2.on('tweet', function (tweet) {
    const messages = JSON.stringify({
        "queryString" : "microsoft",
        "createdAt": tweet.created_at,
        "user": tweet.user.name
    });
    let payloads = [
        { "topic": "NodePOCTopic", messages, partition: 0 }
    ]
    producer.send(payloads, function (err, data) {
        console.log(data);
    });
    console.log("stream 2 created at " + tweet.created_at);
    console.log("stream 2 text", tweet.text);
})