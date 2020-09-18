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
    let microsoftCount = 0;

    io.on('connection', (socket) => {
        console.log('a user connected');

        consumer.on('message', function (message) {
            console.log("entire obj", message);
            console.log("raw_string", typeof(message.value))
            try {
                if(typeof(message.value) === "string") message.value = JSON.parse(message.value);
                if(message.value.queryString === "apple"){
                    appleCount ++;
                }
                if(message.value.queryString === "microsoft"){
                    microsoftCount ++;
                }
        
                console.log(message.value);
        
                console.log("appleCount", appleCount);
                console.log("microsoftcount", microsoftCount);
        
                socket.emit("tweet_received", {
                    appleCount,
                    microsoftCount
                })
                } catch (e) {
                    console.log(e);
                }
            
        });
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
        console.log('listening on *:8080');
      });