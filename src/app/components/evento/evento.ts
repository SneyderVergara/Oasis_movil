import { Component, OnInit } from '@angular/core'
import { Router } from "@angular/router"; 

@Component({
  selector: 'evento',
  templateUrl: './evento.html',
})
export class EventoComponent {
  public constructor(private router: Router) {
    // Use the component constructor to inject providers.
  }

  public onTap(){
    this.router.navigate(["home"]);
  }
}