import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class UserService {

	constructor() { }

	public register(name, username, password): Observable<any> {
		if(localStorage.getItem('username') === username){
			return of(false);
		}
		else{
			localStorage.setItem('name',name);	
			localStorage.setItem('username',username);	
			localStorage.setItem('password',password);	
			return of(true);
		}
	}

	getUser(){
		return localStorage.getItem('name');
	}
}
