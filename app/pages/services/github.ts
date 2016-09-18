import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http'; // este servicio utiliza RxJS que devuelve observables

@Injectable()
export class GitHubService {
    constructor(private http: Http){

    }

    getRepos(username){
        // --------- Prestar atención a las comillas `` para que funcione no usar ''
        let repos =  this.http.get(`https://api.github.com/users/${username}/repos`);
        return repos;
    }
}
