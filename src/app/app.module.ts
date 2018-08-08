import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AdminComponent } from './layout/admin/admin.component';
import { AuthComponent } from './layout/auth/auth.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { MenuItems } from './shared/menu-items/menu-items';
import { BreadcrumbsComponent } from './layout/admin/breadcrumbs/breadcrumbs.component';
import { JwtService } from './shared/service/jwt.service';
import { ApiService } from './shared/service/api.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    AuthComponent,
    BreadcrumbsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    HttpModule,
    HttpClientModule,
  ],
  schemas: [],
  providers: [
    MenuItems,
    ApiService,
    JwtService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
