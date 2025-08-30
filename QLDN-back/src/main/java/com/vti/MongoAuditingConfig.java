package com.vti;

import org.springframework.context.annotation.Configuration;
import org.springframework.data.mongodb.config.EnableMongoAuditing;

@Configuration
@EnableMongoAuditing
public class MongoAuditingConfig {
    // Không cần thêm gì nữa, chỉ cần bật annotation @EnableMongoAuditing là đủ.
}

