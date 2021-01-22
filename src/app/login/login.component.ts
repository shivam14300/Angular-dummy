import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from './../_services/auth.service';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	loginForm: FormGroup;

	constructor(
		private formBuilder: FormBuilder,
		private router: Router,
		private authenticationService: AuthenticationService,
		private route: ActivatedRoute
	) { 
		if(localStorage.getItem('login') === '1'){
			this.router.navigate(['/']);
		}
	}

	ngOnInit(): void {
		this.loginForm = this.formBuilder.group({
			username: '',
			password: ''
		});
	}

	get f() { return this.loginForm.controls; }

	onSubmit(){
		this.authenticationService.login(this.f.username.value, this.f.password.value)
		.subscribe(res => {
			this.router.navigate(['/']);
		});
	}

}
