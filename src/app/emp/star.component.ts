import { Component, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class starComponent {
  starWidth: number;
  @Input() rating:number;
  ngOnChanges():void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add 'implements OnChanges' to the class.
    this.starWidth=this.rating*86/5;
  }
}
