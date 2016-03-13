System.register(["angular2/core", "angular2/common"], function(exports_1, context_1) {
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
    var core_1, common_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(fb) {
                    this.myFrom = fb.group({
                        name: "Arsalan",
                        age: 24,
                        email: "a4arshi@yahoo.com"
                    });
                }
                AppComponent.prototype.onSubmit = function (value) {
                    console.log("input value is ", value);
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: "form-validate",
                        template: "\n            <form [ngFormModel]=\"myFrom\"(ngSubmit)=\"onSubmit(f.value)\">\n                <label for=\"name\">Name</label><br/>\n                <input type=\"text\" [ngFormModel]=\"myFrom.control['name']\" id=\"name\"><br/><br/>\n                <label for=\"age\">Age</label><br/>     \n                <input type=\"text\" [ngFromControl]=\"myFrom.control['age']\"><br/><br/>\n                <label for=\"email\">Email</label><br/>\n                <input type=\"text\" [ngFromControl]=\"myFrom.control['email']\"><br/><br/>\n                <button type=\"submit\">Submit</button>\n            </form>\n            "
                    }), 
                    __metadata('design:paramtypes', [common_1.FormBuilder])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map