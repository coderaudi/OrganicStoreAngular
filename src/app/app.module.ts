import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductComponent } from './product/product.component';

import { NotFoundComponent } from './not-found/not-found.component';
import { AdminComponent } from './admin/admin.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material';
import { ProductOperationComponent } from './product-operation/product-operation.component';
import { LoginComponent } from './login/login.component';
import { EditComponent } from './edit/edit.component';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProductComponent,
    NotFoundComponent,
    AdminComponent,
    ProductOperationComponent,
    LoginComponent,
    EditComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTableModule,
    AppRoutingModule,
    FormsModule,

    HttpClientModule,

    RouterModule.forRoot([
      {path: '' , component: ProductComponent},
      {path: 'login' , component: LoginComponent},
      {path: 'allproducts' , component: ProductComponent},
      {path: 'admin' , component: AdminComponent},
      {path: 'admin/addproduct' , component: ProductOperationComponent},
      {path: 'admin/edit' , component: ProductOperationComponent},
      {path: '**' , component: NotFoundComponent},
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
