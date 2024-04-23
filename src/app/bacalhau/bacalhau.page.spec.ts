import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BacalhauPage } from './bacalhau.page';

describe('BacalhauPage', () => {
  let component: BacalhauPage;
  let fixture: ComponentFixture<BacalhauPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BacalhauPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
