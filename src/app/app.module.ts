import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {AngularFireAuthModule} from 'angularfire2/auth';

import {AppComponent} from './app.component';
import {environment} from '../environments/environment';

// import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {CoffeeListComponent} from './coffee-list/coffee-list.component';
import { CoffeeTimerComponent } from './coffee-timer/coffee-timer.component';
import { NewCoffeeComponent } from './new-coffee/new-coffee.component';


@NgModule({
  declarations: [
    AppComponent,
    CoffeeListComponent,
    CoffeeTimerComponent,
    NewCoffeeComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule
    // NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
