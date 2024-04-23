import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rojoes',
  templateUrl: './rojoes.page.html',
  styleUrls: ['./rojoes.page.scss'],
})
export class RojoesPage  {

  constructor() { }

  isModalOpen = false;

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }


}
