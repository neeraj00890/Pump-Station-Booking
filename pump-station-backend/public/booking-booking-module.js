(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["booking-booking-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/booking/book-slot-grid/book-slot-grid.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/booking/book-slot-grid/book-slot-grid.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n    <div class=\"container\">\n        <div class=\"col-md-2\"></div>\n        <div class=\"col-md-8\">\n            <h3>Booked Details</h3>\n            <table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\n\n    \n                <ng-container matColumnDef=\"type\">\n                  <th mat-header-cell *matHeaderCellDef> Booking Type </th>\n                  <td mat-cell *matCellDef=\"let element\"> {{element.type}} </td>\n                </ng-container>\n              \n               \n                <ng-container matColumnDef=\"start\">\n                  <th mat-header-cell *matHeaderCellDef> Booking Start </th>\n                  <td mat-cell *matCellDef=\"let element\"> {{element.start}} </td>\n                </ng-container>\n              \n                \n                <ng-container matColumnDef=\"end\">\n                  <th mat-header-cell *matHeaderCellDef> Booking end </th>\n                  <td mat-cell *matCellDef=\"let element\"> {{element.end}} </td>\n                </ng-container>\n              \n              \n                <ng-container matColumnDef=\"station\">\n                  <th mat-header-cell *matHeaderCellDef>  Station </th>\n                  <td mat-cell *matCellDef=\"let element\"> {{element.station}} </td>\n                </ng-container>\n\n                <ng-container matColumnDef=\"Username\">\n                    <th mat-header-cell *matHeaderCellDef>  User Name </th>\n                    <td mat-cell *matCellDef=\"let element\"> {{element.userId.userName}} </td>\n                  </ng-container>\n              \n                <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n                <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n              </table>\n        </div>\n        <div class=\"col-md-2\"></div>\n    </div>\n</div>\n\n  \n  \n  \n  <!-- Copyright 2020 Google LLC. All Rights Reserved.\n      Use of this source code is governed by an MIT-style license that\n      can be found in the LICENSE file at http://angular.io/license -->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/booking/booking-form/booking-form.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/booking/booking-form/booking-form.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div class=\"row\">\n    <div class=\"container\">\n        <div class=\"col-md-4\">\n\n        </div>\n        <div class=\"col-md-4 well\">\n            <h3>Booking Form</h3>\n            <form action=\"\" #bookForm ='ngForm'>\n\n\n  \n\n                <mat-form-field appearance=\"fill\">\n                  <mat-label>Book for</mat-label>\n                  <mat-select name =\"type\"  [(ngModel)]=\"type\">\n                    <mat-option value=\"Gas\">Gas</mat-option>\n                    <mat-option value=\"Diesel\" >Diesel</mat-option>\n                    <mat-option value=\"Petrol\" >Petrol</mat-option>\n                  </mat-select>\n                </mat-form-field>\n                <br>\n                <mat-form-field appearance=\"fill\">\n                  <mat-label>Avaiable Station</mat-label>\n                  <mat-select name =\"station\"  [(ngModel)]=\"station\" >\n                    <mat-option *ngFor=\" let station of fuelStation\" [value]=\"station.station_name\">{{station.station_name}}</mat-option>\n                    \n                  </mat-select>\n                </mat-form-field>\n                <br>\n                <mat-form-field appearance=\"fill\">\n                  <mat-label>Start time</mat-label>\n                <!-- #docregion toggle -->\n                  <input name=\"startTime\" matInput [matDatepicker]=\"picker\" [(ngModel)]=\"startTime\">\n                  <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n                  <mat-datepicker #picker></mat-datepicker>\n                <!-- #enddocregion toggle -->\n                </mat-form-field>\n                <br>\n                <mat-form-field appearance=\"fill\">\n                  <mat-label>End time</mat-label>\n                <!-- #docregion toggle -->\n                  <input matInput name=\"endTime\" [matDatepicker]=\"picker1\" [(ngModel)]=\"endTime\">\n                  <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\n                  <mat-datepicker #picker1></mat-datepicker>\n                <!-- #enddocregion toggle -->\n                </mat-form-field>\n                <br>\n                <button mat-raised-button color=\"primary\" (click)=\"onBooking(bookForm)\">Book</button>\n               \n               \n          </form>\n        </div>\n        <div class=\"col-md-4\">\n            \n        </div>\n    </div>\n</div>\n\n\n\n  \n  \n  <!-- Copyright 2020 Google LLC. All Rights Reserved.\n      Use of this source code is governed by an MIT-style license that\n      can be found in the LICENSE file at http://angular.io/license -->");

/***/ }),

