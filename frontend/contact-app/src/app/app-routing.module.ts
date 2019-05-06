import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactListComponent } from './contact-list/contact-list.component';
import { MessageComponent } from './message/message.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SentmessagesComponent } from './sentmessages/sentmessages.component';
import { ContactDetailsComponent } from './contact-details/contact-details.component';

const routes: Routes = [
  {path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  {path: 'dashboard', component: DashboardComponent,
  children:[
  {path: 'contactlist', component: ContactListComponent},
  {path: 'sentMessages', component: SentmessagesComponent},
  ]},
  {path: 'contactdetails/:name', component: ContactDetailsComponent},
  {path: 'sendMessage/:name', component: MessageComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
