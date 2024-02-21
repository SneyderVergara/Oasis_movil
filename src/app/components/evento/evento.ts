import { Component, OnInit } from '@angular/core'
import { Router } from "@angular/router"; 
import { Page, TextField } from '@nativescript/core';

@Component({
  selector: 'evento',
  templateUrl: './evento.html',
  styleUrls: ['./evento.css'],
})
export class EventoComponent {
  public constructor(private router: Router, private page: Page) {
    // Use the component constructor to inject providers.
  }
  ngOnInit(): void {
    this.page.actionBarHidden = true;
  }
  public onTap(){
    this.router.navigate(["home"]);
  }
}