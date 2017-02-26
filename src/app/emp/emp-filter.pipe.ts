import { Pipe, PipeTransform } from '@angular/core';
import {IEmp} from './emp';
console.log("hai");
@Pipe({
    name: 'empFilter'
})
export class empFilterPipe implements PipeTransform{
  transform(value: IEmp[], filterBy: string): IEmp[] {
        filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;
        return filterBy ? value.filter((Employees: IEmp) =>
            Employees.EmployeeName.toLocaleLowerCase().indexOf(filterBy) !== -1) : value;
    }
}
