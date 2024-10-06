const {Kafka} = require("kafkajs");
require('dotenv').config();

init();
async function init(){
    try{
        const kafka = new Kafka({
            brokers:[process.env.BROKER_IP],
            clientId:"notificationHub",
        });

        const admin = kafka.admin();
        console.log("Admin connecting...");
        await admin.connect();
        console.log("Admin Connected!");
    
        console.log("Creating the topic: [notification]");
        await admin.createTopics({
            topics:[
                {
                    topic:"notification",
                    numPartitions:2,
                },
            ],
            
        });
        console.log("Topic is created Successfully [notification]");
        await admin.disconnect();
    }catch(ex){
        console.error(`Something went wrong ${ex}`);
    }finally{
        process.exit(0);
    }
}