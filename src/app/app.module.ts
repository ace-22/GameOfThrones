import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { RouterModule, Routes } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";
import { HttpModule } from "@angular/http";
import { GotHttpService } from "./got-http.service";

import { HomeComponent } from "./home/home.component";
import { ViewComponent } from "./view/view.component";
import { View1Component } from "./view1/view1.component";
import { HouseviewComponent } from "./houseview/houseview.component";
import { Houseview1Component } from "./houseview1/houseview1.component";
import { characterComponent } from "./character/character.component";
import { Character1Component } from "./character1/character1.component";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ViewComponent,
    View1Component,
    HouseviewComponent,
    Houseview1Component,
    characterComponent,
    Character1Component
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot([
      { path: "home", component: HomeComponent },
      { path: "", redirectTo: "home", pathMatch: "full" },
      { path: "view", component: ViewComponent },
      { path: "view1", component: View1Component },
      { path: "houseview", component: HouseviewComponent },
      { path: "houseview1", component: Houseview1Component },
      { path: "character", component: characterComponent },
      { path: "character1", component: Character1Component },
      { path: "view1/:searchname", component: View1Component },
      { path: "houseview1/:searchname", component: Houseview1Component },
      { path: "character1/:searchname", component: Character1Component },
      { path: "**", component: HomeComponent }
    ])
  ],
  providers: [GotHttpService],
  bootstrap: [AppComponent]
})
export class AppModule {}
