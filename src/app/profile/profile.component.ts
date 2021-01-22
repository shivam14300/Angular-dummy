import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {
	name : string;
	username : string;

	constructor(
		private router : Router,
		private userService : UserService
	) { 
    if(localStorage.getItem('login') !== '1'){
			this.router.navigate(['/login']);
		}
	}
	ngOnInit(): void {
		this.name = this.userService.getName();
		this.username = this.userService.getUsername();
	}

}
