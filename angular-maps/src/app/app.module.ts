import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,

     AgmCoreModule.forRoot({apiKey: 'AIzaSyD3hNZAKpueeZEWtA59DL8TZmj4ZVsonF0'}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
