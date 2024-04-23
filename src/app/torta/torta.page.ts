import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-torta',
  templateUrl: './torta.page.html',
  styleUrls: ['./torta.page.scss'],
})
export class TortaPage {

  constructor() { }

  isModalOpen = false;

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }


}
