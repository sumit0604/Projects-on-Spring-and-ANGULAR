package com.exam.repo;

import com.exam.model.BlogSection;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BlogRepository extends JpaRepository<BlogSection,Long> {
}
