import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Student } from 'src/app/classes/student';
import { BaseTreeControl, CdkTree, FlatTreeControl } from '@angular/cdk/tree';


interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  level: number;
}





@Component({
  selector: 'app-student-pay-details',
  templateUrl: './student-pay-details.component.html',
  styleUrls: ['./student-pay-details.component.css']
})
export class StudentPayDetailsComponent implements OnInit {
student:Student=new Student(1,"ו","ה","ד","ג","א",86,"יתרה");
student2:Student=new Student(2,"ו","ה","ד","ג","א",99,"חוב");
items:Array<Student>=new Array<Student>(this.student,this.student2);
  lessonsCount:number=5;
  treeControl:ExampleFlatNode
  PayDetailsForm = this.formBuilder.group({
    manui:"פעם בשבוע",
    
  });

  constructor(private formBuilder: FormBuilder,private router: Router) { }

  ngOnInit(): void {
  }


  OnSubmit()
  {
    
    console.log(this.PayDetailsForm.valid);
  }
}
