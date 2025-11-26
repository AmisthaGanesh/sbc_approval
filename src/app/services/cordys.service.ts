import { Injectable } from '@angular/core';
declare var $: any, _: any;

export const environment = {

  production: false,

  timeout: 180000,

};

@Injectable({
  providedIn: 'root'
})
export class CordysService {

  constructor() { }

   ajax(method:any,namespace:any,parameters:any, flag = true){
        
        if(environment.production == true){

          return new Promise((rev,rej)=>{

            if (flag == true) 

            $.cordys.ajax({

              method:method,

              timeout:environment.timeout,

              namespace:namespace,

              dataType: "* json",

              parameters: parameters,

              success: function success(resp:any) {

                 rev(resp);

                 

              },

              error:function error(e1:any,e2:any,e3:any){

                if (flag == true) 

                 rej([e1,e2,e3]);

              }

            })

          })

        }else{

          return new Promise((rev,rej)=>{

            if (flag == true) 

            $.cordys.ajax({

              method:method,

              timeout:environment.timeout,

              namespace:namespace,

              dataType: "* json",

              parameters: parameters,

              success: function success(resp:any) {

                if (flag == true) 

                rev(resp);

             },

            })

          })

        }

      }
}

