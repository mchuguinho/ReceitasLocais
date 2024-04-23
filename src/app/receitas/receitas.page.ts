import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-receitas',
  templateUrl: './receitas.page.html',
  styleUrls: ['./receitas.page.scss'],
})
export class ReceitasPage {

  constructor(private router: Router) {
  }

  public viana() {
    this.router.navigateByUrl('/viana');
  }

  public sobreMim() {
    this.router.navigateByUrl('/home');
  }
  public restaurantes() {
    this.router.navigateByUrl('/restaurantes');
  }
  public receitas() {
    this.router.navigateByUrl('/receitas');
  }
}

