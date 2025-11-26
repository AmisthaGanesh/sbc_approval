import { Component } from '@angular/core';
import { CordysService } from './services/cordys.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'sbc_approval';
  myArray:any[]=[];
constructor(private service:CordysService){}
  
ngOnInit(){
  this.getEmpLmsTableObject();
}

  nameSpace = "http://schemas.cordys.com/EMP_LMS_Tab";

    getEmpLmsTableObject() {

   
    var params = {
      'LEAVE_APP_NUM': 67,
    };
     this.service.ajax("GetEmpLmsTableObject", this.nameSpace, params).
      then((ajaxResponse: any) => {
        if (ajaxResponse.hasOwnProperty('tuple')) {
           //alert("hhhhhhhhhh");
           this.myArray=ajaxResponse;
           console.log('cordys api response is:',ajaxResponse)
        }
      }, (err) => {
       console.log("ERROR:", err);
      });
  } 
}
