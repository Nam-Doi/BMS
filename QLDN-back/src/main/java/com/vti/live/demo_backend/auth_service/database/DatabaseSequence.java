package com.vti.live.demo_backend.auth_service.database;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;


@Document(collection = "database_sequences")
public class DatabaseSequence {
    @Id
    private String id;
    private long seq;
    public DatabaseSequence() {}
    public String getId() {
        return id;
    }
    public void setId(String id) {
        this.id = id;
    }
    public long getSeq() {
        return seq;
    }
    public void setSeq(long seq) {
        this.seq = seq;
    }
}

