import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

constructor() {}

ngOnInit(): void {
}
slogan : string='Your One Stop Shop For Everything';
source: string="/assets/Shopping.jpg";
} 
