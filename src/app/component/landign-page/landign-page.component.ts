import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landign-page',
  templateUrl: './landign-page.component.html',
  styleUrls: ['./landign-page.component.css']
})
export class LandignPageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  setPin(){
    this.router.navigateByUrl('/set-pin');
  }

}
