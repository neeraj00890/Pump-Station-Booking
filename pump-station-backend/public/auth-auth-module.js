(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["auth-auth-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/login-form/login-form.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/login-form/login-form.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n  <div class=\"container\">\n    <div class=\"col-md-4\">\n\n    </div>\n    <div class=\"col-md-4 well\">\n      <h3>Login Form</h3>\n      <form action=\"\" #loginForm ='ngForm'>\n\n\n        <p>\n            <mat-form-field appearance=\"legacy\">\n              <mat-label>User Name</mat-label>\n              <input matInput name=\"username\" placeholder=\"Username\" [(ngModel)]=\"username\" required>\n             \n              <mat-hint>Provide valid username</mat-hint>\n            </mat-form-field>\n          </p>\n          <p>\n            <mat-form-field appearance=\"standard\">\n              <mat-label>Password</mat-label>\n              <input matInput type=\"password\" name=\"password\" placeholder=\"Password\" [(ngModel)]=\"password\" required>\n            </mat-form-field>\n          </p>\n    \n          <button mat-raised-button color=\"primary\" (click)=\"onLogin(loginForm)\" [disabled]=\"loginForm.invalid\">Login</button><br>\n          <button mat-raised-button color=\"primary\" (click)=\"onRegister()\">New Registration?</button>\n    </form>\n    </div>\n    <div class=\"col-md-4\">\n      \n    </div>\n  </div>\n  \n</div>\n\n\n\n  \n  \n  <!-- Copyright 2020 Google LLC. All Rights Reserved.\n      Use of this source code is governed by an MIT-style license that\n      can be found in the LICENSE file at http://angular.io/license -->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/registration-form/registration-form.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/registration-form/registration-form.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n<div class=\"row\">\n  <div class=\"container\">\n    <div class=\"col-md-4\">\n\n    </div>\n    <div class=\"col-md-4 well\">\n      <h3>Registration Form</h3>\n      <form action=\"\" #regForm ='ngForm'>\n\n\n        <p>\n            <mat-form-field appearance=\"legacy\">\n              <mat-label>User Name</mat-label>\n              <input matInput name=\"username\" placeholder=\"Username\" [(ngModel)]=\"username\" required>\n             \n              <mat-hint>Provide valid username</mat-hint>\n            </mat-form-field>\n          </p>\n          <p>\n            <mat-form-field appearance=\"standard\">\n              <mat-label>Password</mat-label>\n              <input matInput  type=\"password\" name=\"password\" placeholder=\"Password\"  required [(ngModel)]=\"password\">\n            </mat-form-field>\n          </p>\n          <p>\n            <mat-form-field appearance=\"standard\">\n              <mat-label>Confirm Password</mat-label>\n              <input matInput  type=\"password\" name=\"cpassword\" placeholder=\"Confirm Password\" [(ngModel)]=\"cpassword\" required>\n            </mat-form-field>\n          </p>\n          <p>\n            <mat-form-field appearance=\"standard\">\n              <mat-label>Email</mat-label>\n              <input matInput name=\"email\" placeholder=\"Email\" [(ngModel)]=\"email\" required>\n            </mat-form-field>\n          </p>\n    \n          <mat-form-field appearance=\"fill\">\n            <mat-label>Role</mat-label>\n            <mat-select name =\"role\"  [(ngModel)]=\"role\" >\n              <mat-option value=\"Pump Owner\">Pump Owner</mat-option>\n              <mat-option value=\"End User\" >End User</mat-option>\n            \n            </mat-select>\n          </mat-form-field>\n          \n    \n          <button mat-raised-button color=\"primary\" (click)=\"OnRegisteration(regForm)\" [disabled]=\"regForm.invalid\">Register</button>\n         \n    </form>\n    </div>\n    <div class=\"col-md-4\">\n      \n    </div>\n  </div>\n</div>\n\n\n\n  \n  \n  <!-- Copyright 2020 Google LLC. All Rights Reserved.\n      Use of this source code is governed by an MIT-style license that\n      can be found in the LICENSE file at http://angular.io/license -->");

/***/ }),

/***/ "./src/app/auth/auth-rest-call-service.ts":
/*!************************************************!*\
  !*** ./src/app/auth/auth-rest-call-service.ts ***!
  \************************************************/
/*! exports provided: AuthRestCallService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthRestCallService", function() { return AuthRestCallService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");






let AuthRestCallService = class AuthRestCallService {
    constructor(http) {
        this.http = http;
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl;
    }
    errorHander(err) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["throwError"])(err['message']);
    }
    register(url, user) {
        return this.http.post(url, user).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((res) => res), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHander));
    }
    login(url, payload) {
        return this.http.post(url, payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((res) => res), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHander));
    }
};
AuthRestCallService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
AuthRestCallService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()
], AuthRestCallService);



/***/ }),

/***/ "./src/app/auth/auth-service.ts":
/*!**************************************!*\
  !*** ./src/app/auth/auth-service.ts ***!
  \**************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _auth_rest_call_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth-rest-call-service */ "./src/app/auth/auth-rest-call-service.ts");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm2015/snack-bar.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let AuthService = class AuthService {
    constructor(restCallsService, _snackBar, router) {
        this.restCallsService = restCallsService;
        this._snackBar = _snackBar;
        this.router = router;
    }
    registerUser(user) {
        const URL = `pump/auth/register`;
        this.restCallsService.register(URL, user).subscribe((data) => {
            if (data['success']) {
                this._snackBar.open('Registration Successfull', 'Ok', {
                    duration: 2000,
                });
                this.router.navigate(['login']);
            }
        });
    }
    login(payload) {
        const URL = `pump/auth/login`;
        this.restCallsService.login(URL, payload).subscribe((data) => {
            localStorage.setItem('loggedInUser', data['_id']);
            if (data['success']) {
                if (data['role'] == 'Pump Owner')
                    this.router.navigate(['booking', 'grid']);
                else
                    this.router.navigate(['booking', 'form']);
            }
            else {
                this._snackBar.open('Bad Credentital!!', 'Ok', {
                    duration: 2000,
                });
            }
        });
    }
};
AuthService.ctorParameters = () => [
    { type: _auth_rest_call_service__WEBPACK_IMPORTED_MODULE_2__["AuthRestCallService"] },
    { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], AuthService);



