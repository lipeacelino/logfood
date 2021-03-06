import { Component, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/header/header.service';

@Component({
  selector: 'app-dash-pedidos',
  templateUrl: './dash-pedidos.component.html'
})
export class DashPedidosComponent implements OnInit {

  constructor(public headerService: HeaderService) { }

  ngOnInit() {
    this.headerService.ocultarLinkPadarias()
    this.headerService.exibirPerfil()
  }

}
