import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    constructor() {
    }

    public login(username, password): Observable<any> {
        if(username === localStorage.getItem('username') && password === localStorage.getItem('password')){
			localStorage.setItem('login','1');
			return of('true');
		}
		else {
			return of('false');
		}
	}

    public logout() : Observable<any> {
		return of(localStorage.removeItem('login'));
		
    }
}