import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxPaginationModule } from 'ngx-pagination';
import { ToastModule } from 'ng2-toastr/ng2-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { PaginationExampleComponent } from './pagination-example/pagination-example.component';
import { HtmlToPdfComponent } from './html-to-pdf/html-to-pdf.component';
import { ToasterExampleComponent } from './toaster-example/toaster-example.component';
import { CustomToasterService } from './toaster-example/toaster.service';

@NgModule({
  declarations: [
    AppComponent,
    PaginationExampleComponent,
    HtmlToPdfComponent,
    ToasterExampleComponent
  ],
  imports: [
    BrowserModule,
    NgxPaginationModule,
    ToastModule.forRoot(),
    BrowserAnimationsModule 
  ],
  providers: [CustomToasterService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
