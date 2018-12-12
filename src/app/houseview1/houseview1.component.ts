import { Component, OnInit, OnDestroy } from "@angular/core";
import { GotHttpService } from "../got-http.service";
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";

@Component({
  selector: "app-houseview",
  templateUrl: "./houseview1.component.html",
  styleUrls: ["./houseview1.component.css"]
})
export class Houseview1Component implements OnInit {
  public house;
  public y;
  public housename;
  public searchname;
  public arrayx: any = [];

  constructor(
    public gotHttpService: GotHttpService,
    private _route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit() {
    this.searchname = this._route.snapshot.params["searchname"];
    console.log(this.searchname);
    this.house = this.gotHttpService.getHouse().subscribe(data => {
      this.house = data;
      for (this.y = 0; this.y < this.house.length; this.y++) {
        this.housename = this.house[this.y].name;

        if (this.housename == this.searchname) {
          this.arrayx.push(this.house[this.y]);
          console.log(this.arrayx);
        }
      }
    });
  }

  ngOnDestroy() {
    this.searchname = this._route.snapshot.params["searchname"];
    console.log(this.searchname);
    this.house = this.gotHttpService.getHouse().subscribe(data => {
      this.house = data;
      for (this.y = 0; this.y < this.house.length; this.y++) {
        this.housename = this.house[this.y].name;
        console.log(this.housename);
        if (this.housename == this.searchname) {
          this.arrayx.push(this.house[this.y]);
          console.log(this.arrayx);
        }
      }
    });
  }
  goback() {
    this.location.back();
  }
}
