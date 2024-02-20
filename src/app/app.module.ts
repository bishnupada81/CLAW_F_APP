import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SetPinComponent } from './component/set-pin/set-pin.component';
import { CameraComponent } from './component/camera/camera.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LandingPageComponent } from './component/landing-page/landing-page.component';

@NgModule({
  declarations: [
    AppComponent,
    SetPinComponent,
    CameraComponent,
    LandingPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
