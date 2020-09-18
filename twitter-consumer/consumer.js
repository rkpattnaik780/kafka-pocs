var app = require('express')();
var http = require('http').createServer(app);

var io = require('socket.io')(http);

var kafka = require('kafka-node'),
    Consumer = kafka.Consumer,
    client = new kafka.KafkaClient(),
    consumer = new Consumer(client,
        [{ topic: 'NodePOCTopic', offset: 0, auto_offset_reset: 'latest' }],
        {
            autoCommit: false,
            fromOffset: false
        }
    );

    let appleCount = 0;
    let redHatCount = 0;

    io.on('connection', (socket) => {
        console.log('a user connected');
    });

    consumer.on('message', function (message) {
        message.value = JSON.parse(message.value);
        if(message.value.queryString === "apple"){
            appleCount ++;
        }
        if(message.value.queryString === "redhat"){
            redHatCount ++;
        }

        console.log(message.value);

        console.log("appleCount", appleCount);
        console.log("redhatcount", redHatCount);
    });
    
    consumer.on('error', function (err) {
        console.log('Error:',err);
    })
    
    consumer.on('offsetOutOfRange', function (err) {
        console.log('offsetOutOfRange:',err);
    })

    io.on('connection', (socket) => {
        console.log('a user connected');
      });

    http.listen(8080, () => {
        console.log('listening on *:3000');
      });