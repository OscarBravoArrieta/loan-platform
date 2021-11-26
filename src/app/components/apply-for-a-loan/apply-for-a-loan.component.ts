 import { Component, OnInit } from '@angular/core';
 import { FormBuilder, FormGroup, Validators } from '@angular/forms'

 @Component({
     selector: 'app-apply-for-a-loan',
     templateUrl: './apply-for-a-loan.component.html',
     styleUrls: ['./apply-for-a-loan.component.css']
})
 export class ApplyForALoanComponent implements OnInit {
     loanForm: FormGroup
     statusForm: boolean = false
     loanAmount: number = 0
     loanDate: Date = new Date

     //-----------------------------------------------------------------------------------------------------
     constructor(public fb: FormBuilder) {
         this.loanForm = this.fb.group({
             idUser: [null, [Validators.required]],
             name:[null, [Validators.required]],
             email: [null, Validators.compose([Validators.email, Validators.required])],
         })
     }
     //-----------------------------------------------------------------------------------------------------
     ngOnInit(): void {
         this.statusForm = !this.loanForm.invalid
     }
     //-----------------------------------------------------------------------------------------------------
     sendUser():void {
         this.statusForm = this.loanForm.invalid

         if (this.loanForm.valid) {

          console.log("Todos los datos son válidos")
         }
         else {
            console.log("Hay datos inválidos en el formulario")
         }
     }
     //-----------------------------------------------------------------------------------------------------
     getAmount(e: number):void{
         this.loanAmount = e
         console.log('id recibido:...', e)
     }
     //-----------------------------------------------------------------------------------------------------
     getDate(e: Date):void{
         this.loanDate = e
         console.log('id recibido fecha:...', e)
     }
     //-----------------------------------------------------------------------------------------------------
 }
