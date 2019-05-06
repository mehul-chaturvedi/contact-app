import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"]
})
export class DashboardComponent implements OnInit {
  navLinks = [
    { path: "contactlist", label: "Contacts" },
    { path: "sentMessages", label: "Sent Messages List" }
  ];
  constructor() {}

  ngOnInit() {}
}
