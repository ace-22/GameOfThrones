(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container-fluid {\r\n  background-image: url(\"https://wallpapercave.com/wp/ZMrAbpu.jpg\");\r\n  background-repeat: no-repeat;\r\n  background-attachment: fixed;\r\n\r\n  width: 100vw;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrRUFBa0U7RUFDbEUsNkJBQTZCO0VBQzdCLDZCQUE2Qjs7RUFFN0IsYUFBYTtDQUNkIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyLWZsdWlkIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJodHRwczovL3dhbGxwYXBlcmNhdmUuY29tL3dwL1pNckFicHUuanBnXCIpO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcclxuXHJcbiAgd2lkdGg6IDEwMHZ3O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- The content below is only a placeholder and can be replaced. -->\n<div style=\"text-align:center\">\n  <div class=\"container-fluid\"></div>\n\n  <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = "Assgmt";
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-root",
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _got_http_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./got-http.service */ "./src/app/got-http.service.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _view_view_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./view/view.component */ "./src/app/view/view.component.ts");
/* harmony import */ var _view1_view1_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./view1/view1.component */ "./src/app/view1/view1.component.ts");
/* harmony import */ var _houseview_houseview_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./houseview/houseview.component */ "./src/app/houseview/houseview.component.ts");
/* harmony import */ var _houseview1_houseview1_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./houseview1/houseview1.component */ "./src/app/houseview1/houseview1.component.ts");
/* harmony import */ var _character_character_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./character/character.component */ "./src/app/character/character.component.ts");
/* harmony import */ var _character1_character1_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./character1/character1.component */ "./src/app/character1/character1.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
                _view_view_component__WEBPACK_IMPORTED_MODULE_8__["ViewComponent"],
                _view1_view1_component__WEBPACK_IMPORTED_MODULE_9__["View1Component"],
                _houseview_houseview_component__WEBPACK_IMPORTED_MODULE_10__["HouseviewComponent"],
                _houseview1_houseview1_component__WEBPACK_IMPORTED_MODULE_11__["Houseview1Component"],
                _character_character_component__WEBPACK_IMPORTED_MODULE_12__["characterComponent"],
                _character1_character1_component__WEBPACK_IMPORTED_MODULE_13__["Character1Component"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_5__["HttpModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot([
                    { path: "home", component: _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"] },
                    { path: "", redirectTo: "home", pathMatch: "full" },
                    { path: "view", component: _view_view_component__WEBPACK_IMPORTED_MODULE_8__["ViewComponent"] },
                    { path: "view1", component: _view1_view1_component__WEBPACK_IMPORTED_MODULE_9__["View1Component"] },
                    { path: "houseview", component: _houseview_houseview_component__WEBPACK_IMPORTED_MODULE_10__["HouseviewComponent"] },
                    { path: "houseview1", component: _houseview1_houseview1_component__WEBPACK_IMPORTED_MODULE_11__["Houseview1Component"] },
                    { path: "character", component: _character_character_component__WEBPACK_IMPORTED_MODULE_12__["characterComponent"] },
                    { path: "character1", component: _character1_character1_component__WEBPACK_IMPORTED_MODULE_13__["Character1Component"] },
                    { path: "view1/:searchname", component: _view1_view1_component__WEBPACK_IMPORTED_MODULE_9__["View1Component"] },
                    { path: "houseview1/:searchname", component: _houseview1_houseview1_component__WEBPACK_IMPORTED_MODULE_11__["Houseview1Component"] },
                    { path: "character1/:searchname", component: _character1_character1_component__WEBPACK_IMPORTED_MODULE_13__["Character1Component"] },
                    { path: "**", component: _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"] }
                ])
            ],
            providers: [_got_http_service__WEBPACK_IMPORTED_MODULE_6__["GotHttpService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/character/character.component.css":
/*!***************************************************!*\
  !*** ./src/app/character/character.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container-fluid {\r\n  background-image: url(\"https://imagesvc.timeincapp.com/v3/fan/image?url=https%3A%2F%2Fwinteriscoming.net%2Ffiles%2F2018%2F05%2FGOT125-32x18-MAIN-SITE.jpg&c=sc&w=850&h=560\");\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n  height: 100vh;\r\n  width: 100vw;\r\n}\r\n.navbar {\r\n  margin-top: 15vh;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  background-color: rgb(117, 113, 113);\r\n  border-radius: 15px;\r\n  background-image: url(\"https://thumbor.forbes.com/thumbor/600x300/https%3A%2F%2Fblogs-images.forbes.com%2Fdavidthier%2Ffiles%2F2017%2F08%2Fskyrim3.jpg\");\r\n}\r\n.form-group {\r\n  border-radius: 15px;\r\n  background-color: rgb(5, 5, 5);\r\n  color: white;\r\n  margin: auto;\r\n}\r\n.cardx {\r\n  text-align: center;\r\n  color: whitesmoke;\r\n\r\n  font-weight: bold;\r\n  border-radius: 15px;\r\n  font-size: 4rem;\r\n  margin-top: 10vh;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhcmFjdGVyL2NoYXJhY3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsNktBQTZLO0VBQzdLLDZCQUE2QjtFQUM3Qix1QkFBdUI7RUFDdkIsY0FBYztFQUNkLGFBQWE7Q0FDZDtBQUNEO0VBQ0UsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIscUNBQXFDO0VBQ3JDLG9CQUFvQjtFQUNwQix5SkFBeUo7Q0FDMUo7QUFDRDtFQUNFLG9CQUFvQjtFQUNwQiwrQkFBK0I7RUFDL0IsYUFBYTtFQUNiLGFBQWE7Q0FDZDtBQUNEO0VBQ0UsbUJBQW1CO0VBQ25CLGtCQUFrQjs7RUFFbEIsa0JBQWtCO0VBQ2xCLG9CQUFvQjtFQUNwQixnQkFBZ0I7RUFDaEIsaUJBQWlCO0NBQ2xCIiwiZmlsZSI6InNyYy9hcHAvY2hhcmFjdGVyL2NoYXJhY3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lci1mbHVpZCB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiaHR0cHM6Ly9pbWFnZXN2Yy50aW1laW5jYXBwLmNvbS92My9mYW4vaW1hZ2U/dXJsPWh0dHBzJTNBJTJGJTJGd2ludGVyaXNjb21pbmcubmV0JTJGZmlsZXMlMkYyMDE4JTJGMDUlMkZHT1QxMjUtMzJ4MTgtTUFJTi1TSVRFLmpwZyZjPXNjJnc9ODUwJmg9NTYwXCIpO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIHdpZHRoOiAxMDB2dztcclxufVxyXG4ubmF2YmFyIHtcclxuICBtYXJnaW4tdG9wOiAxNXZoO1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIG1hcmdpbi1yaWdodDogYXV0bztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTE3LCAxMTMsIDExMyk7XHJcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJodHRwczovL3RodW1ib3IuZm9yYmVzLmNvbS90aHVtYm9yLzYwMHgzMDAvaHR0cHMlM0ElMkYlMkZibG9ncy1pbWFnZXMuZm9yYmVzLmNvbSUyRmRhdmlkdGhpZXIlMkZmaWxlcyUyRjIwMTclMkYwOCUyRnNreXJpbTMuanBnXCIpO1xyXG59XHJcbi5mb3JtLWdyb3VwIHtcclxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig1LCA1LCA1KTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG59XHJcbi5jYXJkeCB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGNvbG9yOiB3aGl0ZXNtb2tlO1xyXG5cclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gIGZvbnQtc2l6ZTogNHJlbTtcclxuICBtYXJnaW4tdG9wOiAxMHZoO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/character/character.component.html":
/*!****************************************************!*\
  !*** ./src/app/character/character.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"container\">\n    <div class=\"cardxx\">\n      <div class=\"cardx\"><u>GOT CHARACTER'S DIRECTORY</u></div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col\">\n        <nav class=\"navbar navbar-light \">\n          <a\n            [routerLink]=\"['/home']\"\n            class=\"navbar-brand\"\n            style=\"margin-top:1.5vh;margin-bottom:2vh;color:rgb(17, 16, 16);\"\n            >Home</a\n          >\n          <a\n            [routerLink]=\"['/view']\"\n            class=\"navbar-brand\"\n            style=\"margin-top:1.5vh;margin-bottom:2vh;color:rgb(17, 16, 16);\"\n            >Books</a\n          >\n          <a\n            [routerLink]=\"['/houseview']\"\n            class=\"navbar-brand\"\n            style=\"margin-top:1.5vh;margin-bottom:2vh;color:rgb(17, 16, 16);\"\n            >Houses</a\n          >\n          <a\n            (click)=\"goback()\"\n            class=\"navbar-brand btn\"\n            style=\"margin-top:1.5vh;margin-bottom:2vh;color:rgb(17, 16, 16);\"\n            >Go Back</a\n          >\n          <form\n            name=\"XYZ\"\n            #formVal=\"ngForm\"\n            class=\"form-inline\"\n            style=\"margin-top:2vh;margin-bottom:2vh;\"\n          >\n            <input\n              class=\"form-control mr-sm-2\"\n              [(ngModel)]=\"searchname\"\n              name=\"searchname\"\n              #houseName=\"ngModel\"\n              type=\"search\"\n              placeholder=\"Enter the name of a House\"\n              aria-label=\"Search\"\n            />\n\n            <button\n              name=\"charactername\"\n              type=\"submit\"\n              (click)=\"navigateComponent()\"\n              class=\"btn btn-outline-success my-2 my-sm-0\"\n            >\n              Search\n            </button>\n          </form>\n        </nav>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/character/character.component.ts":
/*!**************************************************!*\
  !*** ./src/app/character/character.component.ts ***!
  \**************************************************/
/*! exports provided: characterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "characterComponent", function() { return characterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _got_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../got-http.service */ "./src/app/got-http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var characterComponent = /** @class */ (function () {
    function characterComponent(_router, _route, gothttpservice, location) {
        this._router = _router;
        this._route = _route;
        this.gothttpservice = gothttpservice;
        this.location = location;
    }
    characterComponent.prototype.ngOnInit = function () { };
    characterComponent.prototype.navigateComponent = function () {
        this._router.navigate(["/character1", this.searchname]);
    };
    characterComponent.prototype.goback = function () {
        this.location.back();
    };
    characterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-character",
            template: __webpack_require__(/*! ./character.component.html */ "./src/app/character/character.component.html"),
            styles: [__webpack_require__(/*! ./character.component.css */ "./src/app/character/character.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _got_http_service__WEBPACK_IMPORTED_MODULE_1__["GotHttpService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]])
    ], characterComponent);
    return characterComponent;
}());



/***/ }),

