import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

// firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';

// components
import { UsersComponent } from './components/users/users.component';
import { TipoCambioComponent } from './components/users/tipo-cambio/tipo-cambio.component';
import { TipoCambioUpdateComponent } from './components/users/tipo-cambio-update/tipo-cambio-update.component';
import { TipoCambioListComponent } from './components/users/tipo-cambio-list/tipo-cambio-list.component';


// service
import { UserService } from './services/user.service';
import { CambioService } from './services/cambio.service';

// Toastr
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    TipoCambioComponent,
    TipoCambioUpdateComponent,
    TipoCambioListComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    FormsModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [
    UserService,
    CambioService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
