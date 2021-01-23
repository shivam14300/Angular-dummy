import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../_services/user.service';
import { FamilyService } from '../_services/family.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {
	name : string;
	username : string;
	members;
	addMemberForm : FormGroup;
	constructor(
		private router : Router,
		private userService : UserService,
		private familyService : FamilyService,
		private formBuilder : FormBuilder
	) { 
    if(localStorage.getItem('login') !== '1'){
			this.router.navigate(['/login']);
		}
	}
	ngOnInit(): void {
		this.name = this.userService.getName();
		this.username = this.userService.getUsername();
		this.members = this.familyService.getMembers();
		this.addMemberForm = this.formBuilder.group({
			name: '',
			relation: ''
		});
	}

	get f() { return this.addMemberForm.controls; }

	onSubmit(){
		this.familyService.addMember(this.f.name.value, this.f.relation.value)
		this.addMemberForm.reset();
	}

}