/***/ "./src/app/character1/character1.component.css":
/*!*****************************************************!*\
  !*** ./src/app/character1/character1.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container-fluid {\r\n  background-image: url(\"https://imagesvc.timeincapp.com/v3/fan/image?url=https%3A%2F%2Fwinteriscoming.net%2Ffiles%2F2018%2F05%2FGOT125-32x18-MAIN-SITE.jpg&c=sc&w=850&h=560\");\r\n  background-repeat: no-repeat;\r\n\r\n  background-size: cover;\r\n}\r\n\r\n.navbar {\r\n  margin-top: 20vh;\r\n\r\n  background-color: rgb(117, 113, 113);\r\n  border-radius: 15px;\r\n  background-image: url(\"https://thumbor.forbes.com/thumbor/600x300/https%3A%2F%2Fblogs-images.forbes.com%2Fdavidthier%2Ffiles%2F2017%2F08%2Fskyrim3.jpg\");\r\n}\r\n\r\n.form-group {\r\n  border-radius: 15px;\r\n\r\n  color: rgb(255, 255, 255);\r\n  margin: auto;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhcmFjdGVyMS9jaGFyYWN0ZXIxLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw2S0FBNks7RUFDN0ssNkJBQTZCOztFQUU3Qix1QkFBdUI7Q0FDeEI7O0FBRUQ7RUFDRSxpQkFBaUI7O0VBRWpCLHFDQUFxQztFQUNyQyxvQkFBb0I7RUFDcEIseUpBQXlKO0NBQzFKOztBQUNEO0VBQ0Usb0JBQW9COztFQUVwQiwwQkFBMEI7RUFDMUIsYUFBYTtDQUNkIiwiZmlsZSI6InNyYy9hcHAvY2hhcmFjdGVyMS9jaGFyYWN0ZXIxLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyLWZsdWlkIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJodHRwczovL2ltYWdlc3ZjLnRpbWVpbmNhcHAuY29tL3YzL2Zhbi9pbWFnZT91cmw9aHR0cHMlM0ElMkYlMkZ3aW50ZXJpc2NvbWluZy5uZXQlMkZmaWxlcyUyRjIwMTglMkYwNSUyRkdPVDEyNS0zMngxOC1NQUlOLVNJVEUuanBnJmM9c2Mmdz04NTAmaD01NjBcIik7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuXHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufVxyXG5cclxuLm5hdmJhciB7XHJcbiAgbWFyZ2luLXRvcDogMjB2aDtcclxuXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDExNywgMTEzLCAxMTMpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiaHR0cHM6Ly90aHVtYm9yLmZvcmJlcy5jb20vdGh1bWJvci82MDB4MzAwL2h0dHBzJTNBJTJGJTJGYmxvZ3MtaW1hZ2VzLmZvcmJlcy5jb20lMkZkYXZpZHRoaWVyJTJGZmlsZXMlMkYyMDE3JTJGMDglMkZza3lyaW0zLmpwZ1wiKTtcclxufVxyXG4uZm9ybS1ncm91cCB7XHJcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuXHJcbiAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICBtYXJnaW46IGF1dG87XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/character1/character1.component.html":
/*!******************************************************!*\
  !*** ./src/app/character1/character1.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\" *ngIf=\"arrayxx.length > 0\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col\">\n        <nav class=\"navbar navbar-light \">\n          <a\n            [routerLink]=\"['/home']\"\n            class=\"navbar-brand\"\n            style=\"margin-top:1.5vh;margin-bottom:2vh;color:rgb(17, 16, 16);\"\n            >Home</a\n          >\n          <a\n            [routerLink]=\"['/view']\"\n            class=\"navbar-brand\"\n            style=\"margin-top:1.5vh;margin-bottom:2vh;color:rgb(17, 16, 16);\"\n            >Books</a\n          >\n          <a\n            [routerLink]=\"['/houseview']\"\n            class=\"navbar-brand\"\n            style=\"margin-top:1.5vh;margin-bottom:2vh;color:rgb(17, 16, 16);\"\n            >Houses</a\n          >\n          <a\n            (click)=\"goback()\"\n            class=\"navbar-brand btn\"\n            style=\"margin-top:1.5vh;margin-bottom:2vh;color:rgb(17, 16, 16);\"\n          >\n            Go Back\n          </a>\n          <form class=\"form-inline\" style=\"margin-top:2vh;margin-bottom:2vh;\">\n            <input\n              class=\"form-control mr-sm-2\"\n              name=\"scharactername\"\n              [(ngModel)]=\"searchname\"\n              type=\"search\"\n              placeholder=\"{{searchname}}\"\n              aria-label=\"Search\"\n              readonly\n            />\n          </form>\n        </nav>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col\">\n        <div class=\"card text-white bg-dark mb-3\" style=\"margin:auto;\">\n          <div\n            class=\"card-header\"\n            style=\"color:white;border-radius:15px;font-size:30px;margin-top:10vh;\"\n          >\n            <u>{{ arrayxx[0].name }}</u>\n          </div>\n          <br /><br /><br /><br />\n          <div class=\"card-body\">\n            <div class=\"row\">\n              <div\n                class=\"form-group row\"\n                style=\"margin:auto;text-align: center;\"\n              >\n                <label for=\"staticEmail\" class=\"col-2 col-xs-4 col-form-label\"\n                  >Name</label\n                >\n                <div class=\"col-3 col-xs-12\">{{ arrayxx[0].name }}</div>\n              </div>\n            </div>\n            <br /><br />\n            <div class=\"row\">\n              <div\n                class=\"form-group row\"\n                style=\"margin:auto; text-align: center;\"\n              >\n                <label for=\"staticEmail\" class=\"col-2 col-xs-4 col-form-label\"\n                  >Gender</label\n                >\n                <div class=\"col-3 col-xs-12\">{{ arrayxx[0].gender }}</div>\n              </div>\n            </div>\n            <br /><br />\n            <div class=\"row\">\n              <div\n                class=\"form-group row\"\n                style=\"text-align: center;\"\n                *ngIf=\"arrayxx[0].culture.length != 0\"\n              >\n                <label for=\"staticEmail\" class=\"col-2 col-xs-4 col-form-label\"\n                  >Culture</label\n                >\n                <div class=\"col-3 col-xs-12\">{{ arrayxx[0].culture }}</div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div\n                class=\"form-group row\"\n                style=\"text-align: center;\"\n                *ngIf=\"arrayxx[0].culture.length < 1\"\n              >\n                <label for=\"staticEmail\" class=\"col-2 col-xs-4 col-form-label\"\n                  >Culture</label\n                >\n                <div class=\"col-3 col-xs-12\">Not Available</div>\n              </div>\n            </div>\n            <br /><br />\n            <div class=\"row\">\n              <div\n                class=\"form-group row\"\n                style=\"text-align: center;\"\n                *ngIf=\"arrayxx[0].born.length != 0\"\n              >\n                <label for=\"staticEmail\" class=\"col-2 col-xs-4 col-form-label\"\n                  >Born</label\n                >\n                <div class=\"col-3 col-xs-12\">{{ arrayxx[0].born }}</div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div\n                class=\"form-group row\"\n                style=\"text-align: center;\"\n                *ngIf=\"arrayxx[0].born.length < 1\"\n              >\n                <label for=\"staticEmail\" class=\"col-2 col-xs-4 col-form-label\"\n                  >Born</label\n                >\n                <div class=\"col-3 col-xs-12\">Not Available</div>\n              </div>\n            </div>\n            <br /><br />\n            <div class=\"row\">\n              <div\n                class=\"form-group row\"\n                style=\"text-align: center;\"\n                *ngIf=\"arrayxx[0].died.length != 0\"\n              >\n                <label for=\"staticEmail\" class=\"col-2 col-xs-4 col-form-label\"\n                  >Died</label\n                >\n                <div class=\"col-3 col-xs-12\">{{ arrayxx[0].died }}</div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div\n                class=\"form-group row\"\n                style=\"text-align: center;\"\n                *ngIf=\"arrayxx[0].died.length < 1\"\n              >\n                <label for=\"staticEmail\" class=\"col-2 col-xs-4 col-form-label\"\n                  >Died</label\n                >\n                <div class=\"col-3 col-xs-12\">Not Available</div>\n              </div>\n            </div>\n            <br /><br />\n\n            <div class=\"row\">\n              <div\n                class=\"form-group row\"\n                style=\"text-align: center;\"\n                *ngIf=\"arrayxx[0].titles.length > 1\"\n              >\n                <label for=\"staticEmail\" class=\"col-2 col-xs-4 col-form-label\"\n                  >Titles</label\n                >\n                <a\n                  class=\"col-3 col-xs-12\"\n                  style=\"color:white;\"\n                  *ngFor=\"let d of arrayxx[0].titles\"\n                  >{{ d }}</a\n                >\n              </div>\n            </div>\n            <div\n              class=\"form-group row\"\n              style=\"text-align: center;\"\n              *ngIf=\"arrayxx[0].titles.length <= 1\"\n            >\n              <label for=\"staticEmail\" class=\"col-2 col-xs-4 col-form-label\"\n                >Titles</label\n              >\n              <a class=\"col-3 col-xs-12\" style=\"color:white;\">Not Available</a>\n            </div>\n          </div>\n          <br /><br />\n          <div class=\"row\">\n            <div\n              class=\"form-group row\"\n              style=\"text-align: center;\"\n              *ngIf=\"arrayxx[0].aliases.length > 1\"\n            >\n              <label for=\"staticEmail\" class=\"col-2 col-xs-4 col-form-label\"\n                >Aliases</label\n              >\n              <a\n                class=\"col-2 col-xs-12\"\n                style=\"color:white;\"\n                *ngFor=\"let c of arrayxx[0].aliases\"\n                >{{ c }}</a\n              >\n            </div>\n          </div>\n          <div class=\"row\">\n            <div\n              class=\"form-group row\"\n              style=\"text-align: center;\"\n              *ngIf=\"arrayxx[0].aliases.length <= 1\"\n            >\n              <label for=\"staticEmail\" class=\"col-2 col-xs-4 col-form-label\"\n                >Aliases</label\n              >\n              <a class=\"col-2 col-xs-12\" style=\"color:white;\">Not Available</a>\n            </div>\n          </div>\n          <br /><br />\n          <div class=\"row\">\n            <div\n              class=\"form-group row\"\n              style=\"text-align: center;\"\n              *ngIf=\"arrayxx[0].father.length != 0\"\n            >\n              <label for=\"staticEmail\" class=\"col-2 col-xs-4 col-form-label\"\n                >Father</label\n              >\n              <a class=\"col-3 col-xs-12\" style=\"color:white;\">{{\n                arrayxx[0].father\n              }}</a>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div\n              class=\"form-group row\"\n              style=\"text-align: center;\"\n              *ngIf=\"arrayxx[0].father.length < 1\"\n            >\n              <label for=\"staticEmail\" class=\"col-2 col-xs-4 col-form-label\"\n                >Father</label\n              >\n              <a class=\"col-3 col-xs-12\" style=\"color:white;\">Not Available</a>\n            </div>\n          </div>\n          <br /><br />\n          <div class=\"row\">\n            <div\n              class=\"form-group row\"\n              style=\"text-align: center;\"\n              *ngIf=\"arrayxx[0].mother.length != 0\"\n            >\n              <label for=\"staticEmail\" class=\"col-2 col-xs-4 col-form-label\"\n                >Mother</label\n              >\n              <div class=\"col-3 col-xs-12\" style=\"color:white;\">\n                {{ arrayxx[0].mother }}\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div\n              class=\"form-group row\"\n              style=\"text-align: center;\"\n              *ngIf=\"arrayxx[0].mother.length < 1\"\n            >\n              <label for=\"staticEmail\" class=\"col-2 col-xs-4 col-form-label\"\n                >Mother</label\n              >\n              <div class=\"col-3 col-xs-12\" style=\"color:white;\">\n                Not Available\n              </div>\n            </div>\n          </div>\n          <br /><br />\n          <div class=\"row\">\n            <div\n              class=\"form-group row\"\n              style=\"text-align: center;\"\n              *ngIf=\"arrayxx[0].spouse.length != 0\"\n            >\n              <label for=\"staticEmail\" class=\"col-2 col-xs-4 col-form-label\"\n                >Spouse</label\n              >\n              <div class=\"col-3 col-xs-12\" style=\"color:white;\">\n                {{ arrayxx[0].spouse }}\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div\n              class=\"form-group row\"\n              style=\"text-align: center;\"\n              *ngIf=\"arrayxx[0].spouse.length < 1\"\n            >\n              <label for=\"staticEmail\" class=\"col-2 col-xs-4 col-form-label\"\n                >Spouse</label\n              >\n              <div class=\"col-3 col-xs-12\" style=\"color:white;\">\n                Not Available\n              </div>\n            </div>\n          </div>\n          <br /><br />\n          <div class=\"row\">\n            <div\n              class=\"form-group row\"\n              style=\"text-align: center;\"\n              *ngIf=\"arrayxx[0].books.length > 1\"\n            >\n              <label for=\"staticEmail\" class=\"col-2 col-xs-4 col-form-label\"\n                >Books</label\n              >\n              <div\n                class=\"col-3 col-xs-12\"\n                style=\"color:white;\"\n                *ngFor=\"let a of arrayxx[0].books\"\n              >\n                {{ a }}\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div\n              class=\"form-group row\"\n              style=\"text-align: center;\"\n              *ngIf=\"arrayxx[0].books[0].length <= 1\"\n            >\n              <label for=\"staticEmail\" class=\"col-2 col-xs-4 col-form-label\"\n                >Books</label\n              >\n              <div class=\"col-3 col-xs-12\" style=\"color:white;\">\n                Not Available\n              </div>\n            </div>\n          </div>\n          <br /><br />\n          <div class=\"row\">\n            <div\n              class=\"form-group row\"\n              style=\"text-align: center;\"\n              *ngIf=\"arrayxx[0].povBooks.length != 0\"\n            >\n              <label for=\"staticEmail\" class=\"col-2 col-xs-4 col-form-label\"\n                >Pov-Books</label\n              >\n              <div\n                class=\"col-3 col-xs-12\"\n                style=\"color:white;\"\n                *ngFor=\"let e of arrayxx[0].povBooks\"\n              >\n                {{ e }}\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div\n              class=\"form-group row\"\n              style=\"text-align: center;\"\n              *ngIf=\"arrayxx[0].povBooks.length < 1\"\n            >\n              <label for=\"staticEmail\" class=\"col-2 col-xs-4 col-form-label\"\n                >Pov-Books</label\n              >\n              <div class=\"col-3 col-xs-12\" style=\"color:white;\">\n                Not Available\n              </div>\n            </div>\n          </div>\n          <br /><br />\n          <div class=\"row\">\n            <div\n              class=\"form-group row\"\n              style=\"text-align: center;\"\n              *ngIf=\"arrayxx[0].tvSeries[0].length != 0\"\n            >\n              <label for=\"staticEmail\" class=\"col-2 col-xs-4 col-form-label\"\n                >Tv-Series</label\n              >\n              <div\n                class=\"col-3 col-xs-12\"\n                style=\"color:white;\"\n                *ngFor=\"let f of arrayxx[0].tvSeries\"\n              >\n                {{ f }}\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div\n              class=\"form-group row\"\n              style=\"text-align: center;\"\n              *ngIf=\"arrayxx[0].tvSeries[0].length < 1\"\n            >\n              <label for=\"staticEmail\" class=\"col-2 col-xs-4 col-form-label\"\n                >Tv-Series</label\n              >\n              <div\n                class=\"col-3 col-xs-12\"\n                style=\"color:white;\"\n                *ngFor=\"let f of arrayxx[0].tvSeries\"\n              >\n                Not Available\n              </div>\n            </div>\n          </div>\n          <br /><br />\n          <div class=\"row\">\n            <br />\n            <div\n              class=\"form-group row\"\n              style=\"text-align: center;\"\n              *ngIf=\"arrayxx[0].playedBy[0].length != 0\"\n            >\n              <label for=\"staticEmail\" class=\"col-2 col-xs-4 col-form-label\"\n                >Played By</label\n              >\n              <a\n                class=\"col-3 col-xs-12\"\n                style=\"text-align:center;\"\n                style=\"color:white;\"\n                >{{ arrayxx[0].playedBy }}\n              </a>\n            </div>\n            <div\n              class=\"form-group row\"\n              style=\"text-align: center;\"\n              *ngIf=\"arrayxx[0].playedBy[0].length < 1\"\n            >\n              <label for=\"staticEmail\" class=\"col-2 col-xs-4 col-form-label\"\n                >Played By</label\n              >\n              <a\n                class=\"col-3 col-xs-12\"\n                style=\"text-align:center;\"\n                style=\"color:white;\"\n                >Not Available\n              </a>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/character1/character1.component.ts":
/*!****************************************************!*\
  !*** ./src/app/character1/character1.component.ts ***!
  \****************************************************/
