import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './components/app/app-routing.module';
import { AppComponent } from './components/app/app.component';
import { MessagesModule } from './components/messages/messages.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LetrasPipe } from './pipes/letras.pipe';
import { SharedModule } from './modules/common/compartida.module';

@NgModule({
  declarations: [
    AppComponent,
    LetrasPipe,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MessagesModule,
    BrowserAnimationsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
