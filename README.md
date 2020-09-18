# Kafka Node POC

## Pre-requisites

Your machine should have yarn , Node and Kafka installed. 
A full guide for installing each of these is given below. 
Before you install any packages, ensure your package list is up to date with:

    sudo apt-get update

#### Kafka Installation
<br>

* [Ubuntu installation](https://www.digitalocean.com/community/tutorials/how-to-install-apache-kafka-on-ubuntu-18-04)


#### Install yarn

    sudo apt update
    sudo apt install yarn

#### Install node

    sudo npm cache clean -f
    sudo npm install -g n
    sudo n stable

## Local setup

#### Set the environment variables

Rename `twit-poc/.env.example` to `.env`. The environment variables are to be set after creating a [twitter dev](https://developer.twitter.com/en) account. Replace the pre-pouplated environment variables.

#### Clone the repo

    git clone https://github.com/rkpattnaik780/kafka-pocs.git

#### Create a topic (for example NodePOCTopic)

    bin/zookeeper-server-start.sh config/zookeeper.properties

    bin/kafka-server-start.sh config/server.properties
    
    ./bin/kafka-topics.sh --create --zookeeper localhost:2181 --replication-factor 1 --partitions 1 --topic NodePOCTopic

#### Running the twitter producer

    cd twit-poc
    yarn

    node twitter-example.js

#### Running the twitter consumer

    cd twitter-consumer
    yarn

    node consumer.js

#### Running the client app

    cd twitter-react
    yarn

    yarn start
