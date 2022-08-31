import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule,routingcomponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { Binfo1Component } from './binfo1/binfo1.component';
import { Binfo2Component } from './binfo2/binfo2.component';
import { Binfo3Component } from './binfo3/binfo3.component';
import { Binfo4Component } from './binfo4/binfo4.component';
import { SuccessComponent } from './success/success.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Binfo1Component,
    Binfo2Component,
    Binfo3Component,
    Binfo4Component,
    SuccessComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
