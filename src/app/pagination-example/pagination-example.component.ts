import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagination-example',
  templateUrl: './pagination-example.component.html',
  styleUrls: ['./pagination-example.component.css']
})
export class PaginationExampleComponent implements OnInit {

  title='ngx-pagination Demo';
  list1 = [];
  i:number=1;

  constructor() { 
    for (this.i=1 ; this.i <= 100 ; this.i++){
    this.list1.push("Angular "+this.i);
    }
  }
  
  ngOnInit() {
  }
}
