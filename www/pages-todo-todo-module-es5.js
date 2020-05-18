function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-todo-todo-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/todo/todo.page.html":
  /*!*********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/todo/todo.page.html ***!
    \*********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesTodoTodoPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      Todo\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content class=\"ion-padding\">\n  <ion-item>\n    <ion-input type=\"text\" placeholder=\"Enter task\" [(ngModel)]=\"taskName\"></ion-input>\n\n    <div class=\"item-note\" item-end>\n      <ion-button color=\"dark\" (click)=\"addTask()\">\n        <ion-icon name=\"add\"></ion-icon>\n      </ion-button>\n    </div>\n  </ion-item>\n  <div padding>\n    <ion-list>\n      <ion-item *ngFor=\"let todo of taskList; let i=index\">\n        {{todo}}\n        <div class=\"item-note\" slot=\"end\">\n          <ion-button color=\"danger\" clear (click)=\"deleteTask(i)\">\n            <ion-icon name=\"trash\"></ion-icon>\n          </ion-button>\n        </div>\n      </ion-item>\n    </ion-list>\n  </div>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/todo/todo-routing.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/pages/todo/todo-routing.module.ts ***!
    \***************************************************/

  /*! exports provided: TodoPageRoutingModule */

  /***/
  function srcAppPagesTodoTodoRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TodoPageRoutingModule", function () {
      return TodoPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _todo_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./todo.page */
    "./src/app/pages/todo/todo.page.ts");

    var routes = [{
      path: '',
      component: _todo_page__WEBPACK_IMPORTED_MODULE_3__["TodoPage"]
    }];

    var TodoPageRoutingModule = function TodoPageRoutingModule() {
      _classCallCheck(this, TodoPageRoutingModule);
    };

    TodoPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], TodoPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/todo/todo.module.ts":
  /*!*******************************************!*\
    !*** ./src/app/pages/todo/todo.module.ts ***!
    \*******************************************/

  /*! exports provided: TodoPageModule */

  /***/
  function srcAppPagesTodoTodoModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TodoPageModule", function () {
      return TodoPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _todo_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./todo-routing.module */
    "./src/app/pages/todo/todo-routing.module.ts");
    /* harmony import */


    var _todo_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./todo.page */
    "./src/app/pages/todo/todo.page.ts");

    var TodoPageModule = function TodoPageModule() {
      _classCallCheck(this, TodoPageModule);
    };

    TodoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _todo_routing_module__WEBPACK_IMPORTED_MODULE_5__["TodoPageRoutingModule"]],
      declarations: [_todo_page__WEBPACK_IMPORTED_MODULE_6__["TodoPage"]]
    })], TodoPageModule);
    /***/
  },

  /***/
  "./src/app/pages/todo/todo.page.scss":
  /*!*******************************************!*\
    !*** ./src/app/pages/todo/todo.page.scss ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesTodoTodoPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3RvZG8vdG9kby5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/pages/todo/todo.page.ts":
  /*!*****************************************!*\
    !*** ./src/app/pages/todo/todo.page.ts ***!
    \*****************************************/

  /*! exports provided: TodoPage */

  /***/
  function srcAppPagesTodoTodoPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TodoPage", function () {
      return TodoPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

    var TodoPage = /*#__PURE__*/function () {
      function TodoPage(navCtrl) {
        _classCallCheck(this, TodoPage);

        this.navCtrl = navCtrl;
        this.taskName = '';
        this.taskList = [];
      }

      _createClass(TodoPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "addTask",
        value: function addTask() {
          if (this.taskName.length > 0) {
            var task = this.taskName;
            this.taskList.push(task);
            this.taskName = '';
          }
        }
      }, {
        key: "deleteTask",
        value: function deleteTask(index) {
          this.taskList.splice(index, 1);
        }
      }]);

      return TodoPage;
    }();

    TodoPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }];
    };

    TodoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-todo',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./todo.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/todo/todo.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./todo.page.scss */
      "./src/app/pages/todo/todo.page.scss"))["default"]]
    })], TodoPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-todo-todo-module-es5.js.map