/*! exports provided: Character1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Character1Component", function() { return Character1Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _got_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../got-http.service */ "./src/app/got-http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var Character1Component = /** @class */ (function () {
    function Character1Component(gotHttpService, _route, location) {
        this.gotHttpService = gotHttpService;
        this._route = _route;
        this.location = location;
        this.arrayxx = [];
    }
    Character1Component.prototype.ngOnInit = function () {
        var _this = this;
        this.searchname = this._route.snapshot.params["searchname"];
        console.log(this.searchname);
        this.character = this.gotHttpService.getCharacter().subscribe(function (data) {
            _this.character = data;
            for (_this.y = 0; _this.y < _this.character.length; _this.y++) {
                _this.charactername = _this.character[_this.y].name;
                if (_this.charactername == _this.searchname) {
                    _this.arrayxx.push(_this.character[_this.y]);
                    console.log(_this.arrayxx);
                }
            }
        });
    };
    Character1Component.prototype.goback = function () {
        this.location.back();
    };
    Character1Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-character1",
            template: __webpack_require__(/*! ./character1.component.html */ "./src/app/character1/character1.component.html"),
            styles: [__webpack_require__(/*! ./character1.component.css */ "./src/app/character1/character1.component.css")]
        }),
        __metadata("design:paramtypes", [_got_http_service__WEBPACK_IMPORTED_MODULE_1__["GotHttpService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]])
    ], Character1Component);
    return Character1Component;
}());



/***/ }),

/***/ "./src/app/got-http.service.ts":
/*!*************************************!*\
  !*** ./src/app/got-http.service.ts ***!
  \*************************************/
