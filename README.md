# Basic Demostration of Kafka in NodeJS

## How to run?

1. Run the docker-compose
```bash 
docker-compose up -d
```

2. Run the admin script to create the topic
```bash
node src/admin.js
```

3. Run the producer script
```bash
node src/producer.js
```

4. Run the consumer script
```bash
node src/consumer.js {{group}} # where {{group}} is the consumer group
```

## Sending message to the topic

Producer terminal is listening for you to enter the message. For now the message format is "{{riderId}} {{amount}} {{status}}".
Eg. "1 1000 pending" then press enter.

The consumer will receive the message and print it to its terminal.