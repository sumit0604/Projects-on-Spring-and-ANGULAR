package com.exam.service.impl;

import com.exam.model.BlogSection;
import com.exam.repo.BlogRepository;
import com.exam.service.BlogService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class BlogServiceImpl implements BlogService {

    @Autowired
    private BlogRepository blogRepository;

    @Override
    public BlogSection CreateBlog(BlogSection blogSection) {
        return this.blogRepository.save(blogSection);
    }
}
