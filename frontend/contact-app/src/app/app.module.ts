import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { MessageComponent } from './message/message.component';
import {
        MatToolbarModule,
        MatTabsModule,
        MatListModule,
        MatIconModule,
        MatCardModule,
        MatButtonModule,
        MatInputModule,
        MatTableModule
      } from '@angular/material';
import { SentmessagesComponent } from './sentmessages/sentmessages.component';
import { ContactService } from './services/contact.service';
import { HttpClientModule } from '@angular/common/http';
import { ContactDetailsComponent } from './contact-details/contact-details.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ContactListComponent,
    AppHeaderComponent,
    MessageComponent,
    SentmessagesComponent,
    ContactDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatTabsModule,
    HttpClientModule,
    MatListModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatTableModule,
    ReactiveFormsModule
  ],
  providers: [ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
