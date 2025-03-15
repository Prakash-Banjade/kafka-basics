const { kafka } = require("./client");
const readline = require("readline");
const { PAYMENT_TRANSACTIONS_TOPIC, PAYMENT_PENDING_PARTITION } = require("./constants");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

async function init() {
    const producer = kafka.producer();

    console.log("Connecting Producer");
    await producer.connect();
    console.log("Producer Connected Successfully");

    rl.setPrompt("> ");
    rl.prompt();

    rl.on("line", async function (line) {
        const [riderId, amount, status] = line.split(" ");
        await producer.send({
            topic: PAYMENT_TRANSACTIONS_TOPIC,
            messages: [
                {
                    partition: status === PAYMENT_PENDING_PARTITION ? 0 : 1, // 0 for pending, 1 for completed payments
                    key: "location-update",
                    value: JSON.stringify({ riderId, amount }),
                },
            ],
        });
    }).on("close", async () => {
        await producer.disconnect();
    });
}

init();