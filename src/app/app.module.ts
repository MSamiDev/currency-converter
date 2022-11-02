import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MenubarModule} from 'primeng/menubar';
import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';
import {TabMenuModule} from 'primeng/tabmenu';
import {InputNumberModule} from 'primeng/inputnumber';
import { FormsModule } from '@angular/forms';
import {CascadeSelectModule} from 'primeng/cascadeselect';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MenubarModule,
    ButtonModule,
    CardModule,
    TabMenuModule,
    InputNumberModule,
    FormsModule,
    CascadeSelectModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
