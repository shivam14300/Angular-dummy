import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {

    constructor() {
    }

    // public get currentUserValue(): User {
    //     return this.currentUserSubject.value;
    // }

    login(username, password) {
        return (username == 'admin' && password == 'pass' );        
    }

    // logout() {
    //     // remove user from local storage and set current user to null
    //     localStorage.removeItem('currentUser');
    //     this.currentUserSubject.next(null);
    // }
}