package com.exam.model;

import javax.persistence.*;

@Entity
@Table(name = "BlogSection")
public class BlogSection {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long Bid;
    private String Btitle;
    private  String BContent;

    public BlogSection() {
    }

    public BlogSection(Long bid, String btitle, String BContent) {
        Bid = bid;
        Btitle = btitle;
        this.BContent = BContent;
    }

    public Long getBid() {
        return Bid;
    }

    public void setBid(Long bid) {
        Bid = bid;
    }

    public String getBtitle() {
        return Btitle;
    }

    public void setBtitle(String btitle) {
        Btitle = btitle;
    }

    public String getBContent() {
        return BContent;
    }

    public void setBContent(String BContent) {
        this.BContent = BContent;
    }
}