/*! exports provided: GotHttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GotHttpService", function() { return GotHttpService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GotHttpService = /** @class */ (function () {
    function GotHttpService(_http) {
        this._http = _http;
        this.url = "https://anapioficeandfire.com/api/";
    }
    GotHttpService.prototype.getBook = function () {
        var response = this._http.get(this.url + "books" + "?pagesize=2000000");
        console.log(response);
        return response;
    };
    GotHttpService.prototype.getHouse = function () {
        var res = this._http.get(this.url + "houses" + "?pagesize=2000000");
        console.log(res);
        return res;
    };
    GotHttpService.prototype.getCharacter = function () {
        var res = this._http.get(this.url + "characters" + "?pagesize=2000000");
        console.log(res);
        return res;
    };
    GotHttpService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: "root"
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], GotHttpService);
    return GotHttpService;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container-fluid {\r\n  background-image: url(\"https://www.pixelstalk.net/wp-content/uploads/2015/11/Game-of-thrones-season-4-wallpapers-hd.jpg\");\r\n  background-repeat: no-repeat;\r\n\r\n  background-attachment: fixed;\r\n\r\n  background-size: cover;\r\n}\r\n\r\n.card-img-top {\r\n  height: 45vh;\r\n  width: 20vw;\r\n  border-radius: 25px;\r\n  -webkit-border-after: 25px;\r\n          border-block-end: 25px;\r\n}\r\n\r\n.card {\r\n  margin-top: 15vh;\r\n  border-radius: 15px;\r\n}\r\n\r\n.cardx {\r\n  text-align: center;\r\n  color: black;\r\n\r\n  font-weight: bold;\r\n  border-radius: 15px;\r\n  font-size: 4rem;\r\n  margin-top: 10vh;\r\n}\r\n\r\n@media screen and (max-width: 768px) {\r\n  .card-img-top {\r\n    height: 50vh;\r\n    width: 80vw;\r\n    border-radius: 10px;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwwSEFBMEg7RUFDMUgsNkJBQTZCOztFQUU3Qiw2QkFBNkI7O0VBRTdCLHVCQUF1QjtDQUN4Qjs7QUFFRDtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1osb0JBQW9CO0VBQ3BCLDJCQUF1QjtVQUF2Qix1QkFBdUI7Q0FDeEI7O0FBQ0Q7RUFDRSxpQkFBaUI7RUFDakIsb0JBQW9CO0NBQ3JCOztBQUVEO0VBQ0UsbUJBQW1CO0VBQ25CLGFBQWE7O0VBRWIsa0JBQWtCO0VBQ2xCLG9CQUFvQjtFQUNwQixnQkFBZ0I7RUFDaEIsaUJBQWlCO0NBQ2xCOztBQUVEO0VBQ0U7SUFDRSxhQUFhO0lBQ2IsWUFBWTtJQUNaLG9CQUFvQjtHQUNyQjtDQUNGIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyLWZsdWlkIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJodHRwczovL3d3dy5waXhlbHN0YWxrLm5ldC93cC1jb250ZW50L3VwbG9hZHMvMjAxNS8xMS9HYW1lLW9mLXRocm9uZXMtc2Vhc29uLTQtd2FsbHBhcGVycy1oZC5qcGdcIik7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuXHJcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcclxuXHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufVxyXG5cclxuLmNhcmQtaW1nLXRvcCB7XHJcbiAgaGVpZ2h0OiA0NXZoO1xyXG4gIHdpZHRoOiAyMHZ3O1xyXG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgYm9yZGVyLWJsb2NrLWVuZDogMjVweDtcclxufVxyXG4uY2FyZCB7XHJcbiAgbWFyZ2luLXRvcDogMTV2aDtcclxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG59XHJcblxyXG4uY2FyZHgge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjb2xvcjogYmxhY2s7XHJcblxyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgZm9udC1zaXplOiA0cmVtO1xyXG4gIG1hcmdpbi10b3A6IDEwdmg7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgLmNhcmQtaW1nLXRvcCB7XHJcbiAgICBoZWlnaHQ6IDUwdmg7XHJcbiAgICB3aWR0aDogODB2dztcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"container\">\n    <div class=\"cardxx\">\n      <div class=\"cardx\"><u>GAME OF THRONE'S</u></div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-12 col-sm-4 \" style=\"margin-left:10vw; margin:auto;\">\n        <div class=\"card\">\n          <img\n            class=\"card-img-top\"\n            src=\"\n\n          https://images5.alphacoders.com/403/403408.jpg\"\n            alt=\"Card image cap\"\n          />\n          <div class=\"card-body\">\n            <h5\n              class=\"card-title\"\n              style=\"font-style:bold;font-size:2rem;color:black;\"\n            >\n              HOUSE\n            </h5>\n            <p\n              class=\"card-text\"\n              style=\"background-color:rgb(240, 240, 241);border-radius:15px;\"\n            >\n              Know about the various Royal House's\n            </p>\n            <a [routerLink]=\"['/houseview']\" class=\"btn btn-primary\">Search</a>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-12 col-sm-4 \" style=\"margin:auto;\">\n        <div class=\"card\">\n          <img\n            class=\"card-img-top\"\n            src=\"\n          https://images7.alphacoders.com/516/516547.jpg\"\n            alt=\"Card image cap\"\n          />\n          <div class=\"card-body\">\n            <h5\n              class=\"card-title\"\n              style=\"font-style:bold;font-size:2rem;color:black\"\n            >\n              CHARACTER\n            </h5>\n            <p\n              class=\"card-text\"\n              style=\"background-color:rgb(240, 240, 241);border-radius:15px;\"\n            >\n              Detailed info about your favourite character in one click.\n            </p>\n            <a [routerLink]=\"['/character']\" class=\"btn btn-primary\">Search</a>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-12 col-sm-4 \" style=\"margin:auto;\">\n        <div class=\"card bg-light\">\n          <img\n            class=\"card-img-top\"\n            src=\"https://winteriscoming.net/wp-content/blogs.dir/385/files/2014/09/ASOIAF-Set.jpg\"\n            alt=\"Card image cap\"\n          />\n          <div class=\"card-body\">\n            <h5\n              class=\"card-title\"\n              style=\"font-style:bold;font-size:2rem;color:black\"\n            >\n              BOOK'S\n            </h5>\n            <p\n              class=\"card-text\"\n              style=\"background-color:rgb(240, 240, 241);border-radius:15px;\"\n            >\n              Info about your favourite George R.R martin classic.\n            </p>\n            <a [routerLink]=\"['/view']\" class=\"btn btn-primary\">Search</a>\n          </div>\n        </div>\n      </div>\n    </div>\n    <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />\n  </div>\n\n  <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () { };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-home",
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/houseview/houseview.component.css":
/*!***************************************************!*\
  !*** ./src/app/houseview/houseview.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container-fluid {\r\n  background-image: url(\"http://www.widehdimages.com/uploads/large/games/game-of-thrones-season-all-houses-wallpaper.jpg\");\r\n  background-repeat: no-repeat;\r\n\r\n  background-size: 100% 100%;\r\n  height: 100vh;\r\n  width: 100vw;\r\n}\r\n.navbar {\r\n  margin-top: 15vh;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  background-color: rgb(117, 113, 113);\r\n  border-radius: 15px;\r\n  background-image: url(\"https://thumbor.forbes.com/thumbor/600x300/https%3A%2F%2Fblogs-images.forbes.com%2Fdavidthier%2Ffiles%2F2017%2F08%2Fskyrim3.jpg\");\r\n}\r\n.form-group {\r\n  border-radius: 15px;\r\n  background-color: rgb(5, 5, 5);\r\n  color: white;\r\n  margin: auto;\r\n}\r\n.cardx {\r\n  text-align: center;\r\n  color: black;\r\n\r\n  font-weight: bold;\r\n  border-radius: 15px;\r\n  font-size: 4rem;\r\n  margin-top: 10vh;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG91c2V2aWV3L2hvdXNldmlldy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUhBQXlIO0VBQ3pILDZCQUE2Qjs7RUFFN0IsMkJBQTJCO0VBQzNCLGNBQWM7RUFDZCxhQUFhO0NBQ2Q7QUFDRDtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLHFDQUFxQztFQUNyQyxvQkFBb0I7RUFDcEIseUpBQXlKO0NBQzFKO0FBQ0Q7RUFDRSxvQkFBb0I7RUFDcEIsK0JBQStCO0VBQy9CLGFBQWE7RUFDYixhQUFhO0NBQ2Q7QUFFRDtFQUNFLG1CQUFtQjtFQUNuQixhQUFhOztFQUViLGtCQUFrQjtFQUNsQixvQkFBb0I7RUFDcEIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtDQUNsQiIsImZpbGUiOiJzcmMvYXBwL2hvdXNldmlldy9ob3VzZXZpZXcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXItZmx1aWQge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImh0dHA6Ly93d3cud2lkZWhkaW1hZ2VzLmNvbS91cGxvYWRzL2xhcmdlL2dhbWVzL2dhbWUtb2YtdGhyb25lcy1zZWFzb24tYWxsLWhvdXNlcy13YWxscGFwZXIuanBnXCIpO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcblxyXG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgd2lkdGg6IDEwMHZ3O1xyXG59XHJcbi5uYXZiYXIge1xyXG4gIG1hcmdpbi10b3A6IDE1dmg7XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxMTcsIDExMywgMTEzKTtcclxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImh0dHBzOi8vdGh1bWJvci5mb3JiZXMuY29tL3RodW1ib3IvNjAweDMwMC9odHRwcyUzQSUyRiUyRmJsb2dzLWltYWdlcy5mb3JiZXMuY29tJTJGZGF2aWR0aGllciUyRmZpbGVzJTJGMjAxNyUyRjA4JTJGc2t5cmltMy5qcGdcIik7XHJcbn1cclxuLmZvcm0tZ3JvdXAge1xyXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDUsIDUsIDUpO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBtYXJnaW46IGF1dG87XHJcbn1cclxuXHJcbi5jYXJkeCB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGNvbG9yOiBibGFjaztcclxuXHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICBmb250LXNpemU6IDRyZW07XHJcbiAgbWFyZ2luLXRvcDogMTB2aDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/houseview/houseview.component.html":
/*!****************************************************!*\
  !*** ./src/app/houseview/houseview.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"container\">\n    <div class=\"cardxx\">\n      <div class=\"cardx\"><u>GOT HOUSE DIRECTORY</u></div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col\">\n        <nav class=\"navbar navbar-light \">\n          <a\n            [routerLink]=\"['/home']\"\n            class=\"navbar-brand\"\n            style=\"margin-top:1.5vh;margin-bottom:2vh;color:rgb(17, 16, 16);\"\n            >Home</a\n          >\n          <a\n            [routerLink]=\"['/view']\"\n            class=\"navbar-brand\"\n            style=\"margin-top:1.5vh;margin-bottom:2vh;color:rgb(17, 16, 16);\"\n            >Books</a\n          >\n          <a\n            [routerLink]=\"['/character']\"\n            class=\"navbar-brand\"\n            style=\"margin-top:1.5vh;margin-bottom:2vh;color:rgb(17, 16, 16);\"\n            >Characters</a\n          >\n          <a\n            (click)=\"goback()\"\n            class=\"navbar-brand btn\"\n            style=\"margin-top:1.5vh;margin-bottom:2vh;color:rgb(17, 16, 16);\"\n            >Go Back</a\n          >\n          <form\n            name=\"XYZ\"\n            #formVal=\"ngForm\"\n            class=\"form-inline\"\n            style=\"margin-top:2vh;margin-bottom:2vh;\"\n          >\n            <input\n              class=\"form-control mr-sm-2\"\n              [(ngModel)]=\"searchname\"\n              name=\"searchname\"\n              #houseName=\"ngModel\"\n              type=\"search\"\n              placeholder=\"Enter the name of a House\"\n              aria-label=\"Search\"\n            />\n\n            <button\n              name=\"housename\"\n              type=\"submit\"\n              (click)=\"navigateComponent()\"\n              class=\"btn btn-outline-success my-2 my-sm-0\"\n            >\n              Search\n            </button>\n          </form>\n        </nav>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/houseview/houseview.component.ts":
/*!**************************************************!*\
  !*** ./src/app/houseview/houseview.component.ts ***!
  \**************************************************/
/*! exports provided: HouseviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HouseviewComponent", function() { return HouseviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _got_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../got-http.service */ "./src/app/got-http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HouseviewComponent = /** @class */ (function () {
    function HouseviewComponent(_router, _route, gothttpservice, location) {
        this._router = _router;
        this._route = _route;
        this.gothttpservice = gothttpservice;
        this.location = location;
    }
    HouseviewComponent.prototype.ngOnInit = function () { };
    HouseviewComponent.prototype.navigateComponent = function () {
        this._router.navigate(["/houseview1", this.searchname]);
    };
    HouseviewComponent.prototype.goback = function () {
        this.location.back();
    };
    HouseviewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-houseview",
            template: __webpack_require__(/*! ./houseview.component.html */ "./src/app/houseview/houseview.component.html"),
            styles: [__webpack_require__(/*! ./houseview.component.css */ "./src/app/houseview/houseview.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _got_http_service__WEBPACK_IMPORTED_MODULE_1__["GotHttpService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]])
    ], HouseviewComponent);
    return HouseviewComponent;
}());



/***/ }),

