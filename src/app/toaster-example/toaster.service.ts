import { Injectable} from '@angular/core';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Injectable()
export class CustomToasterService {   
  constructor(public toastr: ToastsManager){
  }
  showSuccess(msg){
    this.toastr.success(msg,null,{animate:"flyRight",newestOnTop:true,showCloseButton:true,
                                  maxShown:7,positionClass:"toast-top-right"});
  }
  showError(msg){
    this.toastr.error(msg,null,{animate:"flyRight",newestOnTop:true,showCloseButton:true,
                                  maxShown:7,positionClass:"toast-top-right"});
  }
}
