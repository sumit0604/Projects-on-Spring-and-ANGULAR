package com.exam.controller;


import com.exam.helper.ResourceNotFound;
import com.exam.model.BlogSection;
import com.exam.repo.BlogRepository;
import com.exam.service.BlogService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/blog")
public class BlogController {

    @Autowired
    private BlogService blogService;

    @Autowired
    private BlogRepository blogRepository;


    @PostMapping("/")
    public BlogSection addBlog(@RequestBody BlogSection blogSection){
        return this.blogService.CreateBlog(blogSection);
    }
    @GetMapping("/")
    public List<BlogSection> findBlog(){
        return this.blogRepository.findAll();
    }
    @DeleteMapping("/{id}")
    public void deleteBlog(@PathVariable Long id)
    {
        BlogSection idd= this.blogRepository.findById(id).orElseThrow(()
                -> new ResourceNotFound("Blog id does not exist"+id));
        this.blogRepository.delete(idd);

    }
}