/***/ "./src/app/houseview1/houseview1.component.css":
/*!*****************************************************!*\
  !*** ./src/app/houseview1/houseview1.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container-fluid {\r\n  background-image: url(\"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/intermediary/f/711cb8fc-43d7-4a59-84b1-aadcadb32e7f/d5fi9w3-4acd3108-b9fb-4b32-96aa-7f2aecd475fa.jpg/v1/fill/w_900,h_507,q_70,strp/war_of_the_five_kings_wallpaper_v2_by_garyckarntzen_d5fi9w3-fullview.jpg\");\r\n  background-repeat: no-repeat;\r\n  background-attachment: fixed;\r\n\r\n  background-size: cover;\r\n}\r\n\r\n.navbar {\r\n  margin-top: 20vh;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  background-color: rgb(117, 113, 113);\r\n  border-radius: 15px;\r\n  background-image: url(\"https://thumbor.forbes.com/thumbor/600x300/https%3A%2F%2Fblogs-images.forbes.com%2Fdavidthier%2Ffiles%2F2017%2F08%2Fskyrim3.jpg\");\r\n}\r\n\r\n.form-group {\r\n  border-radius: 15px;\r\n\r\n  color: rgb(255, 255, 255);\r\n  margin: auto;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG91c2V2aWV3MS9ob3VzZXZpZXcxLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw2UkFBNlI7RUFDN1IsNkJBQTZCO0VBQzdCLDZCQUE2Qjs7RUFFN0IsdUJBQXVCO0NBQ3hCOztBQUVEO0VBQ0UsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIscUNBQXFDO0VBQ3JDLG9CQUFvQjtFQUNwQix5SkFBeUo7Q0FDMUo7O0FBQ0Q7RUFDRSxvQkFBb0I7O0VBRXBCLDBCQUEwQjtFQUMxQixhQUFhO0NBQ2QiLCJmaWxlIjoic3JjL2FwcC9ob3VzZXZpZXcxL2hvdXNldmlldzEuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXItZmx1aWQge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImh0dHBzOi8vaW1hZ2VzLXdpeG1wLWVkMzBhODZiOGM0Y2E4ODc3NzM1OTRjMi53aXhtcC5jb20vaW50ZXJtZWRpYXJ5L2YvNzExY2I4ZmMtNDNkNy00YTU5LTg0YjEtYWFkY2FkYjMyZTdmL2Q1Zmk5dzMtNGFjZDMxMDgtYjlmYi00YjMyLTk2YWEtN2YyYWVjZDQ3NWZhLmpwZy92MS9maWxsL3dfOTAwLGhfNTA3LHFfNzAsc3RycC93YXJfb2ZfdGhlX2ZpdmVfa2luZ3Nfd2FsbHBhcGVyX3YyX2J5X2dhcnlja2FybnR6ZW5fZDVmaTl3My1mdWxsdmlldy5qcGdcIik7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xyXG5cclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59XHJcblxyXG4ubmF2YmFyIHtcclxuICBtYXJnaW4tdG9wOiAyMHZoO1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIG1hcmdpbi1yaWdodDogYXV0bztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTE3LCAxMTMsIDExMyk7XHJcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJodHRwczovL3RodW1ib3IuZm9yYmVzLmNvbS90aHVtYm9yLzYwMHgzMDAvaHR0cHMlM0ElMkYlMkZibG9ncy1pbWFnZXMuZm9yYmVzLmNvbSUyRmRhdmlkdGhpZXIlMkZmaWxlcyUyRjIwMTclMkYwOCUyRnNreXJpbTMuanBnXCIpO1xyXG59XHJcbi5mb3JtLWdyb3VwIHtcclxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG5cclxuICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gIG1hcmdpbjogYXV0bztcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/houseview1/houseview1.component.html":
/*!******************************************************!*\
  !*** ./src/app/houseview1/houseview1.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\" *ngIf=\"arrayx.length > 0\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col\">\n        <nav class=\"navbar navbar-light \">\n          <a\n            [routerLink]=\"['/home']\"\n            class=\"navbar-brand\"\n            style=\"margin-top:1.5vh;margin-bottom:2vh;color:rgb(17, 16, 16);\"\n            >Home</a\n          >\n          <a\n            [routerLink]=\"['/view']\"\n            class=\"navbar-brand\"\n            style=\"margin-top:1.5vh;margin-bottom:2vh;color:rgb(17, 16, 16);\"\n            >Books</a\n          >\n          <a\n            [routerLink]=\"['/character']\"\n            class=\"navbar-brand\"\n            style=\"margin-top:1.5vh;margin-bottom:2vh;color:rgb(17, 16, 16);\"\n            >Characters</a\n          >\n          <a\n            (click)=\"goback()\"\n            class=\"navbar-brand btn\"\n            style=\"margin-top:1.5vh;margin-bottom:2vh;color:rgb(17, 16, 16);\"\n            >Go Back</a\n          >\n          <form class=\"form-inline\" style=\"margin-top:2vh;margin-bottom:2vh;\">\n            <input\n              class=\"form-control mr-sm-2\"\n              name=\"shousename\"\n              [(ngModel)]=\"searchname\"\n              type=\"search\"\n              placeholder=\"{{searchname}}\"\n              aria-label=\"Search\"\n              readonly\n            />\n          </form>\n        </nav>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col\">\n        <div class=\"card text-white bg-dark mb-3\" style=\"margin:auto;\">\n          <div\n            class=\"card-header\"\n            style=\"color:white;border-radius:15px;font-size:30px;margin-top:10vh;\"\n          >\n            <u>{{ arrayx[0].name }}</u>\n          </div>\n          <br /><br /><br /><br />\n          <div class=\"card-body\">\n            <div class=\"row\">\n              <div\n                class=\"form-group row\"\n                style=\"margin:auto;text-align: center;\"\n                *ngIf=\"arrayx[0].name.length != 0\"\n              >\n                <label for=\"staticEmail\" class=\"col-2 col-xs-4 col-form-label\"\n                  >Name</label\n                >\n                <div class=\"col-3 col-xs-12\">{{ arrayx[0].name }}</div>\n              </div>\n            </div>\n\n            <br /><br />\n            <div class=\"row\">\n              <div\n                class=\"form-group row\"\n                style=\"margin:auto; text-align: center;\"\n                *ngIf=\"arrayx[0].region.length != 0\"\n              >\n                <label for=\"staticEmail\" class=\"col-2 col-xs-4 col-form-label\"\n                  >Region</label\n                >\n                <div class=\"col-3 col-xs-12\">{{ arrayx[0].region }}</div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div\n                class=\"form-group row\"\n                style=\"margin:auto; text-align: center;\"\n                *ngIf=\"arrayx[0].region.length < 1\"\n              >\n                <label for=\"staticEmail\" class=\"col-2 col-xs-4 col-form-label\"\n                  >Region</label\n                >\n                <div class=\"col-3 col-xs-12\">Not Available</div>\n              </div>\n            </div>\n            <br /><br />\n            <div class=\"row\">\n              <div\n                class=\"form-group row\"\n                style=\"text-align: center;\"\n                *ngIf=\"arrayx[0].coatOfArms.length != 0\"\n              >\n                <label for=\"staticEmail\" class=\"col-2 col-xs-4 col-form-label\"\n                  >CoatOfArms</label\n                >\n                <div class=\"col-3 col-xs-12\">{{ arrayx[0].coatOfArms }}</div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div\n                class=\"form-group row\"\n                style=\"text-align: center;\"\n                *ngIf=\"arrayx[0].coatOfArms.length < 1\"\n              >\n                <label for=\"staticEmail\" class=\"col-2 col-xs-4 col-form-label\"\n                  >CoatOfArms</label\n                >\n                <div class=\"col-3 col-xs-12\">Not Available</div>\n              </div>\n            </div>\n            <br /><br />\n            <div class=\"row\">\n              <div\n                class=\"form-group row\"\n                style=\"text-align: center;\"\n                *ngIf=\"arrayx[0].words.length != 0\"\n              >\n                <label for=\"staticEmail\" class=\"col-2 col-xs-4 col-form-label\"\n                  >Words</label\n                >\n                <div class=\"col-3 col-xs-12\">{{ arrayx[0].words }}</div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div\n                class=\"form-group row\"\n                style=\"text-align: center;\"\n                *ngIf=\"arrayx[0].words.length < 1\"\n              >\n                <label for=\"staticEmail\" class=\"col-2 col-xs-4 col-form-label\"\n                  >Words</label\n                >\n                <div class=\"col-3 col-xs-12\">Not Available</div>\n              </div>\n            </div>\n            <br /><br />\n            <div class=\"row\">\n              <div\n                class=\"form-group row\"\n                style=\"text-align: center;\"\n                *ngIf=\"arrayx[0].titles.length > 1\"\n              >\n                <label for=\"staticEmail\" class=\"col-2 col-xs-4 col-form-label\"\n                  >Titles</label\n                >\n                <div class=\"col-3 col-xs-12\" *ngFor=\"let x of arrayx[0].titles\">\n                  {{ x }}\n                </div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div\n                class=\"form-group row\"\n                style=\"text-align: center;\"\n                *ngIf=\"arrayx[0].titles.length <= 1\"\n              >\n                <label for=\"staticEmail\" class=\"col-2 col-xs-4 col-form-label\"\n                  >Titles</label\n                >\n                <div class=\"col-3 col-xs-12\">Not Available</div>\n              </div>\n            </div>\n            <br /><br />\n            <div class=\"row\">\n              <div\n                class=\"form-group row\"\n                style=\"text-align: center;\"\n                *ngIf=\"arrayx[0].seats.length != 0\"\n              >\n                <label for=\"staticEmail\" class=\"col-2 col-xs-4 col-form-label\"\n                  >Seats</label\n                >\n                <div class=\"col-3 col-xs-12\" style=\"color:white;\">\n                  {{ arrayx[0].seats }}\n                </div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div\n                class=\"form-group row\"\n                style=\"text-align: center;\"\n                *ngIf=\"arrayx[0].seats.length < 1\"\n              >\n                <label for=\"staticEmail\" class=\"col-2 col-xs-4 col-form-label\"\n                  >Seats</label\n                >\n                <div class=\"col-3 col-xs-12\" style=\"color:white;\">\n                  Not Available\n                </div>\n              </div>\n            </div>\n            <br /><br />\n            <div class=\"row\">\n              <div\n                class=\"form-group row\"\n                style=\"text-align: center;color:white;\"\n                *ngIf=\"arrayx[0].currentLord.length != 0\"\n              >\n                <label for=\"staticEmail\" class=\"col-2 col-xs-4 col-form-label\"\n                  >Current-Lord</label\n                >\n                <a class=\"col-3 col-xs-12\" style=\"color:white;\">{{\n                  arrayx[0].currentLord\n                }}</a>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div\n                class=\"form-group row\"\n                style=\"text-align: center;color:white;\"\n                *ngIf=\"arrayx[0].currentLord.length < 1\"\n              >\n                <label for=\"staticEmail\" class=\"col-2 col-xs-4 col-form-label\"\n                  >Current-Lord</label\n                >\n                <a class=\"col-3 col-xs-12\" style=\"color:white;\"\n                  >Not Avaialable\n                </a>\n              </div>\n            </div>\n            <br /><br />\n            <div class=\"row\">\n              <div\n                class=\"form-group row\"\n                style=\"text-align: center;color:white;\"\n                *ngIf=\"arrayx[0].heir.length != 0\"\n              >\n                <label for=\"staticEmail\" class=\"col-2 col-xs-4 col-form-label\"\n                  >Heir</label\n                >\n                <a class=\"col-2 col-xs-12\" style=\"color:white;\">{{\n                  arrayx[0].heir\n                }}</a>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div\n                class=\"form-group row\"\n                style=\"text-align: center;color:white;\"\n                *ngIf=\"arrayx[0].heir.length < 1\"\n              >\n                <label for=\"staticEmail\" class=\"col-2 col-xs-4 col-form-label\"\n                  >Heir</label\n                >\n                <a class=\"col-2 col-xs-12\" style=\"color:white;\"\n                  >Not Available</a\n                >\n              </div>\n            </div>\n            <br /><br />\n            <div class=\"row\">\n              <div\n                class=\"form-group row\"\n                style=\"text-align: center;color:white;\"\n                *ngIf=\"arrayx[0].overlord.length != 0\"\n              >\n                <label for=\"staticEmail\" class=\"col-2 col-xs-4 col-form-label\"\n                  >OverLord</label\n                >\n                <a class=\"col-3 col-xs-12\" style=\"color:white;\">{{\n                  arrayx[0].overlord\n                }}</a>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div\n                class=\"form-group row\"\n                style=\"text-align: center;color:white;\"\n                *ngIf=\"arrayx[0].overlord.length < 1\"\n              >\n                <label for=\"staticEmail\" class=\"col-2 col-xs-4 col-form-label\"\n                  >OverLord</label\n                >\n                <a class=\"col-3 col-xs-12\" style=\"color:white;\"\n                  >Not Available\n                </a>\n              </div>\n            </div>\n            <br /><br />\n            <div class=\"row\">\n              <div\n                class=\"form-group row\"\n                style=\"text-align: center;color:white;\"\n                *ngIf=\"arrayx[0].founded.length != 0\"\n              >\n                <label for=\"staticEmail\" class=\"col-2 col-xs-4 col-form-label\"\n                  >Founded</label\n                >\n                <div class=\"col-3 col-xs-12\" style=\"color:white;\">\n                  {{ arrayx[0].founded }}\n                </div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div\n                class=\"form-group row\"\n                style=\"text-align: center;color:white;\"\n                *ngIf=\"arrayx[0].founded.length < 1\"\n              >\n                <label for=\"staticEmail\" class=\"col-2 col-xs-4 col-form-label\"\n                  >Founded</label\n                >\n                <div class=\"col-3 col-xs-12\" style=\"color:white;\">\n                  Not Available\n                </div>\n              </div>\n            </div>\n            <br /><br />\n            <div class=\"row\">\n              <div\n                class=\"form-group row\"\n                style=\"text-align: center;color:white;\"\n                *ngIf=\"arrayx[0].founder.length != 0\"\n              >\n                <label for=\"staticEmail\" class=\"col-2 col-xs-4 col-form-label\"\n                  >Founder</label\n                >\n                <div class=\"col-3 col-xs-12\" style=\"color:white;\">\n                  {{ arrayx[0].founder }}\n                </div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div\n                class=\"form-group row\"\n                style=\"text-align: center;color:white;\"\n                *ngIf=\"arrayx[0].founder.length < 1\"\n              >\n                <label for=\"staticEmail\" class=\"col-2 col-xs-4 col-form-label\"\n                  >Founder</label\n                >\n                <div class=\"col-3 col-xs-12\" style=\"color:white;\">\n                  Not Available\n                </div>\n              </div>\n            </div>\n            <br /><br />\n            <div class=\"row\">\n              <div\n                class=\"form-group row\"\n                style=\"text-align: center;color:white;\"\n                *ngIf=\"arrayx[0].diedOut.length != 0\"\n              >\n                <label for=\"staticEmail\" class=\"col-2 col-xs-4 col-form-label\"\n                  >Died-Out</label\n                >\n                <div class=\"col-3 col-xs-12\" style=\"color:white;\">\n                  {{ arrayx[0].diedOut }}\n                </div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div\n                class=\"form-group row\"\n                style=\"text-align: center;color:white;\"\n                *ngIf=\"arrayx[0].diedOut.length < 1\"\n              >\n                <label for=\"staticEmail\" class=\"col-2 col-xs-4 col-form-label\"\n                  >Died-Out</label\n                >\n                <div class=\"col-3 col-xs-12\" style=\"color:white;\">\n                  Not Available\n                </div>\n              </div>\n            </div>\n            <br /><br />\n            <div class=\"row\">\n              <div\n                class=\"form-group row\"\n                style=\"text-align: center;color:white;\"\n                *ngIf=\"arrayx[0].ancestralWeapons.length > 1\"\n              >\n                <label for=\"staticEmail\" class=\"col-2 col-xs-4 col-form-label\"\n                  >Ancestral-Weapons</label\n                >\n                <div class=\"col-3 col-xs-12\" style=\"color:white;\">\n                  {{ arrayx[0].ancestralWeapons }}\n                </div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div\n                class=\"form-group row\"\n                style=\"text-align: center;color:white;\"\n                *ngIf=\"arrayx[0].ancestralWeapons.length <= 1\"\n              >\n                <label for=\"staticEmail\" class=\"col-2 col-xs-4 col-form-label\"\n                  >Ancestral-Weapons</label\n                >\n                <div class=\"col-3 col-xs-12\" style=\"color:white;\">\n                  Not Available\n                </div>\n              </div>\n            </div>\n            <br /><br />\n            <div class=\"row\">\n              <div\n                class=\"form-group row\"\n                style=\"text-align: center;color:white;\"\n                *ngIf=\"arrayx[0].cadetBranches.length != 0\"\n              >\n                <label for=\"staticEmail\" class=\"col-2 col-xs-4 col-form-label\"\n                  >Cadet-Branches</label\n                >\n                <div class=\"col-3 col-xs-12\" style=\"color:white;\">\n                  {{ arrayx[0].cadetBranches }}\n                </div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div\n                class=\"form-group row\"\n                style=\"text-align: center;color:white;\"\n                *ngIf=\"arrayx[0].cadetBranches.length < 1\"\n              >\n                <label for=\"staticEmail\" class=\"col-2 col-xs-4 col-form-label\"\n                  >Cadet-Branches</label\n                >\n                <div class=\"col-3 col-xs-12\" style=\"color:white;\">\n                  Not Available\n                </div>\n              </div>\n            </div>\n            <br /><br />\n            <div class=\"row\">\n              <br />\n              <div\n                class=\"form-group row\"\n                style=\"text-align: center;color:white;\"\n                *ngIf=\"arrayx[0].swornMembers.length != 0\"\n              >\n                <label for=\"staticEmail\" class=\"col-2 col-xs-4 col-form-label\"\n                  >Sworn-Members</label\n                >\n                <a\n                  class=\" col-3 col-xs-12\"\n                  style=\"text-align:center;color:white;\"\n                  *ngFor=\"let b of arrayx[0].swornMembers\"\n                  >{{ b }}\n                </a>\n              </div>\n            </div>\n            <div class=\"row\">\n              <br />\n              <div\n                class=\"form-group row\"\n                style=\"text-align: center;color:white;\"\n                *ngIf=\"arrayx[0].swornMembers.length < 1\"\n              >\n                <label for=\"staticEmail\" class=\"col-2 col-xs-4 col-form-label\"\n                  >Sworn-Members</label\n                >\n                <a\n                  class=\"col-3 col-xs-12\"\n                  style=\"text-align:center;color:white;\"\n                  >Not Available\n                </a>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/houseview1/houseview1.component.ts":
/*!****************************************************!*\
  !*** ./src/app/houseview1/houseview1.component.ts ***!
  \****************************************************/
