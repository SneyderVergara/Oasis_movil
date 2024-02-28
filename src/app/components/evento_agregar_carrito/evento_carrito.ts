import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router"; 
import { Page, TextField, Observable } from '@nativescript/core';

@Component({
  selector: 'evento_carrito',
  templateUrl: './evento_carrito.html',
  styleUrls: ['./evento_carrito.css'],
})
export class EventoCarritoComponent implements OnInit {
  public options: Array<string>;
  public selectedIndex: number;

  constructor(private router: Router, private page: Page) {
    // Use the component constructor to inject providers.
    this.options = ["Mesa 08 (x7 Personas)", "Mesa 29 (x4 Personas)", "Mesa 68 (x5 Personas)"];
    this.selectedIndex = 0; // Opción predeterminada seleccionada
  }

  ngOnInit(): void {
    this.page.actionBarHidden = true;
  }

  public onTap(){
    this.router.navigate(["info_evento"]);
  }
}