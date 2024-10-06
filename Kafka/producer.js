const {Kafka} = require("kafkajs");
require('dotenv').config();
const msg = process.argv[2];
init();
async function init(){
    try{
        const kafka = new Kafka({
            brokers:[process.env.BROKER_IP],
            clientId:"notificationHub",
        });

        const producer = kafka.producer();
        console.log("Producer Connecting...");
        await producer.connect();
        console.log("Producer Connected!");
        
        const partition = msg[0]<"N"?0:1;
        const result =await  producer.send({
            topic:"notification",
            messages:[
                {
                    value:msg,
                    partition:partition
                }
            ]
        });
        console.log("Produced Successfully",JSON.stringify(result));
        await producer.disconnect();
    }catch(ex){
        console.error(`Something went wrong ${ex}`);
    }finally{
        process.exit(0);
    }
}