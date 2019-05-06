import { Component, OnInit } from "@angular/core";
import { ContactService } from "../services/contact.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-contact-list",
  templateUrl: "./contact-list.component.html",
  styleUrls: ["./contact-list.component.css"]
})
export class ContactListComponent implements OnInit {
  constructor(private _contact: ContactService, private router: Router) {}
  contacts: any = [];
  ngOnInit() {
    // receving contact list from server when page is initialised
    this._contact.getContacts().subscribe(res => {
      this.contacts = res;
    });
  }
  // sending the selected data to the contact service for other component use
  sendDetails(details) {
    this._contact.contactDetails(details);
    this.router.navigate(["contactdetails/", details.name]);
  }
}
