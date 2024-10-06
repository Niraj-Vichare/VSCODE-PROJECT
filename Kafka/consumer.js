const {Kafka} = require("kafkajs");
require('dotenv').config();

init();
async function init(){
    try{
        const kafka = new Kafka({
            brokers:[process.env.BROKER_IP],
            clientId:"notificationHub",
        });

        const consumer = kafka.consumer({"groupId":"test"});
        console.log("Consumer Connecting...");
        await consumer.connect();
        console.log("Consumer Connected!");
        consumer.subscribe({
            topic:"notification",
            fromBeginning:true
        });
        
        await consumer.run({
            eachMessage:async result =>{
                console.log(`Reviceived message value : ${result.message.value} on partition ${result.partition}`);
            }
        })
    }catch(ex){
        console.error(`Something went wrong ${ex}`);
    }finally{
        
    }
}