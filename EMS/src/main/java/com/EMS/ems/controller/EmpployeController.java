package com.EMS.ems.controller;

import com.EMS.ems.exceptions.ResourceNotFound;
import com.EMS.ems.model.Employee;
import com.EMS.ems.repository.EmpoyeRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.persistence.Id;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(allowedHeaders = "*")
@RestController
@RequestMapping("Employee")
public class EmpployeController {
    @Autowired
    private EmpoyeRepo empoyeRepo;

    //For fetching whole Data of EMPLOYEE
    @GetMapping("")
    public List<Employee> getEmp()
    {
        return  empoyeRepo.findAll();
    }

    //Adding data to the SQL database...
    @PostMapping("add")
    public Employee addEmployee(@RequestBody Employee employee)
    {
        return empoyeRepo.save(employee);
    }
    //Get Employee By ID
    @RequestMapping("{id}")
    public ResponseEntity<Employee> EmpById(@PathVariable Long id)
    {
        Employee employee = this.empoyeRepo.findById(id).orElseThrow(()
                -> new ResourceNotFound("Employee Not Exist" + id));
        return  ResponseEntity.ok(employee);
    }

    //Update Employee By ID
    @PutMapping("update/{id}")
    public  ResponseEntity<Employee> updateEmp(@PathVariable Long id, @RequestBody Employee employeedata)
    {
        Employee employee = this.empoyeRepo.findById(id).orElseThrow(()
                -> new ResourceNotFound("Employee Not Exist" + id));
        employee.setFirstname(employeedata.getFirstname());
        employee.setLastname(employeedata.getLastname());
        employee.setEmail_id(employeedata.getEmail_id());
        employee.setPhone_number(employeedata.getPhone_number());
        Employee updateddata = this.empoyeRepo.save(employee);

        return ResponseEntity.ok(updateddata);

    }

    //Delteing the Employee
    @DeleteMapping("{id}")
    public ResponseEntity<Map<String,Boolean>> deleteEmpl(@PathVariable Long id)
    {
        Employee employee= empoyeRepo.findById(id).orElseThrow(()
        -> new ResourceNotFound("Employe id does not exist"+id));

        empoyeRepo.delete(employee);
        Map<String,Boolean> response = new HashMap<>();
        response.put("deleted",Boolean.TRUE);
        return ResponseEntity.ok(response);
    }
}
