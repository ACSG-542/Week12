(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/jh/Documents/SXU/MACS/FALL-2020/ACSG-542/Week12/Week12-main/front-end/src/main.ts */"zUnb");


/***/ }),

/***/ "AytR":
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
const environment = {
    production: false,
    apiUrl: 'http://localhost:8080'
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

/***/ "RNaf":
/*!******************************************!*\
  !*** ./src/app/items/items.component.ts ***!
  \******************************************/
/*! exports provided: ItemsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemsComponent", function() { return ItemsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_items_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/items.service */ "ZOSX");
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_modal */ "dPr5");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _hover_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../hover.directive */ "vBTv");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _modal_modal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_modal/modal.component */ "zALO");








function ItemsComponent_li_7_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ItemsComponent_li_7_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const todo_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.openModal("custom-modal-1", todo_r1._id, todo_r1.item); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ItemsComponent_li_7_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const todo_r1 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.deleteItem(todo_r1.item, todo_r1._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const todo_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", todo_r1.item, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("appHover", ctx_r0.color);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("appHover", ctx_r0.color);
} }
class ItemsComponent {
    constructor(itemsService, modalService) {
        this.itemsService = itemsService;
        this.modalService = modalService;
    }
    ngOnInit() {
        this.itemsService.getAll().subscribe(returnItems => {
            this.items = returnItems.docs;
        });
        //this.bodyText = "Edit This Task in Modal 1";
    }
    saveItem() {
        if (!this.newItem)
            return;
        this.itemsService.create(this.newItem).subscribe(saveItem => {
            if (saveItem)
                this.items.push(saveItem);
        });
        this.newItem = "";
    }
    deleteItem(rmItem, id) {
        this.itemsService.delete(rmItem, id).subscribe(deleteItem => {
            this.items = this.items.filter(item => item._id != id);
        });
    }
    openModal(id, itemID, itemTitle) {
        this.updateId = itemID;
        this.bodyText = itemTitle;
        this.modalService.open(id);
    }
    updateModal(id) {
        var updateItem = this.items.filter(item => item._id == this.updateId);
        var foundItem = false;
        for (var i = 0; i < this.items.length; i++) {
            if (this.items[i].item == this.bodyText) {
                foundItem = true;
            }
        }
        if (!foundItem) {
            updateItem[0].item = this.bodyText;
            this.itemsService.update(this.bodyText, this.updateId).subscribe(updateItem => { });
            this.modalService.close('custom-modal-1');
            return;
        }
        else {
            this.modalService.cancel('custom-modal-1');
            return;
        }
    }
    cancelModal(id) {
        this.modalService.close(id);
    }
}
ItemsComponent.ɵfac = function ItemsComponent_Factory(t) { return new (t || ItemsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_items_service__WEBPACK_IMPORTED_MODULE_1__["ItemsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_modal__WEBPACK_IMPORTED_MODULE_2__["ModalService"])); };
ItemsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ItemsComponent, selectors: [["app-items"]], decls: 16, vars: 6, consts: [[1, "todo-input", 3, "ngModel", "ngModelChange"], [1, "todo-input", 3, "appHover", "click"], [1, "todo-item"], [1, "todo-item-left"], [1, "todo-item-label"], [4, "ngFor", "ngForOf"], ["id", "custom-modal-1"], ["type", "text", 3, "ngModel", "ngModelChange"], [3, "appHover", "click"], ["defaultColor", "red", 3, "appHover", "click"], ["defaultColor", "red", 1, "remove-item", 3, "appHover", "click"]], template: function ItemsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ItemsComponent_Template_input_ngModelChange_0_listener($event) { return ctx.newItem = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ItemsComponent_Template_button_click_1_listener() { return ctx.saveItem(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ItemsComponent_li_7_Template, 7, 3, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "update-modal", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Edit Item: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ItemsComponent_Template_input_ngModelChange_11_listener($event) { return ctx.bodyText = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ItemsComponent_Template_button_click_12_listener() { return ctx.updateModal("custom-modal-1"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ItemsComponent_Template_button_click_14_listener() { return ctx.cancelModal("custom-modal-1"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.newItem);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("appHover", ctx.color);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.items);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.bodyText);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("appHover", ctx.color);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("appHover", ctx.color);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _hover_directive__WEBPACK_IMPORTED_MODULE_4__["HoverDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _modal_modal_component__WEBPACK_IMPORTED_MODULE_6__["ModalComponent"]], styles: [".todo-input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px 18px;\n  font-size: 18px;\n  margin-bottom: 16px;\n\n  &:focus {\n    outline: 0;\n  }\n}\n\n.todo-item[_ngcontent-%COMP%] {\n  margin-bottom: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  animation-duration: 0.3s;\n}\n\n.remove-item[_ngcontent-%COMP%] {\n  cursor: pointer;\n  margin-left: 14px;\n  &:hover {\n    color: black;\n  }\n}\n\n.todo-item-left[_ngcontent-%COMP%] { \n  display: flex;\n  align-items: center;\n}\n\n.todo-item-label[_ngcontent-%COMP%] {\n  padding: 10px;\n  border: 1px solid white;\n  margin-left: 12px;\n}\n\n.todo-item-edit[_ngcontent-%COMP%] {\n  font-size: 24px;\n  color: #2c3e50;\n  margin-left: 12px;\n  width: 100%;\n  padding: 10px;\n  border: 1px solid #ccc; \n  font-family: 'Avenir', Helvetica, Arial, sans-serif;\n\n  &:focus {\n    outline: none;\n  }\n}\n\n.completed[_ngcontent-%COMP%] {\n  text-decoration: line-through;\n  color: grey;\n}\n\n.extra-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  font-size: 16px;\n  border-top: 1px solid lightgrey;\n  padding-top: 14px;\n  margin-bottom: 14px;\n}\n\nbutton[_ngcontent-%COMP%] {\n  font-size: 14px;\n  background-color: white;\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n\n  &:hover {\n    background: lightgreen;\n  }\n\n  &:focus {\n    outline: none;\n  }\n}\n\n.navbar-brand[_ngcontent-%COMP%] {\n   color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaXRlbXMvaXRlbXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLG1CQUFtQjs7RUFFbkI7SUFDRSxVQUFVO0VBQ1o7QUFDRjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDhCQUE4QjtFQUM5Qix3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCO0lBQ0UsWUFBWTtFQUNkO0FBQ0Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtREFBbUQ7O0VBRW5EO0lBQ0UsYUFBYTtFQUNmO0FBQ0Y7O0FBRUE7RUFDRSw2QkFBNkI7RUFDN0IsV0FBVztBQUNiOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw4QkFBOEI7RUFDOUIsZUFBZTtFQUNmLCtCQUErQjtFQUMvQixpQkFBaUI7RUFDakIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLHVCQUF1QjtFQUN2Qix3QkFBZ0I7S0FBaEIscUJBQWdCO1VBQWhCLGdCQUFnQjs7RUFFaEI7SUFDRSxzQkFBc0I7RUFDeEI7O0VBRUE7SUFDRSxhQUFhO0VBQ2Y7QUFDRjs7QUFFQTtHQUNHLFlBQVk7QUFDZiIsImZpbGUiOiJzcmMvYXBwL2l0ZW1zL2l0ZW1zLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudG9kby1pbnB1dCB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAxMHB4IDE4cHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcblxuICAmOmZvY3VzIHtcbiAgICBvdXRsaW5lOiAwO1xuICB9XG59XG5cbi50b2RvLWl0ZW0ge1xuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMC4zcztcbn1cblxuLnJlbW92ZS1pdGVtIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBtYXJnaW4tbGVmdDogMTRweDtcbiAgJjpob3ZlciB7XG4gICAgY29sb3I6IGJsYWNrO1xuICB9XG59XG5cbi50b2RvLWl0ZW0tbGVmdCB7IFxuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4udG9kby1pdGVtLWxhYmVsIHtcbiAgcGFkZGluZzogMTBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XG4gIG1hcmdpbi1sZWZ0OiAxMnB4O1xufVxuXG4udG9kby1pdGVtLWVkaXQge1xuICBmb250LXNpemU6IDI0cHg7XG4gIGNvbG9yOiAjMmMzZTUwO1xuICBtYXJnaW4tbGVmdDogMTJweDtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7IFxuICBmb250LWZhbWlseTogJ0F2ZW5pcicsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XG5cbiAgJjpmb2N1cyB7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgfVxufVxuXG4uY29tcGxldGVkIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG4gIGNvbG9yOiBncmV5O1xufVxuXG4uZXh0cmEtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCBsaWdodGdyZXk7XG4gIHBhZGRpbmctdG9wOiAxNHB4O1xuICBtYXJnaW4tYm90dG9tOiAxNHB4O1xufVxuXG5idXR0b24ge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBhcHBlYXJhbmNlOiBub25lO1xuXG4gICY6aG92ZXIge1xuICAgIGJhY2tncm91bmQ6IGxpZ2h0Z3JlZW47XG4gIH1cblxuICAmOmZvY3VzIHtcbiAgICBvdXRsaW5lOiBub25lO1xuICB9XG59XG5cbi5uYXZiYXItYnJhbmQge1xuICAgY29sb3I6IHdoaXRlO1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ItemsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-items',
                templateUrl: './items.component.html',
                styleUrls: ['./items.component.css']
            }]
    }], function () { return [{ type: _services_items_service__WEBPACK_IMPORTED_MODULE_1__["ItemsService"] }, { type: _modal__WEBPACK_IMPORTED_MODULE_2__["ModalService"] }]; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AppComponent {
    constructor() {
        this.title = 'services-navigation-demo';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 4, vars: 1, consts: [[1, "navbar", "navbar-light", "bg-dark"], [1, "navbar-brand", 3, "routerLink"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Week 12 Todo List");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "router-outlet");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "items-management");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: [".navbar-brand[_ngcontent-%COMP%] {\n   color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7R0FDRyxZQUFZO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXZiYXItYnJhbmQge1xuICAgY29sb3I6IHdoaXRlO1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_modal */ "dPr5");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _items_items_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./items/items.component */ "RNaf");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _hover_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./hover.directive */ "vBTv");








//import { HighlightDirective } from './highlight.directive';


//import { HomeComponent } from './home';
//import { TestPageComponent } from './test-page';
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
            _modal__WEBPACK_IMPORTED_MODULE_2__["ModalModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _items_items_component__WEBPACK_IMPORTED_MODULE_5__["ItemsComponent"],
        _hover_directive__WEBPACK_IMPORTED_MODULE_8__["HoverDirective"]
        //HomeComponent,
        //TestPageComponent
    ], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
        _modal__WEBPACK_IMPORTED_MODULE_2__["ModalModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                    _items_items_component__WEBPACK_IMPORTED_MODULE_5__["ItemsComponent"],
                    _hover_directive__WEBPACK_IMPORTED_MODULE_8__["HoverDirective"]
                    //HomeComponent,
                    //TestPageComponent
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                    _modal__WEBPACK_IMPORTED_MODULE_2__["ModalModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "ZOSX":
/*!*******************************************!*\
  !*** ./src/app/services/items.service.ts ***!
  \*******************************************/
/*! exports provided: ItemsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemsService", function() { return ItemsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class ItemsService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    getAll() {
        return this.httpClient.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl}/items`);
    }
    create(newItem) {
        return this.httpClient.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl}/item`, { item: newItem });
    }
    delete(removeItem, id) {
        let options = { item: removeItem, _id: id };
        return this.httpClient.request('DELETE', `${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl}/remove`, { body: options });
    }
    update(updateItem, id) {
        let options = { item: updateItem, _id: id };
        return this.httpClient.request('PUT', `${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl}/update`, { body: options });
    }
}
ItemsService.ɵfac = function ItemsService_Factory(t) { return new (t || ItemsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
ItemsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ItemsService, factory: ItemsService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ItemsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "dPr5":
/*!*********************************!*\
  !*** ./src/app/_modal/index.ts ***!
  \*********************************/
/*! exports provided: ModalModule, ModalService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modal_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal.module */ "i586");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ModalModule", function() { return _modal_module__WEBPACK_IMPORTED_MODULE_0__["ModalModule"]; });

/* harmony import */ var _modal_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal.service */ "vYor");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ModalService", function() { return _modal_service__WEBPACK_IMPORTED_MODULE_1__["ModalService"]; });





/***/ }),

/***/ "i586":
/*!****************************************!*\
  !*** ./src/app/_modal/modal.module.ts ***!
  \****************************************/
/*! exports provided: ModalModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalModule", function() { return ModalModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modal.component */ "zALO");




class ModalModule {
}
ModalModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ModalModule });
ModalModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ModalModule_Factory(t) { return new (t || ModalModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ModalModule, { declarations: [_modal_component__WEBPACK_IMPORTED_MODULE_2__["ModalComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]], exports: [_modal_component__WEBPACK_IMPORTED_MODULE_2__["ModalComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ModalModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
                declarations: [_modal_component__WEBPACK_IMPORTED_MODULE_2__["ModalComponent"]],
                exports: [_modal_component__WEBPACK_IMPORTED_MODULE_2__["ModalComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "vBTv":
/*!************************************!*\
  !*** ./src/app/hover.directive.ts ***!
  \************************************/
/*! exports provided: HoverDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HoverDirective", function() { return HoverDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class HoverDirective {
    constructor(el) {
        this.el = el;
    }
    onMouseEnter() {
        this.highlight(this.highlightColor || this.defaultColor || 'lightgreen');
    }
    onMouseLeave() {
        this.highlight(null);
    }
    highlight(color) {
        this.el.nativeElement.style.backgroundColor = color;
    }
}
HoverDirective.ɵfac = function HoverDirective_Factory(t) { return new (t || HoverDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
HoverDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: HoverDirective, selectors: [["", "appHover", ""]], hostBindings: function HoverDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function HoverDirective_mouseenter_HostBindingHandler() { return ctx.onMouseEnter(); })("mouseleave", function HoverDirective_mouseleave_HostBindingHandler() { return ctx.onMouseLeave(); });
    } }, inputs: { defaultColor: "defaultColor", highlightColor: ["appHover", "highlightColor"] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HoverDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[appHover]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, { defaultColor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], highlightColor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['appHover']
        }], onMouseEnter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['mouseenter']
        }], onMouseLeave: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['mouseleave']
        }] }); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _items_items_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./items/items.component */ "RNaf");





const routes = [
    { path: 'items-management', component: _items_items_component__WEBPACK_IMPORTED_MODULE_2__["ItemsComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "vYor":
/*!*****************************************!*\
  !*** ./src/app/_modal/modal.service.ts ***!
  \*****************************************/
/*! exports provided: ModalService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalService", function() { return ModalService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class ModalService {
    constructor() {
        this.modals = [];
    }
    add(modal) {
        this.modals.push(modal);
    }
    remove(id) {
        this.modals = this.modals.filter(x => x.id !== id);
    }
    open(id) {
        const modal = this.modals.find(x => x.id === id);
        modal.open();
    }
    close(id) {
        const modal = this.modals.find(x => x.id === id);
        modal.close();
    }
    cancel(id) {
        const modal = this.modals.find(x => x.id === id);
        modal.cancel();
    }
}
ModalService.ɵfac = function ModalService_Factory(t) { return new (t || ModalService)(); };
ModalService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ModalService, factory: ModalService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ModalService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], null, null); })();


/***/ }),

/***/ "zALO":
/*!*******************************************!*\
  !*** ./src/app/_modal/modal.component.ts ***!
  \*******************************************/
/*! exports provided: ModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalComponent", function() { return ModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _modal_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal.service */ "vYor");



const _c0 = ["*"];
class ModalComponent {
    constructor(modalService, el) {
        this.modalService = modalService;
        this.el = el;
        this.element = el.nativeElement;
    }
    ngOnInit() {
        if (!this.id) {
            return;
        }
        document.body.appendChild(this.element);
        this.element.addEventListener('click', el => {
            if (el.target.className === 'update-modal') {
                this.close();
            }
        });
        this.modalService.add(this);
    }
    ngOnDestroy() {
        this.modalService.remove(this.id);
        this.element.remove();
    }
    open() {
        this.element.style.display = 'block';
        document.body.classList.add('update-modal-open');
    }
    close() {
        this.element.style.display = 'none';
        document.body.classList.remove('update-modal-open');
    }
    cancel() {
        this.close();
    }
}
ModalComponent.ɵfac = function ModalComponent_Factory(t) { return new (t || ModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_modal_service__WEBPACK_IMPORTED_MODULE_1__["ModalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
ModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ModalComponent, selectors: [["update-modal"]], inputs: { id: "id" }, ngContentSelectors: _c0, decls: 4, vars: 0, consts: [[1, "update-modal"], [1, "update-modal-body"], [1, "update-modal-background"]], template: function ModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 2);
    } }, styles: ["update-modal {\n\t display: none;\n}\n update-modal .update-modal {\n\t position: fixed;\n\t top: 0;\n\t right: 0;\n\t bottom: 0;\n\t left: 0;\n\t z-index: 1000;\n\t overflow: auto;\n}\n update-modal .update-modal .update-modal-body {\n\t padding: 20px;\n\t background: #fff;\n\t margin: 40px;\n}\n update-modal .update-modal-background {\n\t position: fixed;\n\t top: 0;\n\t right: 0;\n\t bottom: 0;\n\t left: 0;\n\t background-color: #000;\n\t opacity: 0.75;\n\t z-index: 900;\n}\n body.update-modal-open {\n\t overflow: hidden;\n}\n \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvX21vZGFsL21vZGFsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0FBQ2Y7Q0FDQztFQUNDLGVBQWU7RUFDZixNQUFNO0VBQ04sUUFBUTtFQUNSLFNBQVM7RUFDVCxPQUFPO0VBQ1AsYUFBYTtFQUNiLGNBQWM7QUFDaEI7Q0FDQztFQUNDLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsWUFBWTtBQUNkO0NBQ0M7RUFDQyxlQUFlO0VBQ2YsTUFBTTtFQUNOLFFBQVE7RUFDUixTQUFTO0VBQ1QsT0FBTztFQUNQLHNCQUFzQjtFQUN0QixhQUFhO0VBQ2IsWUFBWTtBQUNkO0NBQ0M7RUFDQyxnQkFBZ0I7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9fbW9kYWwvbW9kYWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInVwZGF0ZS1tb2RhbCB7XG5cdCBkaXNwbGF5OiBub25lO1xufVxuIHVwZGF0ZS1tb2RhbCAudXBkYXRlLW1vZGFsIHtcblx0IHBvc2l0aW9uOiBmaXhlZDtcblx0IHRvcDogMDtcblx0IHJpZ2h0OiAwO1xuXHQgYm90dG9tOiAwO1xuXHQgbGVmdDogMDtcblx0IHotaW5kZXg6IDEwMDA7XG5cdCBvdmVyZmxvdzogYXV0bztcbn1cbiB1cGRhdGUtbW9kYWwgLnVwZGF0ZS1tb2RhbCAudXBkYXRlLW1vZGFsLWJvZHkge1xuXHQgcGFkZGluZzogMjBweDtcblx0IGJhY2tncm91bmQ6ICNmZmY7XG5cdCBtYXJnaW46IDQwcHg7XG59XG4gdXBkYXRlLW1vZGFsIC51cGRhdGUtbW9kYWwtYmFja2dyb3VuZCB7XG5cdCBwb3NpdGlvbjogZml4ZWQ7XG5cdCB0b3A6IDA7XG5cdCByaWdodDogMDtcblx0IGJvdHRvbTogMDtcblx0IGxlZnQ6IDA7XG5cdCBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xuXHQgb3BhY2l0eTogMC43NTtcblx0IHotaW5kZXg6IDkwMDtcbn1cbiBib2R5LnVwZGF0ZS1tb2RhbC1vcGVuIHtcblx0IG92ZXJmbG93OiBoaWRkZW47XG59XG4gIl19 */"], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ModalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'update-modal',
                templateUrl: 'modal.component.html',
                styleUrls: ['modal.component.css'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
            }]
    }], function () { return [{ type: _modal_service__WEBPACK_IMPORTED_MODULE_1__["ModalService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, { id: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map