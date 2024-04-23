import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bacalhau',
  templateUrl: './bacalhau.page.html',
  styleUrls: ['./bacalhau.page.scss'],
})
export class BacalhauPage  {

  constructor() { }

  isModalOpen = false;

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }

}
