import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SetPinComponent } from './component/set-pin/set-pin.component';
import { CameraComponent } from './component/camera/camera.component';

const routes: Routes = [
  {path:'',        component:SetPinComponent},
  {path:'camera',  component:CameraComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