/***/ "./src/app/booking/book-slot-grid/book-slot-grid.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/booking/book-slot-grid/book-slot-grid.component.css ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("td {\r\n    padding: 10px !important;\r\n}\r\nth{\r\n    padding: 10px !important;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYm9va2luZy9ib29rLXNsb3QtZ3JpZC9ib29rLXNsb3QtZ3JpZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksd0JBQXdCO0FBQzVCO0FBQ0E7SUFDSSx3QkFBd0I7QUFDNUIiLCJmaWxlIjoic3JjL2FwcC9ib29raW5nL2Jvb2stc2xvdC1ncmlkL2Jvb2stc2xvdC1ncmlkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0ZCB7XHJcbiAgICBwYWRkaW5nOiAxMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxudGh7XHJcbiAgICBwYWRkaW5nOiAxMHB4ICFpbXBvcnRhbnQ7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/booking/book-slot-grid/book-slot-grid.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/booking/book-slot-grid/book-slot-grid.component.ts ***!
  \********************************************************************/
/*! exports provided: BookSlotGridComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookSlotGridComponent", function() { return BookSlotGridComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _booking_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../booking-service */ "./src/app/booking/booking-service.ts");



let BookSlotGridComponent = class BookSlotGridComponent {
    constructor(bookService) {
        this.bookService = bookService;
        this.displayedColumns = ['type', 'start', 'end', 'station', 'Username'];
        this.bookings = [];
    }
    ngOnInit() {
        this.bookService.loadGridData().subscribe((data) => {
            if (data['success']) {
                delete data['success'];
                for (let x in data) {
                    this.bookings.push(data[x]);
                }
                this.dataSource = this.bookings;
                console.log(this.bookings);
            }
        });
    }
};
BookSlotGridComponent.ctorParameters = () => [
    { type: _booking_service__WEBPACK_IMPORTED_MODULE_2__["BookingService"] }
];
BookSlotGridComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-book-slot-grid',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./book-slot-grid.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/booking/book-slot-grid/book-slot-grid.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./book-slot-grid.component.css */ "./src/app/booking/book-slot-grid/book-slot-grid.component.css")).default]
    })
], BookSlotGridComponent);



/***/ }),

/***/ "./src/app/booking/booking-form/booking-form.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/booking/booking-form/booking-form.component.css ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jvb2tpbmcvYm9va2luZy1mb3JtL2Jvb2tpbmctZm9ybS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/booking/booking-form/booking-form.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/booking/booking-form/booking-form.component.ts ***!
  \****************************************************************/
/*! exports provided: BookingFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookingFormComponent", function() { return BookingFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _booking_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../booking-service */ "./src/app/booking/booking-service.ts");





let BookingFormComponent = class BookingFormComponent {
    constructor(router, activeRoute, bookservice, _snackBar) {
        this.router = router;
        this.activeRoute = activeRoute;
        this.bookservice = bookservice;
        this._snackBar = _snackBar;
        this.fuelStation = [];
    }
    ngOnInit() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                var latlng = `${position.coords.latitude}, ${position.coords.longitude}`;
                console.log(position.coords.latitude);
                console.log(position.coords.longitude);
                let URL = `https://developer.nrel.gov/api/alt-fuel-stations/v1.json?limit=10&api_key=BbnvEzYzwnjTK3gNEPZyHFgnAR5e5nRamHaH6WPf`;
                this.bookservice.getAddress(URL).subscribe((data) => {
                    this.fuelStation = data['fuel_stations'];
                });
            });
            console.log(this.fuelStation);
        }
        console.log(this.activeRoute.snapshot.data['data']);
        console.log(Map);
    }
    onBooking(bookForm) {
        this.bookservice.bookSlot(bookForm).subscribe((data) => {
            if (data['success']) {
                this._snackBar.open('Booking Succesfull', 'Ok', {
                    duration: 2000,
                });
            }
        });
    }
};
BookingFormComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _booking_service__WEBPACK_IMPORTED_MODULE_4__["BookingService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"] }
];
BookingFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-booking-form',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./booking-form.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/booking/booking-form/booking-form.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./booking-form.component.css */ "./src/app/booking/booking-form/booking-form.component.css")).default]
    })
], BookingFormComponent);



