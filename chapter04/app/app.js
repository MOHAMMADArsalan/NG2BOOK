System.register(["angular2/platform/browser", "angular2/core"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var browser_1, core_1;
    var NgRepeat;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            NgRepeat = (function () {
                function NgRepeat() {
                }
                NgRepeat.prototype.apply = function (color, fontSize) {
                    this.color = color;
                    this.fontSize = fontSize;
                };
                NgRepeat = __decorate([
                    core_1.Component({
                        selector: "Ng-repeat",
                        template: "\n    <h4 class=\"ui horizontal divider header\">\n ngStyle with object property from variable\n</h4>\n  <div>\n    <span [style.font-size.px]=\"fontinput.value\">\n       font size is  {{fontinput.value}} px\n    </span>\n</div>\n<h4 class=\"ui horizontal divider header\">\n ngStyle with object property from variable\n</h4>\n<div>\n<br/>\n    <br/>\n    <span [style.font-size.px]=\"fontinput.value\" [ngStyle]=\"{color: colorinput.value}\">\n        {{colorinput.value}} text\n    </span>\n</div>\n<div>\n    <h4 class=\"ui horizontal divider header\">\nstyle from variable\n</h4>\n    <div [style.font-size.px]=\"fontinput.value\" [style.height]=\"fontinput.value\" [style.background-color]=\"colorinput.value\" style=\"color: white;\">\n        {{ colorinput.value }} background\n    </div>\n</div>\n   <h4 class=\"ui horizontal divider header\">\nstyle from variable\n</h4>\n<div class=\"ui input\">\n    <br/>\n    <br/>\n    <input type=\"text\" name=\"color\" value=\"{{color}}\" #colorinput>\n    <br/>\n    <br/>\n    <input type=\"number\" name=\"fontSize\" value=\"{{fontSize}}\" #fontinput>\n    <br/>\n    <br/>\n    <button (click)=\"apply(color , fontSize)\">Change Value</button>\n</div>\n<!--<h2  style=\"margin : 120px auto;\">\n               <span *ngIf=\"choice <=  5\">your choice is {{ choice }}</span>\n               <span *ngIf=\"choice > 5\">Your Choice is out of list bcoz it greater than 5</span>\n              </h2>\n              <input type=\"number\" [(ngModel)]=\"choice\">\n              <div>\n                  <ul [ngSwitch]=\"choice\">\n                      <li *ngSwitchWhen=\"1\">first Choice  </li>\n                      <li *ngSwitchWhen=\"2\">Second Choice </li>\n                      <li *ngSwitchWhen=\"3\">Third Choice </li>\n                      <li *ngSwitchWhen=\"4\">Forth Choice </li>\n                      <li *ngSwitchWhen=\"5\">Fifth Choice</li>\n                      <li *ngSwitchDefault>Plz enter number less than equal to five</li>\n                  </ul>\n              </div>-->\n              \n              "
                    }), 
                    __metadata('design:paramtypes', [])
                ], NgRepeat);
                return NgRepeat;
            }());
            browser_1.bootstrap(NgRepeat);
        }
    }
});
//# sourceMappingURL=app.js.map