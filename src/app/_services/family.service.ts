import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class FamilyService {
	members = [];
	
	constructor() { }
	
	getMembers(){
		return this.members;
	}

	addMember(name,relation){
		this.members.push({
			'name' : name,
			'relation' : relation
		})
	}
}
