import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { FormControl, FormGroup, Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-set-pin',
  templateUrl: './set-pin.component.html',
  styleUrls: ['./set-pin.component.css']
})
export class SetPinComponent implements OnInit {

  constructor(private router: Router) { }

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


  public SetPinFormSubmit() {

    if(this.setPinForm.value){

      Swal.fire({

        title: "Your Pin successfully set",
        confirmButtonText: "Okay",

      }).then((result) => {

        this.router.navigateByUrl('/camera');

      });
    }

  }

  public get phoneNumber() {
    return this.setPinForm.get('phoneNumber');
  }

  public get setPin() {
    return this.setPinForm.get('setPin');
  }

}
