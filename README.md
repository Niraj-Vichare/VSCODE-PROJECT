# Kafka Notification Hub

## Overview

Kafka Notification Hub is a simple Node.js application that demonstrates how to create a Kafka topic, produce messages, and consume them using KafkaJS. This project can be used as a foundation for building a notification system using Apache Kafka.

## Features

- Creates a Kafka topic named `notification`.
- Produces messages to the `notification` topic based on user input.
- Consumes messages from the `notification` topic and displays them in the console.

## Prerequisites

- Node.js (v12 or higher)
- Apache Kafka (running locally or remotely)
- A `.env` file to store sensitive information (e.g., broker IP address)

## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/kafka-notification-hub.git
   cd kafka-notification-hub
2. **Install dependencies:**
   ```bash
   npm install
3. **Create a .env file:**
   ```bash
   BROKER_IP=your_broker_ip_here

  
