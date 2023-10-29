import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {
  
  sideMenuOpen: boolean = true;
  
  constructor() { }
  
  ngOnInit() {
    localStorage.setItem('userName', 'Jose Upia');
  }

  toggleSideMenuChange() {
    this.sideMenuOpen = !this.sideMenuOpen;
  }

}
