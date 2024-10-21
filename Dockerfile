# 1: build
FROM maven:3.6.3-openjdk-17 AS build
WORKDIR /app
COPY . .
RUN mvn clean package -DskipTests

# 2: execucao
FROM openjdk:17-alpine3.14
WORKDIR /app
COPY --from=build /app/target/ToDoList-0.0.1.jar app.jar
EXPOSE 8080
CMD ["java", "-jar", "app.jar"]
