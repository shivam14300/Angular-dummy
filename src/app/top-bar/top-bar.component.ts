import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from './../_services/auth.service';
import { UserService } from './../_services/user.service';
@Component({
	selector: 'app-top-bar',
	templateUrl: './top-bar.component.html',
	styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent {
	name: string;
	constructor(
		private router: Router,
		private authService: AuthenticationService,
		private userService: UserService
	) {}
	
	ngOnInit(): void {
		this.name = this.userService.getUser();
	}
	
	logout(){
		this.authService.logout()
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