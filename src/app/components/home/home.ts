import { Component, OnInit } from '@angular/core'
import { Router } from "@angular/router"; 
import { exit } from "nativescript-exit";
import { Page, TextField } from '@nativescript/core';

@Component({
  selector: 'home',
  templateUrl: './home.html',
  styleUrls: ['./home.css'],
})
export class HomeComponent {
  public constructor(private router: Router, private page: Page) {
    // Use the component constructor to inject providers.
  }

  ngOnInit(): void {
    this.page.actionBarHidden = true;
  }

  public onExit(): void {
    exit(); // will close application
  }
}