/***/ }),

/***/ "./src/app/auth/auth.module.ts":
/*!*************************************!*\
  !*** ./src/app/auth/auth.module.ts ***!
  \*************************************/
/*! exports provided: AuthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return AuthModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _login_form_login_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login-form/login-form.component */ "./src/app/auth/login-form/login-form.component.ts");
/* harmony import */ var _registration_form_registration_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./registration-form/registration-form.component */ "./src/app/auth/registration-form/registration-form.component.ts");
/* harmony import */ var _auth_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth.routing.module */ "./src/app/auth/auth.routing.module.ts");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../material/material.module */ "./src/app/material/material.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./auth-service */ "./src/app/auth/auth-service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _auth_rest_call_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./auth-rest-call-service */ "./src/app/auth/auth-rest-call-service.ts");











let AuthModule = class AuthModule {
};
AuthModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_login_form_login_form_component__WEBPACK_IMPORTED_MODULE_3__["LoginFormComponent"], _registration_form_registration_form_component__WEBPACK_IMPORTED_MODULE_4__["RegistrationFormComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _auth_routing_module__WEBPACK_IMPORTED_MODULE_5__["AuthRoutingModule"],
            _material_material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"]
        ],
        providers: [_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"], _auth_rest_call_service__WEBPACK_IMPORTED_MODULE_10__["AuthRestCallService"]]
    })
], AuthModule);



/***/ }),

/***/ "./src/app/auth/auth.routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/auth/auth.routing.module.ts ***!
  \*********************************************/
/*! exports provided: AuthRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthRoutingModule", function() { return AuthRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _login_form_login_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login-form/login-form.component */ "./src/app/auth/login-form/login-form.component.ts");
/* harmony import */ var _registration_form_registration_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./registration-form/registration-form.component */ "./src/app/auth/registration-form/registration-form.component.ts");





const routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full',
    },
    {
        path: 'login',
        component: _login_form_login_form_component__WEBPACK_IMPORTED_MODULE_3__["LoginFormComponent"]
    },
    {
        path: 'register',
        component: _registration_form_registration_form_component__WEBPACK_IMPORTED_MODULE_4__["RegistrationFormComponent"]
    }
];
let AuthRoutingModule = class AuthRoutingModule {
};
AuthRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AuthRoutingModule);



/***/ }),

/***/ "./src/app/auth/login-form/login-form.component.css":
/*!**********************************************************!*\
  !*** ./src/app/auth/login-form/login-form.component.css ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("button{\r\n    display: flex;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9sb2dpbi1mb3JtL2xvZ2luLWZvcm0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9hdXRoL2xvZ2luLWZvcm0vbG9naW4tZm9ybS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYnV0dG9ue1xyXG4gICAgZGlzcGxheTogZmxleDtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/auth/login-form/login-form.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/auth/login-form/login-form.component.ts ***!
  \*********************************************************/
/*! exports provided: LoginFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginFormComponent", function() { return LoginFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth-service */ "./src/app/auth/auth-service.ts");




let LoginFormComponent = class LoginFormComponent {
    constructor(router, authService) {
        this.router = router;
        this.authService = authService;
    }
    ngOnInit() {
    }
    onLogin(loginForm) {
        let payload = {
            userName: loginForm.controls.username.value,
            password: loginForm.controls.password.value,
        };
        this.authService.login(payload);
    }
    onRegister() {
        this.router.navigate(['register']);
    }
};
LoginFormComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }
];
LoginFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login-form',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login-form.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/login-form/login-form.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login-form.component.css */ "./src/app/auth/login-form/login-form.component.css")).default]
    })
], LoginFormComponent);



/***/ }),

/***/ "./src/app/auth/registration-form/registration-form.component.css":
/*!************************************************************************!*\
  !*** ./src/app/auth/registration-form/registration-form.component.css ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvcmVnaXN0cmF0aW9uLWZvcm0vcmVnaXN0cmF0aW9uLWZvcm0uY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/auth/registration-form/registration-form.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/auth/registration-form/registration-form.component.ts ***!
  \***********************************************************************/
/*! exports provided: RegistrationFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationFormComponent", function() { return RegistrationFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../auth-service */ "./src/app/auth/auth-service.ts");





let RegistrationFormComponent = class RegistrationFormComponent {
    constructor(_snackBar, authService, router) {
        this._snackBar = _snackBar;
        this.authService = authService;
        this.router = router;
    }
    ngOnInit() {
    }
    OnRegisteration(regForm) {
        if (regForm.controls.password.value != regForm.controls.cpassword.value) {
            this._snackBar.open('Password does not matched', 'Ok', {
                duration: 2000,
            });
            return;
        }
        let user = {
            userName: regForm.controls.username.value,
            password: regForm.controls.password.value,
            email: regForm.controls.email.value,
            role: regForm.controls.role.value,
        };
        this.authService.registerUser(user);
    }
};
RegistrationFormComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"] },
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
RegistrationFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-registration-form',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./registration-form.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/registration-form/registration-form.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./registration-form.component.css */ "./src/app/auth/registration-form/registration-form.component.css")).default]
    })
], RegistrationFormComponent);



/***/ })

}]);
//# sourceMappingURL=auth-auth-module.js.map