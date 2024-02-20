import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-camera',
  templateUrl: './camera.component.html',
  styleUrls: ['./camera.component.css']
})
export class CameraComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  imagePreviewSrc: string | ArrayBuffer | null | undefined = '';
  isImageSelected: boolean = false;

  showPreview(event: Event) {
    let selectedFile = (event.target as HTMLInputElement).files?.item(0)

    if (selectedFile) {
      if (["image/jpeg", "image/png", "image/svg+xml"].includes(selectedFile.type)) {
        let fileReader = new FileReader();
        fileReader.readAsDataURL(selectedFile);

        fileReader.addEventListener('load', (event) => {
          this.imagePreviewSrc = event.target?.result;
          this.isImageSelected = true
        })
      }
    } else {
      this.isImageSelected = false
    }
  }

  scanTheQRCode(){
    Swal.fire({
      title: "Your account verification Successfully",
      confirmButtonText: "Okay",
    }).then((result) => {

      this.router.navigateByUrl(' ');

    });
  }

}
