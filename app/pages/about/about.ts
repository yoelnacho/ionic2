import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GitHubService } from '../services/github';

@Component({
    templateUrl: 'build/pages/about/about.html',
    providers: [GitHubService]
})
export class AboutPage {
    private foundRepos;
    private username;

    constructor(
        public navCtrl: NavController,
        private github: GitHubService
    ) {

    }

    getRepos(){
        // petición al servicio pasandole la variable username
        this.github.getRepos(this.username).subscribe(
            // data es lo que nos devuelve la consulta
            data => {
                this.foundRepos = data.json();
            },
            // err manejamos por consola los errores
            err => console.error(err),
            // () idica cuando los observables se completaron
            () => console.log('getRepos Completed')
        );
    }
}
