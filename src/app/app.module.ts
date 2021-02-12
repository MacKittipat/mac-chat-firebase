import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {MainComponent} from './components/main/main.component';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../environments/environment';
import {AngularFireDatabaseModule} from '@angular/fire/database';

@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [MainComponent]
})
export class AppModule {
}
