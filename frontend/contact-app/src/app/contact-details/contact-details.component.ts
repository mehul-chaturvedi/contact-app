import { Component, OnInit } from "@angular/core";
import { ContactService } from "../services/contact.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-contact-details",
  templateUrl: "./contact-details.component.html",
  styleUrls: ["./contact-details.component.css"]
})
export class ContactDetailsComponent implements OnInit {
  constructor(private contaceService: ContactService, private router: Router) {}
  contact: any = [];
  ngOnInit() {
    this.showDetails();
  }

  showDetails() {
    this.contact = this.contaceService.showDetails();
  }

  sendMessage() {
    this.contaceService.contactDetails(this.contact);
    this.router.navigate(["/sendMessage", this.contact.name]);
  }
}
