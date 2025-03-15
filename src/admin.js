const { kafka } = require("./client");
const { PAYMENT_TRANSACTIONS_TOPIC } = require("./constants");

async function init() {
    const admin = kafka.admin();
    console.log("Admin connecting...");
    admin.connect();
    console.log("Adming Connection Success...");

    console.log(`Creating Topic ${PAYMENT_TRANSACTIONS_TOPIC}...`);
    await admin.createTopics({
        topics: [
            {
                topic: PAYMENT_TRANSACTIONS_TOPIC,
                numPartitions: 2,
            },
        ],
    });
    console.log("Topic Created Successfully...");

    console.log("Disconnecting Admin..");
    await admin.disconnect();
}

init();