/*! exports provided: Houseview1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Houseview1Component", function() { return Houseview1Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _got_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../got-http.service */ "./src/app/got-http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var Houseview1Component = /** @class */ (function () {
    function Houseview1Component(gotHttpService, _route, location) {
        this.gotHttpService = gotHttpService;
        this._route = _route;
        this.location = location;
        this.arrayx = [];
    }
    Houseview1Component.prototype.ngOnInit = function () {
        var _this = this;
        this.searchname = this._route.snapshot.params["searchname"];
        console.log(this.searchname);
        this.house = this.gotHttpService.getHouse().subscribe(function (data) {
            _this.house = data;
            for (_this.y = 0; _this.y < _this.house.length; _this.y++) {
                _this.housename = _this.house[_this.y].name;
                if (_this.housename == _this.searchname) {
                    _this.arrayx.push(_this.house[_this.y]);
                    console.log(_this.arrayx);
                }
            }
        });
    };
    Houseview1Component.prototype.ngOnDestroy = function () {
        var _this = this;
        this.searchname = this._route.snapshot.params["searchname"];
        console.log(this.searchname);
        this.house = this.gotHttpService.getHouse().subscribe(function (data) {
            _this.house = data;
            for (_this.y = 0; _this.y < _this.house.length; _this.y++) {
                _this.housename = _this.house[_this.y].name;
                console.log(_this.housename);
                if (_this.housename == _this.searchname) {
                    _this.arrayx.push(_this.house[_this.y]);
                    console.log(_this.arrayx);
                }
            }
        });
    };
    Houseview1Component.prototype.goback = function () {
        this.location.back();
    };
    Houseview1Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-houseview",
            template: __webpack_require__(/*! ./houseview1.component.html */ "./src/app/houseview1/houseview1.component.html"),
            styles: [__webpack_require__(/*! ./houseview1.component.css */ "./src/app/houseview1/houseview1.component.css")]
        }),
        __metadata("design:paramtypes", [_got_http_service__WEBPACK_IMPORTED_MODULE_1__["GotHttpService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]])
    ], Houseview1Component);
    return Houseview1Component;
}());



/***/ }),

