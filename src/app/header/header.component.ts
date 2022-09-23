import { Component, OnInit } from '@angular/core';
import { faHeartCircleCheck } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  faHeartCircleCheck = faHeartCircleCheck;
  constructor() {}

  ngOnInit(): void {}
}
