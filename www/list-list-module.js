(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["list-list-module"],{

/***/ "./src/app/list/list.module.ts":
/*!*************************************!*\
  !*** ./src/app/list/list.module.ts ***!
  \*************************************/
/*! exports provided: ListPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListPageModule", function() { return ListPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _list_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./list.page */ "./src/app/list/list.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var ListPageModule = /** @class */ (function () {
    function ListPageModule() {
    }
    ListPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _list_page__WEBPACK_IMPORTED_MODULE_5__["ListPage"]
                    }
                ])
            ],
            declarations: [_list_page__WEBPACK_IMPORTED_MODULE_5__["ListPage"]]
        })
    ], ListPageModule);
    return ListPageModule;
}());



/***/ }),

/***/ "./src/app/list/list.page.html":
/*!*************************************!*\
  !*** ./src/app/list/list.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      List\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    \n     <ion-slides pager=\"true\">\n       <ion-slide>\n            <ion-img src=\"/assets/slide2.jpg\"></ion-img>   \n       </ion-slide>\n       <ion-slide>\n            <ion-img src=\"/assets/slide2.jpg\"></ion-img>\n       </ion-slide>\n       <ion-slide>\n            <ion-img src=\"/assets/slide2.jpg\"></ion-img>\n       </ion-slide>\n    </ion-slides>\n    \n    <ion-grid>\n        \n        <ion-row>\n            <ion-col size=\"6\">\n                      <ion-img src=\"/assets/slide2.jpg\"></ion-img>\n                      <ion-label class=\"categoryLabel\">kdalkdjlkad</ion-label>\n            </ion-col>\n            <ion-col size=\"6\">\n                <ion-img src=\"/assets/slide2.jpg\"></ion-img>\n                      <ion-label class=\"categoryLabel\">kdalkdjlkad</ion-label>\n            </ion-col>\n        </ion-row>\n        <ion-row style=\"background-color: yellow\">\n            <ion-col size=\"3\" offset=\"1\">\n                <ion-img src=\"/assets/slide2.jpg\"></ion-img>\n            </ion-col>\n            <ion-col class=\"homeLable\" size=\"7\" offset=\"1\">\n                <ion-label>kdalkdjlkad</ion-label>\n            </ion-col>\n        </ion-row>\n        <ion-row>\n            <ion-col size=\"6\">\n                <ion-img src=\"/assets/slide2.jpg\"></ion-img>\n                      <ion-label class=\"categoryLabel\">kdalkdjlkad</ion-label>\n            </ion-col>\n            <ion-col size=\"6\">\n                <ion-img src=\"/assets/slide2.jpg\"></ion-img>\n                      <ion-label class=\"categoryLabel\">kdalkdjlkad</ion-label>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/list/list.page.scss":
/*!*************************************!*\
  !*** ./src/app/list/list.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".categoryLabel {\n  position: absolute;\n  top: 75px;\n  bottom: 0px;\n  left: 15px;\n  right: 0px;\n  color: #FFF; }\n\n.homeLable {\n  margin: auto; }\n\nion-slides {\n  height: 35%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL2hhcmQgL01hcmtldEFwcDQvc3JjL2FwcC9saXN0L2xpc3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxXQUFXO0VBQ1gsVUFBVTtFQUNWLFVBQVU7RUFDVixXQUFXLEVBQUE7O0FBR2Y7RUFDRyxZQUFZLEVBQUE7O0FBR2Y7RUFDSSxXQUFXLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9saXN0L2xpc3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhdGVnb3J5TGFiZWx7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNzVweDtcbiAgICBib3R0b206IDBweDtcbiAgICBsZWZ0OiAxNXB4O1xuICAgIHJpZ2h0OiAwcHg7XG4gICAgY29sb3I6ICNGRkY7XG59XG5cbi5ob21lTGFibGV7XG4gICBtYXJnaW46IGF1dG87XG59XG5cbmlvbi1zbGlkZXN7XG4gICAgaGVpZ2h0OiAzNSU7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/list/list.page.ts":
/*!***********************************!*\
  !*** ./src/app/list/list.page.ts ***!
  \***********************************/
/*! exports provided: ListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListPage", function() { return ListPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ListPage = /** @class */ (function () {
    function ListPage() {
    }
    ListPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-list',
            template: __webpack_require__(/*! ./list.page.html */ "./src/app/list/list.page.html"),
            styles: [__webpack_require__(/*! ./list.page.scss */ "./src/app/list/list.page.scss")]
        })
    ], ListPage);
    return ListPage;
}());



/***/ })

}]);
//# sourceMappingURL=list-list-module.js.map