import { Component, OnInit } from "@angular/core";
import { ContactService } from "../services/contact.service";

@Component({
  selector: "app-message",
  templateUrl: "./message.component.html",
  styleUrls: ["./message.component.css"]
})
export class MessageComponent implements OnInit {
  constructor(private contactService: ContactService) {}
  contact: any;
  otp: any;
  details: any = { name: "", phone: "", message: "" };
  ngOnInit() {
    this.contact = this.contactService.showDetails();
    // generating random 6 digit number and assigning to input field
    this.otp = "Hi. Your OTP is: " + Math.floor(100000 + Math.random() * 900000);
  }

  sendMessage(input) {
    this.details.name = this.contact.name;
    this.details.phone = this.contact.phone;
    this.details.message = input.value;
    // sending data to service to send to backend
    this.contactService.sendMessage(this.details).subscribe(res => {
      console.log(res, "res");
    });
    console.log(this.details);
  }
}
