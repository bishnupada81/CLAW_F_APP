import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validator, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { PopUpComponent } from '../pop-up/pop-up.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-set-pin',
  templateUrl: './set-pin.component.html',
  styleUrls: ['./set-pin.component.css']
})
export class SetPinComponent implements OnInit {
  formModal:any;

  constructor(private router: Router, public dialogRef:MatDialog) { }

  ngOnInit(): void {
  }

  public setPinForm = new FormGroup({
    phoneNumber: new FormControl("",
         [Validators.required,
         Validators.pattern('^[0-9]*$'),
         Validators.maxLength(10),
         Validators.minLength(10)]
         ),
    setPin: new FormControl("",
        [Validators.required,
        Validators.pattern('^[0-9]*$'),
        Validators.maxLength(6),
        Validators.minLength(6)]
        )
  })

  openDialog(){
    this.dialogRef.open(PopUpComponent)
  }

  public SetPinFormSubmit() {
    // console.log(this.setPinForm.value);
    if(this.setPinForm.value){
      Swal.fire({
        title: "Your Pin successfully set",
        confirmButtonText: "Okay",
      }).then((result) => {

        this.router.navigateByUrl('/camera');

      });
    }

  }

  get phoneNumber() {
    return this.setPinForm.get('phoneNumber');
  }

  get setPin() {
    return this.setPinForm.get('setPin');
  }
}
