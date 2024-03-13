import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from "@angular/router"; 
import { Page, TextField } from '@nativescript/core';
import { ApiService } from '../evento/api.service';

@Component({
  selector: 'info_evento',
  templateUrl: './info_evento.html',
  styleUrls: ['./info_evento.css'],
})
export class InfoEventoComponent {
  public info_evento = {}
  public constructor(private router: Router, private page: Page, private apiService: ApiService, private route: ActivatedRoute) {
    // Use the component constructor to inject providers.
  }
  ngOnInit(): void {
    this.page.actionBarHidden = true;
    const id = this.route.snapshot.params.id
    console.log(id);
    this.apiService.getRegisterById(id).subscribe((item) => {
      this.info_evento = item;
    });
    console.log(this.info_evento);
  }
  public onTap(){
    this.router.navigate(["evento"]);
  }
  public onCarrito(){
    this.router.navigate(["evento_carrito"]);
  }
}