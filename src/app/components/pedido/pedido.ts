import { Component, OnInit } from '@angular/core'
import { Router } from "@angular/router"; 
import { Page, TextField } from '@nativescript/core';

@Component({
  selector: 'pedido',
  templateUrl: './pedido.html',
  styleUrls: ['./pedido.css'],
})
export class PedidoComponent {
  public constructor(private router: Router, private page: Page) {
    // Use the component constructor to inject providers.
  }
  ngOnInit(): void {
    this.page.actionBarHidden = true;
  }
  public onTap(){
    this.router.navigate(["qr_mesa"]);
  }
}