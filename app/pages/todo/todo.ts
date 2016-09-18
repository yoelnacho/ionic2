import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
    templateUrl: 'build/pages/todo/todo.html',
})
export class TodoPage {
    public dummyText : any;

    constructor(public navCtrl: NavController) {
        this.dummyText = "mi to do list, a crear...";
    }

}
