import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from './../_services/auth.service';
@Component({
	selector: 'app-top-bar',
	templateUrl: './top-bar.component.html',
	styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent {

	constructor(
		private router: Router,
		private authservice: AuthenticationService
	) {}

	logout(){
		this.authservice.logout()
		.subscribe(res => {
			this.router.navigate(['/login']);
		});
	}
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/