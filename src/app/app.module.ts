import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SetPinComponent } from './component/set-pin/set-pin.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CameraComponent } from './component/camera/camera.component';
import { MatDialogModule } from '@angular/material';
import { PopUpComponent } from './component/pop-up/pop-up.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    SetPinComponent,
    CameraComponent,
    PopUpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatDialogModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
