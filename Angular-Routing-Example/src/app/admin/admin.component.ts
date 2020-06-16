import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'are-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor() { }
  pageTitle = 'Admin Section';
  ngOnInit(): void {
  }

}
