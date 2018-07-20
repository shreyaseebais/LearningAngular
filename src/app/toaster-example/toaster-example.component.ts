import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { CustomToasterService } from './toaster.service';

@Component({
  selector: 'app-toaster-example',
  templateUrl: './toaster-example.component.html',
  styleUrls: ['./toaster-example.component.css']
})
export class ToasterExampleComponent implements OnInit {

  constructor(public toastr: ToastsManager, vcr: ViewContainerRef,public customToaster: CustomToasterService) {
    this.toastr.setRootViewContainerRef(vcr);
  }

  ngOnInit() {
    
  }
  showSuccessToastr(){
    this.customToaster.showSuccess('Successful message !!! ');
  }
  showErrorToastr(){
    this.customToaster.showError('Error message !!! ');
  }

}
