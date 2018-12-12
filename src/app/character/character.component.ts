import { Component, OnInit } from "@angular/core";
import { GotHttpService } from "../got-http.service";
import { FormsModule, NgForm } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { Location } from "@angular/common";
@Component({
  selector: "app-character",
  templateUrl: "./character.component.html",
  styleUrls: ["./character.component.css"]
})
export class characterComponent implements OnInit {
  constructor(
    private _router: Router,
    private _route: ActivatedRoute,
    public gothttpservice: GotHttpService,
    private location: Location
  ) {}
  public searchname;
  ngOnInit() {}
  navigateComponent() {
    this._router.navigate(["/character1", this.searchname]);
  }
  goback() {
    this.location.back();
  }
}
