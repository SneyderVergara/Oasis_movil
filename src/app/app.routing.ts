import { HomeComponent } from "./components/home/home"; 
import { TiendaComponent } from "./components/tienda/tienda";
import { EventoComponent } from "./components/evento/evento";
import { InfoEventoComponent } from "./components/info_evento/info_evento";
import { LoginComponent } from "./components/login/login";
import { PerfilComponent } from "./components/perfil/perfil";


export const appRoutes: any = [
  { path: '', redirectTo: 'info_evento', pathMatch: 'full' },
  { path: "home", component: HomeComponent },
  { path: "tienda", component: TiendaComponent },
  { path: "evento", component: EventoComponent },
  { path: "info_evento", component: InfoEventoComponent },
  { path: "login", component: LoginComponent },
  { path: "perfil", component: PerfilComponent },
];

export const appComponents: any = [
  HomeComponent,
  TiendaComponent,
  EventoComponent,
  InfoEventoComponent,
  LoginComponent,
  PerfilComponent,
];
