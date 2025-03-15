const { Kafka } = require("kafkajs");

exports.kafka = new Kafka({
    clientId: "my-kafka-app", // should be unique
    brokers: ["localhost:9092"], // should be in the form ip:port, don't include protocol i.e https://
});