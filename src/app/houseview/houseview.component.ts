import { Component, OnInit } from "@angular/core";
import { GotHttpService } from "../got-http.service";
import { FormsModule, NgForm } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { Location } from "@angular/common";
@Component({
  selector: "app-houseview",
  templateUrl: "./houseview.component.html",
  styleUrls: ["./houseview.component.css"]
})
export class HouseviewComponent implements OnInit {
  constructor(
    private _router: Router,
    private _route: ActivatedRoute,
    public gothttpservice: GotHttpService,
    private location: Location
  ) {}
  public searchname;
  ngOnInit() {}
  navigateComponent() {
    this._router.navigate(["/houseview1", this.searchname]);
  }
  goback() {
    this.location.back();
  }
}
