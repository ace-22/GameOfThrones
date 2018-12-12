import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Location } from "@angular/common";
import { GotHttpService } from "../got-http.service";

@Component({
  selector: "app-view",
  templateUrl: "./view.component.html",
  styleUrls: ["./view.component.css"]
})
export class ViewComponent implements OnInit {
  public book;

  public bookname;
  public searchname;

  public books1: any = [
    "A Game of Thrones",
    "A Clash of Kings",
    "A Storm of Swords",
    "The Hedge Knight",
    "A Feast for Crows",
    "The Sworn Sword",
    "The Mystery Knight",
    "A Dance with Dragons",
    "The Princess and the Queen",
    "The Rogue Prince",
    "The World of Ice and Fire",
    "A Knight of the Seven Kingdoms"
  ];

  constructor(
    private _route: ActivatedRoute,
    private router: Router,
    public gotHttpService: GotHttpService,
    private location: Location
  ) {}
  showParam(variable: string) {
    console.log(this.searchname);
  }
  ngOnInit() {}
  navigateComponent() {
    this.router.navigate(["/view1", this.searchname]);
  }
  goback() {
    this.location.back();
  }
}
