import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

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

