import { Component, OnInit } from "@angular/core";
import { GotHttpService } from "../got-http.service";
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";

@Component({
  selector: "app-character1",
  templateUrl: "./character1.component.html",
  styleUrls: ["./character1.component.css"]
})
export class Character1Component implements OnInit {
  public character;
  public y;
  public charactername;
  public searchname;
  public arrayxx: any = [];

  constructor(
    public gotHttpService: GotHttpService,
    private _route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit() {
    this.searchname = this._route.snapshot.params["searchname"];
    console.log(this.searchname);
    this.character = this.gotHttpService.getCharacter().subscribe(data => {
      this.character = data;
      for (this.y = 0; this.y < this.character.length; this.y++) {
        this.charactername = this.character[this.y].name;

        if (this.charactername == this.searchname) {
          this.arrayxx.push(this.character[this.y]);
          console.log(this.arrayxx);
        }
      }
    });
  }
  goback() {
    this.location.back();
  }
}
