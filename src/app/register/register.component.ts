import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from './../_services/user.service';

@Component({
	selector: 'app-register',
	templateUrl: './register.component.html',
	styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

	registerForm : FormGroup;
	constructor(
		private router: Router,
		private formBuilder: FormBuilder,
		private userService: UserService
	) { }

	ngOnInit(): void {
		this.registerForm = this.formBuilder.group({
			name: '',
			username: '',
			password: ''
		});
	}
	get f() { return this.registerForm.controls; }

	onSubmit(){
		this.userService.register(this.f.name.value,this.f.username.value, this.f.password.value)
		.subscribe(res => {
			this.router.navigate(['/login']);
		});
	}

}
