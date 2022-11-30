import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import {FormControl} from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { FormsModule } from '@angular/forms';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AuthGuard } from './_auth/auth.guard';
import { AuthInterceptor } from './_auth/auth.interceptor';
import { UserService } from './_services/user.service';
import { AddFoundationComponentComponent } from './pages/add-foundation-component/add-foundation-component.component';
import { FoundationListComponent } from './pages/foundation-list/foundation-list.component';
import { UpdateFoundationComponent } from './pages/update-foundation/update-foundation.component';
import { NewUserComponent } from './pages/new-user/new-user.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner'; 
import {MatDialogModule} from '@angular/material/dialog';
import {MatToolbarModule} from '@angular/material/toolbar'; 
import {MatCardModule} from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddOrderComponent } from './pages/add-order/add-order.component';
import { FounadtionDetailsComponent } from './pages/founadtion-details/founadtion-details.component';
import { SearchComponent } from './pages/search/search.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatSelectModule} from '@angular/material/select'; 
import {MatAutocompleteModule} from '@angular/material/autocomplete'; 
import { AngularFireModule } from '@angular/fire';
import {AngularFireStorageModule} from '@angular/fire/storage';
import { FooterComponent } from './pages/footer/footer.component'
  // MatDialogModule
@NgModule({ 
  declarations: [
    AppComponent,
    HomeComponent,
    AdminComponent,
    UserComponent,
    LoginComponent,
    HeaderComponent,
    ForbiddenComponent,
    AddFoundationComponentComponent,
    FoundationListComponent,
    UpdateFoundationComponent,
    NewUserComponent,
    AddOrderComponent,
    FounadtionDetailsComponent,
    SearchComponent,
    FooterComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    MatGridListModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatTabsModule,
    MatSelectModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatAutocompleteModule,
    MatToolbarModule,
    AngularFireStorageModule,
    AngularFireModule.initializeApp(
      {

        apiKey: "AIzaSyAZgB9SQwVmjnggId-Qxu38uHKmajJVYEg",
        authDomain: "khdmatekk.firebaseapp.com",
        projectId: "khdmatekk",
        storageBucket: "khdmatekk.appspot.com",
        messagingSenderId: "24803650899",
        appId: "1:24803650899:web:1a3d59cb834d7f85adc5a6",
        measurementId: "G-4T7XY77K18"

        // apiKey: "AIzaSyDJh_CglrUDUxW6AFy-zLY7b2XLmCgW6WI",
      
        // authDomain: "fekhedmetik.firebaseapp.com",
      
        // projectId: "fekhedmetik",
      
        // storageBucket: "fekhedmetik.appspot.com",
      
        // messagingSenderId: "785168104630",
      
        // appId: "1:785168104630:web:b6d4013566eb4535e13a17"
      }
    )
    
  ],
  providers: [
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass:AuthInterceptor,
      multi:true
    },
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
