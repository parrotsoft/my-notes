import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthModule } from "./auth/auth.module";
import { PagesModule } from "./pages/pages.module";
import { HttpClientInMemoryWebApiModule } from "angular-in-memory-web-api";
import { InMemNoteServices } from "./memory-db/InMemNoteServices";
import { HttpClientModule } from "@angular/common/http";
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AuthModule,
    PagesModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemNoteServices, { delay: 1000 }),
    FroalaEditorModule.forRoot(),
    FroalaViewModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
