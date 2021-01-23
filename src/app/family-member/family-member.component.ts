import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-family-member',
  templateUrl: './family-member.component.html',
  styleUrls: ['./family-member.component.css']
})
export class FamilyMemberComponent implements OnInit {

  @Input() member;

  constructor() { }

  ngOnInit(): void {
  }

}
