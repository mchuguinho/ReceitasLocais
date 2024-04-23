import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidonio',
  templateUrl: './sidonio.page.html',
  styleUrls: ['./sidonio.page.scss'],
})
export class SidonioPage {

  constructor() { }

  isModalOpen = false;

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }


}
