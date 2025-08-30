//package com.xosotv.live.xosotv_backend.auth_service.database;
//
//import com.mongodb.client.MongoClient;
//import com.mongodb.client.MongoClients;
//import org.springframework.beans.factory.annotation.Value;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.data.mongodb.config.AbstractMongoClientConfiguration;
//import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;
//
//@Configuration
//@EnableMongoRepositories(basePackages = "com.xosotv.live.xosotv_backend.auth_service.repository")
//public class MongoConfig extends AbstractMongoClientConfiguration {
//    @Value("${spring.data.mongodb.database}")
//    private String databaseName;
//    @Value("${spring.data.mongodb.host}")
//    private String host;
//    @Value("${spring.data.mongodb.port}")
//    private int port;
//
//    @Override
//    protected String getDatabaseName() {
//        return databaseName;
//    }
//
//    @Override
//    public MongoClient mongoClient() {
//        String connectionString = "mongodb://" + host + ":" + port + "/" + databaseName;
//        return MongoClients.create(connectionString);
//    }
//}
