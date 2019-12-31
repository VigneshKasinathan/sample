import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  posts = [
    { title: "First posts", content:'This is the First Post' },
    { title: "Second posts", content:'This is the Second Post' },
    { title: "Third posts", content:'This is the Third Post' },
  ];

  constructor() { }

  ngOnInit() {
  }

}
