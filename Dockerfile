# syntax=docker/dockerfile:1
FROM openjdk:11
ADD target/springboot-docker-0.0.3-SNAPSHOT.jar .
CMD java -jar springboot-docker-0.0.3-SNAPSHOT.jar
