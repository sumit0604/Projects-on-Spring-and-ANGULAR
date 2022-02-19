package com.EMS.ems.repository;

import com.EMS.ems.model.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EmpoyeRepo extends JpaRepository<Employee,Long> {

}
