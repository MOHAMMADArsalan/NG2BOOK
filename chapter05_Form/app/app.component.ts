import {Component } from "angular2/core";
import {FORM_DIRECTIVES,ControlGroup,FormBuilder} from "angular2/common";

@Component({
    selector: "form-validate",
    template: `
            <form [ngFormModel]="myFrom"(ngSubmit)="onSubmit(f.value)">
                <label for="name">Name</label><br/>
                <input type="text" [ngFormModel]="myFrom.control['name']" id="name"><br/><br/>
                <label for="age">Age</label><br/>     
                <input type="text" [ngFromControl]="myFrom.control['age']"><br/><br/>
                <label for="email">Email</label><br/>
                <input type="text" [ngFromControl]="myFrom.control['email']"><br/><br/>
                <button type="submit">Submit</button>
            </form>
            `
})
export class AppComponent {
    myFrom: ControlGroup;
    constructor(fb: FormBuilder) { 
        this.myFrom = fb.group({
            name: "Arsalan",
            age: 24,
            email: "a4arshi@yahoo.com"
        })
    }
    onSubmit(value: string) {
        console.log("input value is ", value)
    }
}