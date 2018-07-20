import { Component, ViewChild, ElementRef,OnInit } from '@angular/core';
import * as jsPDF from 'jspdf';

@Component({
  selector: 'app-html-to-pdf',
  templateUrl: './html-to-pdf.component.html',
  styleUrls: ['./html-to-pdf.component.css']
})
export class HtmlToPdfComponent implements OnInit {
  constructor() { }
  ngOnInit() {
  }
  @ViewChild('content') content : ElementRef;
  public downloadPdf(){
      let doc = new jsPDF();
      let specialElementHandlers = {
          '#editor':function(element,renderer){
              return true;
          }
      }
      let cont  = this.content.nativeElement;
      doc.fromHTML(cont.innerHTML,15,15,{
          'width':190,
          'elementHandlers':specialElementHandlers
      });
      doc.save('test.pdf');
  }
}
