import { Component, OnInit } from "@angular/core";
import { GotHttpService } from "../got-http.service";
import { ActivatedRoute } from "@angular/router";
import { bindCallback } from "rxjs";
import { Location } from "@angular/common";

@Component({
  selector: "app-view1",
  templateUrl: "./view1.component.html",
  styleUrls: ["./view1.component.css"]
})
export class View1Component implements OnInit {
  public book;
  public x;
  public bookname;
  public searchname;
  public array: any = [];
  public color;

  constructor(
    public gotHttpService: GotHttpService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit() {
    this.searchname = this.route.snapshot.params["searchname"];
    console.log(this.searchname);
    this.book = this.gotHttpService.getBook().subscribe(data => {
      this.book = data;
      for (this.x = 0; this.x < this.book.length; this.x++) {
        this.bookname = this.book[this.x].name;

        if (this.bookname == this.searchname) {
          this.array.push(this.book[this.x]);
          console.log(this.array);
        }
      }
    });
  }
  goback() {
    this.location.back();
  }
}