/***/ "./src/app/view/view.component.css":
/*!*****************************************!*\
  !*** ./src/app/view/view.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container-fluid {\r\n  background-image: url(\"https://images5.alphacoders.com/637/thumb-1920-637668.jpg\");\r\n  background-repeat: no-repeat;\r\n  background-attachment: fixed;\r\n\r\n  background-size: cover;\r\n}\r\n.navbar {\r\n  margin-top: 15vh;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  background-color: rgb(117, 113, 113);\r\n  border-radius: 15px;\r\n  background-image: url(\"https://thumbor.forbes.com/thumbor/600x300/https%3A%2F%2Fblogs-images.forbes.com%2Fdavidthier%2Ffiles%2F2017%2F08%2Fskyrim3.jpg\");\r\n}\r\n.card-img-top {\r\n  height: 45vh;\r\n  width: 20vw;\r\n  border-radius: 10px;\r\n}\r\n.card {\r\n  margin-top: 20vh;\r\n  border-radius: 15px;\r\n}\r\n.cardx {\r\n  text-align: center;\r\n  color: black;\r\n\r\n  font-weight: bold;\r\n  border-radius: 15px;\r\n  font-size: 4rem;\r\n  margin-top: 10vh;\r\n}\r\n@media screen and (max-width: 768px) {\r\n  .card-img-top {\r\n    height: 50vh;\r\n    width: 60vw;\r\n    border-radius: 10px;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlldy92aWV3LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtRkFBbUY7RUFDbkYsNkJBQTZCO0VBQzdCLDZCQUE2Qjs7RUFFN0IsdUJBQXVCO0NBQ3hCO0FBQ0Q7RUFDRSxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixxQ0FBcUM7RUFDckMsb0JBQW9CO0VBQ3BCLHlKQUF5SjtDQUMxSjtBQUNEO0VBQ0UsYUFBYTtFQUNiLFlBQVk7RUFDWixvQkFBb0I7Q0FDckI7QUFDRDtFQUNFLGlCQUFpQjtFQUNqQixvQkFBb0I7Q0FDckI7QUFDRDtFQUNFLG1CQUFtQjtFQUNuQixhQUFhOztFQUViLGtCQUFrQjtFQUNsQixvQkFBb0I7RUFDcEIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtDQUNsQjtBQUVEO0VBQ0U7SUFDRSxhQUFhO0lBQ2IsWUFBWTtJQUNaLG9CQUFvQjtHQUNyQjtDQUNGIiwiZmlsZSI6InNyYy9hcHAvdmlldy92aWV3LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyLWZsdWlkIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJodHRwczovL2ltYWdlczUuYWxwaGFjb2RlcnMuY29tLzYzNy90aHVtYi0xOTIwLTYzNzY2OC5qcGdcIik7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xyXG5cclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59XHJcbi5uYXZiYXIge1xyXG4gIG1hcmdpbi10b3A6IDE1dmg7XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxMTcsIDExMywgMTEzKTtcclxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImh0dHBzOi8vdGh1bWJvci5mb3JiZXMuY29tL3RodW1ib3IvNjAweDMwMC9odHRwcyUzQSUyRiUyRmJsb2dzLWltYWdlcy5mb3JiZXMuY29tJTJGZGF2aWR0aGllciUyRmZpbGVzJTJGMjAxNyUyRjA4JTJGc2t5cmltMy5qcGdcIik7XHJcbn1cclxuLmNhcmQtaW1nLXRvcCB7XHJcbiAgaGVpZ2h0OiA0NXZoO1xyXG4gIHdpZHRoOiAyMHZ3O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuLmNhcmQge1xyXG4gIG1hcmdpbi10b3A6IDIwdmg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcclxufVxyXG4uY2FyZHgge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjb2xvcjogYmxhY2s7XHJcblxyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgZm9udC1zaXplOiA0cmVtO1xyXG4gIG1hcmdpbi10b3A6IDEwdmg7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgLmNhcmQtaW1nLXRvcCB7XHJcbiAgICBoZWlnaHQ6IDUwdmg7XHJcbiAgICB3aWR0aDogNjB2dztcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/view/view.component.html":
/*!******************************************!*\
  !*** ./src/app/view/view.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"container\">\n    <div class=\"cardxx\">\n      <div class=\"cardx\"><u>GOT BOOK'S DIRECTORY</u></div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col\">\n        <nav class=\"navbar navbar-light \">\n          <a\n            [routerLink]=\"['/home']\"\n            class=\"navbar-brand\"\n            style=\"margin-top:1.5vh;margin-bottom:2vh;color:rgb(17, 16, 16);\"\n            >Home</a\n          >\n          <a\n            [routerLink]=\"['/houseview']\"\n            class=\"navbar-brand\"\n            style=\"margin-top:1.5vh;margin-bottom:2vh;color:rgb(17, 16, 16);\"\n            >Houses</a\n          >\n          <a\n            [routerLink]=\"['/character']\"\n            class=\"navbar-brand\"\n            style=\"margin-top:1.5vh;margin-bottom:2vh;color:rgb(17, 16, 16);\"\n            >Characters</a\n          >\n          <a\n            (click)=\"goback()\"\n            class=\"navbar-brand btn\"\n            style=\"margin-top:1.5vh;margin-bottom:2vh;color:rgb(17, 16, 16);\"\n            >Go Back</a\n          >\n          <form #createBookForm=\"ngForm\"></form>\n          <div class=\"form-group\">\n            <select\n              [(ngModel)]=\"searchname\"\n              #book=\"ngModel\"\n              name=\"searchname\"\n              class=\"form-control\"\n              id=\"bookname\"\n              required\n            >\n              <option *ngFor=\"let x of books1\" [value]=\"x\">{{ x }}</option>\n            </select>\n          </div>\n\n          <button\n            name=\"search\"\n            type=\"submit\"\n            (click)=\"navigateComponent()\"\n            class=\"btn btn-primary\"\n          >\n            Search\n          </button>\n        </nav>\n      </div>\n      <div class=\"alert\" style=\"font-weight:bold;font-size:2rem;color:black\">\n        <u>\n          Please Select the name of the book in the above search bar from the\n          given below mentioned books to get it's detailed info.\n        </u>\n      </div>\n      <div class=\"row\">\n        <div class=\" col-12 col-sm-4\">\n          <div class=\"card\">\n            <img\n              class=\"card-img-top\"\n              src=\"\n      \n              https://cdn.waterstones.com/bookjackets/large/9780/0074/9780007448036.jpg\"\n              alt=\"Card image cap\"\n            />\n            <div class=\"card-body\">\n              <h5\n                class=\"card-title\"\n                style=\"font-size:25px;color:black; font-style:oblique;border-radius:15px;\"\n              >\n                A Game of Thrones\n              </h5>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-12 col-sm-4 \" style=\"margin:auto;\">\n          <div class=\"card\">\n            <img\n              class=\"card-img-top\"\n              src=\"\n              https://images-na.ssl-images-amazon.com/images/I/51toTzgHGXL._SX324_BO1,204,203,200_.jpg\"\n              alt=\"Card image cap\"\n            />\n            <div class=\"card-body\">\n              <h5\n                class=\"card-title\"\n                style=\"font-size:25px;color:black; font-style:oblique;border-radius:15px;\"\n              >\n                A Clash of Kings\n              </h5>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-12 col-sm-4 \" style=\"margin:auto;\">\n          <div class=\"card bg-light\">\n            <img\n              class=\"card-img-top\"\n              src=\"https://images-na.ssl-images-amazon.com/images/I/51sOF18SI%2BL._SX324_BO1,204,203,200_.jpg\"\n              alt=\"Card image cap\"\n            />\n            <div class=\"card-body\">\n              <h5\n                class=\"card-title\"\n                style=\"font-size:25px;color:black; font-style:oblique;border-radius:15px;\"\n              >\n                A Storm of Swords\n              </h5>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-12 col-sm-4 \" style=\"margin:auto;\">\n          <div class=\"card bg-light\">\n            <img\n              class=\"card-img-top\"\n              src=\"http://images.paperbackswap.com/l/01/9101/9781477849101.jpg\"\n              alt=\"Card image cap\"\n            />\n            <div class=\"card-body\">\n              <h5\n                class=\"card-title\"\n                style=\"font-size:25px;color:black; font-style:oblique;border-radius:15px;\"\n              >\n                The Hedge Knight\n              </h5>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-12 col-sm-4 \" style=\"margin:auto;\">\n          <div class=\"card bg-light\">\n            <img\n              class=\"card-img-top\"\n              src=\"https://awoiaf.westeros.org/thumb.php?f=AFeastForCrows.jpg&width=200\"\n              alt=\"Card image cap\"\n            />\n            <div class=\"card-body\">\n              <h5\n                class=\"card-title\"\n                style=\"font-size:25px;color:black; font-style:oblique;border-radius:15px;\"\n              >\n                A Feast for Crows\n              </h5>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-12 col-sm-4 \" style=\"margin:auto;\">\n          <div class=\"card bg-light\">\n            <img\n              class=\"card-img-top\"\n              src=\"https://images-na.ssl-images-amazon.com/images/I/51ytkDbbfoL.jpg\"\n              alt=\"Card image cap\"\n            />\n            <div class=\"card-body\">\n              <h5\n                class=\"card-title\"\n                style=\"font-size:25px;color:black; font-style:oblique;border-radius:15px;\"\n              >\n                The Sworn Sword\n              </h5>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-12 col-sm-4 \" style=\"margin:auto;\">\n          <div class=\"card bg-light\">\n            <img\n              class=\"card-img-top\"\n              src=\"https://images-na.ssl-images-amazon.com/images/I/617Nb05gD0L._SX318_BO1,204,203,200_.jpg\"\n              alt=\"Card image cap\"\n            />\n            <div class=\"card-body\">\n              <h5\n                class=\"card-title\"\n                style=\"font-size:25px;color:black; font-style:oblique;border-radius:15px;\"\n              >\n                The Mystery Knight\n              </h5>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-12 col-sm-4 \" style=\"margin:auto;\">\n          <div class=\"card bg-light\">\n            <img\n              class=\"card-img-top\"\n              src=\"https://images-na.ssl-images-amazon.com/images/I/51f5%2BHsagGL._SX324_BO1,204,203,200_.jpg\"\n              alt=\"Card image cap\"\n            />\n            <div class=\"card-body\">\n              <h5\n                class=\"card-title\"\n                style=\"font-size:25px;color:black; font-style:oblique;border-radius:15px;\"\n              >\n                A Dance with Dragons\n              </h5>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-12 col-sm-4 \" style=\"margin:auto;\">\n          <div class=\"card bg-light\">\n            <img\n              class=\"card-img-top\"\n              src=\"https://images.gr-assets.com/books/1511221635l/36632543.jpg\"\n              alt=\"Card image cap\"\n            />\n            <div class=\"card-body\">\n              <h5\n                class=\"card-title\"\n                style=\"font-size:25px;color:black; font-style:oblique;border-radius:15px;\"\n              >\n                The Princess and the Queen\n              </h5>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-12 col-sm-4 \" style=\"margin:auto;\">\n          <div class=\"card bg-light\">\n            <img\n              class=\"card-img-top\"\n              src=\"https://awoiaf.westeros.org/thumb.php?f=Rouges_novella.jpg&width=250\"\n              alt=\"Card image cap\"\n            />\n            <div class=\"card-body\">\n              <h5\n                class=\"card-title\"\n                style=\"font-size:25px;color:black; font-style:oblique;border-radius:15px;\"\n              >\n                The Rogue Prince\n              </h5>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-12 col-sm-4 \" style=\"margin:auto;\">\n          <div class=\"card bg-light\">\n            <img\n              class=\"card-img-top\"\n              src=\"http://www.georgerrmartin.com/wp-content/uploads/2014/03/World-of-Ice-and-Fire-jkt-ElioLinda-1.jpg\"\n              alt=\"Card image cap\"\n            />\n            <div class=\"card-body\">\n              <h5\n                class=\"card-title\"\n                style=\"font-size:25px;color:black; font-style:oblique;border-radius:15px;\"\n              >\n                World of Ice and Fire\n              </h5>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-12 col-sm-4 \" style=\"margin:auto;\">\n          <div class=\"card bg-light\">\n            <img\n              class=\"card-img-top\"\n              src=\"https://cdn.waterstones.com/bookjackets/large/9780/0082/9780008238094.jpg\"\n              alt=\"Card image cap\"\n            />\n            <div class=\"card-body\">\n              <h5\n                class=\"card-title\"\n                style=\"font-size:25px;color:black; font-style:oblique;border-radius:15px;\"\n              >\n                A knight of seven kingdoms\n              </h5>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/view/view.component.ts":
/*!****************************************!*\
  !*** ./src/app/view/view.component.ts ***!
  \****************************************/
