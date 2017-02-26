import { starComponent } from './star.component';
import {Component, OnInit} from '@angular/core';
import { empFilterPipe } from './emp-filter.pipe';
import {IEmp} from './emp';

@Component({
    selector:"emp-list",
    templateUrl: './emp-list.component.html',
})

export class empListComponent implements OnInit{
    title = "Team Members List";
    imageWidth= 50;
    imageMargin= 2;
    showImage:boolean = false;
    empName:string;
    employees: IEmp[]=[
    {
        "EmployeeId": 2452,
        "EmployeeName": "Joginaidu Gopisetti",
        "EmailID":"jgopisetti@innominds.com",
        "DateOfBirth": "14-08-1993",
        "Location": 'Visakhapatnam',
        "starRating": 3.2,
        "imageUrl": "app/assets/images/jogi.jpg"
    },
    {
        "EmployeeId": 2453,
        "EmployeeName": "Sairam Allampalli",
        "EmailID":"sallampalli@innominds.com",
        "DateOfBirth": "03-03-1993",
        "Location": 'Visakhapatnam',
        "starRating": 3.2,
        "imageUrl": "app/assets/images/sai.jpg"
    },
    {
        "EmployeeId": 2454,
        "EmployeeName": "Ramachandra rao Nuni",
        "EmailID":"rnuni@innominds.com",
        "DateOfBirth": "14-08-1992",
        "Location": 'Visakhapatnam',
        "starRating": 3.2,
        "imageUrl": "app/assets/images/ram.jpg"
    },
    {
        "EmployeeId": 2458,
        "EmployeeName": "Prudhviraju Mantena",
        "EmailID":"pmantena@innominds.com",
        "DateOfBirth": "14-08-1993",
        "Location": 'Visakhapatnam',
        "starRating": 3.2,
        "imageUrl": "app/assets/images/prudhvi.jpg"
    }
];
toggleImage(): void{
  this.showImage = !this.showImage;
}
ngOnInit() : void{
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.
  console.log('OnInit');
}
}
