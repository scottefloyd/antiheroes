import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AntiheroesComponent } from './anti-heroes/anti-heroes.component';
import { AntiDetailComponent } from './anti-detail/anti-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    AntiheroesComponent,
    AntiDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
