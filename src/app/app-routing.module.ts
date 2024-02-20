import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SetPinComponent } from './component/set-pin/set-pin.component';
import { CameraComponent } from './component/camera/camera.component';
import { LandingPageComponent } from './component/landing-page/landing-page.component';

const routes: Routes = [
  {path:'',               component:LandingPageComponent},
  {path:'set-pin',        component:SetPinComponent},
  {path:'camera',         component:CameraComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
