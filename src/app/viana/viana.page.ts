import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-viana',
  templateUrl: './viana.page.html',
  styleUrls: ['./viana.page.scss'],
})
export class VianaPage {

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
