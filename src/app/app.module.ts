import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SetPinComponent } from './component/set-pin/set-pin.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CameraComponent } from './component/camera/camera.component';
import { PopUpComponent } from './component/pop-up/pop-up.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import { LandignPageComponent } from './component/landign-page/landign-page.component';

@NgModule({
  declarations: [
    AppComponent,
    CameraComponent,
    PopUpComponent,
    SetPinComponent,
    LandignPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
