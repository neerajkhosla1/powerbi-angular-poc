// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { PowerBIEmbedModule } from 'powerbi-client-angular';
import { AppService } from './services/appservice';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule, PowerBIEmbedModule],
  providers: [AppService],
  bootstrap: [AppComponent],
})
export class AppModule { }