/*! exports provided: ViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewComponent", function() { return ViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _got_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../got-http.service */ "./src/app/got-http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ViewComponent = /** @class */ (function () {
    function ViewComponent(_route, router, gotHttpService, location) {
        this._route = _route;
        this.router = router;
        this.gotHttpService = gotHttpService;
        this.location = location;
        this.books1 = [
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
    }
    ViewComponent.prototype.showParam = function (variable) {
        console.log(this.searchname);
    };
    ViewComponent.prototype.ngOnInit = function () { };
    ViewComponent.prototype.navigateComponent = function () {
        this.router.navigate(["/view1", this.searchname]);
    };
    ViewComponent.prototype.goback = function () {
        this.location.back();
    };
    ViewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-view",
            template: __webpack_require__(/*! ./view.component.html */ "./src/app/view/view.component.html"),
            styles: [__webpack_require__(/*! ./view.component.css */ "./src/app/view/view.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _got_http_service__WEBPACK_IMPORTED_MODULE_3__["GotHttpService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]])
    ], ViewComponent);
    return ViewComponent;
}());



/***/ }),

/***/ "./src/app/view1/view1.component.css":
/*!*******************************************!*\
  !*** ./src/app/view1/view1.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container-fluid {\r\n  background-image: url(\"https://i2.wp.com/www.dianematthewsdance.com/wp-content/uploads/2014/11/snow-winter-wallpaper-hd.jpg\");\r\n  background-repeat: no-repeat;\r\n  background-attachment: fixed;\r\n\r\n  background-size: cover;\r\n}\r\n.navbar {\r\n  margin-top: 20vh;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  background-color: rgb(117, 113, 113);\r\n  border-radius: 15px;\r\n  background-image: url(\"https://thumbor.forbes.com/thumbor/600x300/https%3A%2F%2Fblogs-images.forbes.com%2Fdavidthier%2Ffiles%2F2017%2F08%2Fskyrim3.jpg\");\r\n}\r\n.form-group {\r\n  font-weight: bold;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlldzEvdmlldzEuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDhIQUE4SDtFQUM5SCw2QkFBNkI7RUFDN0IsNkJBQTZCOztFQUU3Qix1QkFBdUI7Q0FDeEI7QUFDRDtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLHFDQUFxQztFQUNyQyxvQkFBb0I7RUFDcEIseUpBQXlKO0NBQzFKO0FBQ0Q7RUFDRSxrQkFBa0I7Q0FDbkIiLCJmaWxlIjoic3JjL2FwcC92aWV3MS92aWV3MS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lci1mbHVpZCB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiaHR0cHM6Ly9pMi53cC5jb20vd3d3LmRpYW5lbWF0dGhld3NkYW5jZS5jb20vd3AtY29udGVudC91cGxvYWRzLzIwMTQvMTEvc25vdy13aW50ZXItd2FsbHBhcGVyLWhkLmpwZ1wiKTtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XHJcblxyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn1cclxuLm5hdmJhciB7XHJcbiAgbWFyZ2luLXRvcDogMjB2aDtcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDExNywgMTEzLCAxMTMpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiaHR0cHM6Ly90aHVtYm9yLmZvcmJlcy5jb20vdGh1bWJvci82MDB4MzAwL2h0dHBzJTNBJTJGJTJGYmxvZ3MtaW1hZ2VzLmZvcmJlcy5jb20lMkZkYXZpZHRoaWVyJTJGZmlsZXMlMkYyMDE3JTJGMDglMkZza3lyaW0zLmpwZ1wiKTtcclxufVxyXG4uZm9ybS1ncm91cCB7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/view1/view1.component.html":
/*!********************************************!*\
  !*** ./src/app/view1/view1.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\" *ngIf=\"array.length > 0\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col\">\n        <nav class=\"navbar navbar-light \">\n          <a\n            [routerLink]=\"['/home']\"\n            class=\"navbar-brand\"\n            (mouseover)=\"underline()\"\n            (mouseout)=\"normal()\"\n            style=\"margin-top:1.5vh;margin-bottom:2vh;color:rgb(17, 16, 16);\"\n            >Home</a\n          >\n          <a\n            [routerLink]=\"['/houseview']\"\n            class=\"navbar-brand\"\n            style=\"margin-top:1.5vh;margin-bottom:2vh;color:rgb(17, 16, 16);\"\n            >Houses</a\n          >\n          <a\n            [routerLink]=\"['/character']\"\n            class=\"navbar-brand\"\n            style=\"margin-top:1.5vh;margin-bottom:2vh;color:rgb(17, 16, 16);\"\n            >Characters</a\n          >\n          <a\n            (click)=\"goback()\"\n            class=\"navbar-brand btn\"\n            style=\"margin-top:1.5vh;margin-bottom:2vh;color:rgb(17, 16, 16);\"\n            >Go Back</a\n          >\n          <form class=\"form-inline\" style=\"margin-top:2vh;margin-bottom:2vh;\">\n            <input\n              class=\"form-control mr-sm-2\"\n              name=\"bookname\"\n              type=\"search\"\n              [(ngModel)]=\"searchname\"\n              aria-label=\"Search\"\n              readonly\n            />\n          </form>\n        </nav>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col\">\n        <div class=\"card text-white bg-dark mb-3\" style=\"margin:auto;\">\n          <div\n            class=\"card-header\"\n            style=\"color:black;border-radius:15px;font-size:30px;margin-top:10vh;\"\n          >\n            <u>{{ array[0].name }}</u>\n          </div>\n          <br /><br /><br /><br />\n          <div class=\"card-body\">\n            <div class=\"row\">\n              <div class=\"form-group row\" style=\"margin:auto;\">\n                <label for=\"staticEmail\" class=\"col-2 col-xs-4 col-form-label\"\n                  >Name</label\n                >\n                <div class=\"col-3 col-xs-12\">{{ array[0].name }}</div>\n              </div>\n            </div>\n            <br /><br />\n            <div class=\"row\">\n              <div class=\"form-group row\" style=\"margin:auto;\">\n                <label for=\"staticEmail\" class=\"col-2 col-xs-4 col-form-label\"\n                  >Authors</label\n                >\n                <div class=\"col-3 col-xs-12\">{{ array[0].authors[0] }}</div>\n              </div>\n            </div>\n            <br /><br />\n            <div class=\"row\">\n              <div class=\"form-group row\" style=\"margin:auto;\">\n                <label for=\"staticEmail\" class=\"col-2 col-xs-4 col-form-label\"\n                  >Publisher</label\n                >\n                <div class=\"col-3 col-xs-12\">{{ array[0].publisher }}</div>\n              </div>\n            </div>\n            <br /><br />\n            <div class=\"row\">\n              <div class=\"form-group row\" style=\"margin:auto;\">\n                <label for=\"staticEmail\" class=\"col-2 col-xs-4 col-form-label\"\n                  >Number of pages</label\n                >\n                <div class=\"col-3 col-xs-12\">{{ array[0].numberOfPages }}</div>\n              </div>\n            </div>\n            <br /><br />\n            <div class=\"row\">\n              <div class=\"form-group row\" style=\"margin:auto;\">\n                <label for=\"staticEmail\" class=\"col-2 col-xs-4 col-form-label\"\n                  >Country</label\n                >\n                <div class=\"col-3 col-xs-12\">{{ array[0].country }}</div>\n              </div>\n            </div>\n            <br /><br />\n            <div class=\"row\">\n              <div class=\"form-group row\" style=\"margin:auto;\">\n                <label for=\"staticEmail\" class=\"col-2 col-xs-4 col-form-label\"\n                  >Released</label\n                >\n                <div class=\"col-3 col-xs-12\">\n                  {{ array[0].released | date: \"dd/MM/yyyy\" }}\n                </div>\n              </div>\n            </div>\n            <br /><br />\n            <div class=\"row\">\n              <div class=\"form-group row\" style=\"margin:auto;\">\n                <label for=\"staticEmail\" class=\"col-2 col-xs-4 col-form-label\"\n                  >ISBN</label\n                >\n                <div class=\"col-3 col-xs-12\">{{ array[0].isbn }}</div>\n              </div>\n            </div>\n            <br /><br />\n            <div class=\"row\">\n              <div\n                class=\"form-group row\"\n                style=\"margin:auto;\"\n                *ngIf=\"array[0].characters.length != 0\"\n              >\n                <label for=\"staticEmail\" class=\"col-2 col-xs-4 col-form-label\"\n                  >Characters</label\n                >\n                <div\n                  class=\"col-3 col-xs-12\"\n                  *ngFor=\"let a of array[0].characters\"\n                >\n                  {{ a }}\n                </div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div\n                class=\"form-group row\"\n                style=\"margin:auto;\"\n                *ngIf=\"array[0].characters.length < 1\"\n              >\n                <label for=\"staticEmail\" class=\"col-2 col-xs-4 col-form-label\"\n                  >Characters</label\n                >\n                <div class=\"col-3 col-xs-12\">Not Available</div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div\n                class=\"form-group row\"\n                style=\"margin:auto;\"\n                *ngIf=\"array[0].povCharacters.length != 0\"\n              >\n                <label for=\"staticEmail\" class=\"col-2 col-xs-4 col-form-label\"\n                  >Pov-Characters</label\n                >\n                <div\n                  class=\"col-3 col-xs-12\"\n                  *ngFor=\"let b of array[0].povCharacters\"\n                >\n                  {{ b }}\n                </div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div\n                class=\"form-group row\"\n                style=\"margin:auto;\"\n                *ngIf=\"array[0].povCharacters.length < 1\"\n              >\n                <label for=\"staticEmail\" class=\"col-2 col-xs-4 col-form-label\"\n                  >Pov-Characters</label\n                >\n                <div class=\"col-3 col-xs-12\">Not Available</div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/view1/view1.component.ts":
/*!******************************************!*\
  !*** ./src/app/view1/view1.component.ts ***!
  \******************************************/
/*! exports provided: View1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View1Component", function() { return View1Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _got_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../got-http.service */ "./src/app/got-http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var View1Component = /** @class */ (function () {
    function View1Component(gotHttpService, route, location) {
        this.gotHttpService = gotHttpService;
        this.route = route;
        this.location = location;
        this.array = [];
    }
    View1Component.prototype.ngOnInit = function () {
        var _this = this;
        this.searchname = this.route.snapshot.params["searchname"];
        console.log(this.searchname);
        this.book = this.gotHttpService.getBook().subscribe(function (data) {
            _this.book = data;
            for (_this.x = 0; _this.x < _this.book.length; _this.x++) {
                _this.bookname = _this.book[_this.x].name;
                if (_this.bookname == _this.searchname) {
                    _this.array.push(_this.book[_this.x]);
                    console.log(_this.array);
                }
            }
        });
    };
    View1Component.prototype.goback = function () {
        this.location.back();
    };
    View1Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-view1",
            template: __webpack_require__(/*! ./view1.component.html */ "./src/app/view1/view1.component.html"),
            styles: [__webpack_require__(/*! ./view1.component.css */ "./src/app/view1/view1.component.css")]
        }),
        __metadata("design:paramtypes", [_got_http_service__WEBPACK_IMPORTED_MODULE_1__["GotHttpService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]])
    ], View1Component);
    return View1Component;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Dushyant\Desktop\Assgmt\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map