const { kafka } = require("./client");
const { PAYMENT_TRANSACTIONS_TOPIC } = require("./constants");

/**
 * admin is responsible to create the topic, define no. of partitions in the topic and handle other configurations
 */
async function init() {
    const admin = kafka.admin();
    console.log("Admin connecting...");
    admin.connect();
    console.log("Adming Connection Success...");

    console.log(`Creating Topic ${PAYMENT_TRANSACTIONS_TOPIC}...`);
    await admin.createTopics({
        topics: [
            {
                topic: PAYMENT_TRANSACTIONS_TOPIC, // topic name
                numPartitions: 2, // no. of partitions
            },
        ],
    });
    console.log("Topic Created Successfully...");

    console.log("Disconnecting Admin..");
    await admin.disconnect();
}

init();