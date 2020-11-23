import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ModalModule } from './_modal';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemsComponent } from './items/items.component';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
//import { HighlightDirective } from './highlight.directive';
import { HoverDirective } from './hover.directive';

//import { HomeComponent } from './home';
//import { TestPageComponent } from './test-page';

@NgModule({
  declarations: [
    AppComponent,
    ItemsComponent,
    HoverDirective
    //HomeComponent,
    //TestPageComponent
  ],
    imports: [
      BrowserModule,
      AppRoutingModule,
      FormsModule,
      HttpClientModule,
      ModalModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