/***/ }),

/***/ "./src/app/booking/booking-service.ts":
/*!********************************************!*\
  !*** ./src/app/booking/booking-service.ts ***!
  \********************************************/
/*! exports provided: BookingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookingService", function() { return BookingService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");



let BookingService = class BookingService {
    constructor(http) {
        this.http = http;
    }
    getAddress(url) {
        return this.http.get(url);
    }
    bookSlot(bookForm) {
        const URL = `pump/book/bookSlot`;
        let data = {
            type: bookForm.controls.type.value,
            station: bookForm.controls.station.value,
            startTime: bookForm.controls.startTime.value,
            endTime: bookForm.controls.endTime.value,
            userId: localStorage.getItem('loggedInUser')
        };
        return this.http.post(URL, data);
    }
    loadGridData() {
        return this.http.get(`pump/book/gridData`);
    }
};
BookingService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
BookingService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()
], BookingService);



/***/ }),

/***/ "./src/app/booking/booking.module.ts":
/*!*******************************************!*\
  !*** ./src/app/booking/booking.module.ts ***!
  \*******************************************/
/*! exports provided: BookingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookingModule", function() { return BookingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _booking_form_booking_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./booking-form/booking-form.component */ "./src/app/booking/booking-form/booking-form.component.ts");
/* harmony import */ var _book_slot_grid_book_slot_grid_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./book-slot-grid/book-slot-grid.component */ "./src/app/booking/book-slot-grid/book-slot-grid.component.ts");
/* harmony import */ var _booking_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./booking.routing.module */ "./src/app/booking/booking.routing.module.ts");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../material/material.module */ "./src/app/material/material.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _bookingFormResolver__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./bookingFormResolver */ "./src/app/booking/bookingFormResolver.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _booking_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./booking-service */ "./src/app/booking/booking-service.ts");











let BookingModule = class BookingModule {
};
BookingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_booking_form_booking_form_component__WEBPACK_IMPORTED_MODULE_3__["BookingFormComponent"], _book_slot_grid_book_slot_grid_component__WEBPACK_IMPORTED_MODULE_4__["BookSlotGridComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _booking_routing_module__WEBPACK_IMPORTED_MODULE_5__["BookingRoutingModule"],
            _material_material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"]
        ],
        providers: [_bookingFormResolver__WEBPACK_IMPORTED_MODULE_8__["BookingFormResolver"], _booking_service__WEBPACK_IMPORTED_MODULE_10__["BookingService"]]
    })
], BookingModule);



/***/ }),

/***/ "./src/app/booking/booking.routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/booking/booking.routing.module.ts ***!
  \***************************************************/
/*! exports provided: BookingRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookingRoutingModule", function() { return BookingRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _book_slot_grid_book_slot_grid_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./book-slot-grid/book-slot-grid.component */ "./src/app/booking/book-slot-grid/book-slot-grid.component.ts");
/* harmony import */ var _booking_form_booking_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./booking-form/booking-form.component */ "./src/app/booking/booking-form/booking-form.component.ts");
/* harmony import */ var _bookingFormResolver__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./bookingFormResolver */ "./src/app/booking/bookingFormResolver.ts");






const routes = [
    {
        path: 'grid',
        component: _book_slot_grid_book_slot_grid_component__WEBPACK_IMPORTED_MODULE_3__["BookSlotGridComponent"]
    },
    {
        path: 'form',
        component: _booking_form_booking_form_component__WEBPACK_IMPORTED_MODULE_4__["BookingFormComponent"],
        resolve: { data: _bookingFormResolver__WEBPACK_IMPORTED_MODULE_5__["BookingFormResolver"] }
    }
];
let BookingRoutingModule = class BookingRoutingModule {
};
BookingRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], BookingRoutingModule);



/***/ }),

/***/ "./src/app/booking/bookingFormResolver.ts":
/*!************************************************!*\
  !*** ./src/app/booking/bookingFormResolver.ts ***!
  \************************************************/
/*! exports provided: BookingFormResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookingFormResolver", function() { return BookingFormResolver; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class BookingFormResolver {
    constructor() {
    }
    resolve(route, state) {
    }
}


/***/ })

}]);
//# sourceMappingURL=booking-booking-module.js.map