import { Component, OnInit, ViewChild } from "@angular/core";
import { ContactService } from "../services/contact.service";
import { MatSort, MatTableDataSource } from "@angular/material";

@Component({
  selector: "app-sentmessages",
  templateUrl: "./sentmessages.component.html",
  styleUrls: ["./sentmessages.component.css"]
})
export class SentmessagesComponent implements OnInit {
  constructor(private contactService: ContactService) {}
  // mat table and sorting through mar table
  displayedColumns: string[] = ["name", "message", "time"];
  dataSource;
  @ViewChild(MatSort) sort: MatSort;

  ngOnInit() {
    this.contactService.getMessagesList().subscribe(res => {
      this.dataSource = new MatTableDataSource(res.message_list);

      this.dataSource.sort = this.sort;
    });
  }
}
