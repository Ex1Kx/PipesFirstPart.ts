import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import localEs from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';
import { MyPipePipe } from './pipes/myPipeName.pipe';
registerLocaleData(localEs);
@NgModule({
  declarations: [
    AppComponent,
    MyPipePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [{provide: LOCALE_ID, useValue: 'es'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
