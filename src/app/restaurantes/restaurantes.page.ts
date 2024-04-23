import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-restaurantes',
  templateUrl: './restaurantes.page.html',
  styleUrls: ['./restaurantes.page.scss'],
})
export class RestaurantesPage {

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
