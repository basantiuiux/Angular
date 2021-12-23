import { Component, ViewChild } from '@angular/core';
import { NgModel} from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { Employee } from './employee';
import { EmployeeService } from './employee.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { 

 
 userLogIn =true;
  title = 'post-service';
  employee: Employee = new Employee;
  public show : Employee =new Employee ;
 
  constructor(private employeeService :EmployeeService)
  {
    
  }

  getInfo(userForm: any)
  {
    this.employee.id= userForm.id;
    this.employee.firstName=userForm.firstName;
    this.employee.lastName=userForm.lastName;
    this.employeeService.addEmployee(this.employee) .subscribe(data => {
      console.log(data)
      this.show.id=data.id ;

    })      

  }
  deletEmployee(id : number)
    {
      this.employeeService.deletEmployee(id).subscribe(data => {
        console.log(data)
        this.show.id=data.id ;
      //console.log("deleted");
    })
    }

    updateInfo(userForm: any)
  {
    this.employee.id= userForm.id;
    this.employee.firstName=userForm.firstName;
    this.employee.lastName=userForm.lastName;
    this.employeeService.updateEmployee(this.employee) .subscribe(data => {
      console.log(data)
      this.show.id=data.id ;

    })      

  }
  getEmployee(id :number)
    {
      this.employeeService.getEmployee(id).subscribe(data => {
        console.log(data.firstName);
       this.show.id=data.id ;
      this.show.firstName=data.firstName ;
      this.show.lastName=data.lastName ;
      // //console.log("deleted");
    })
    }
  
 
}
