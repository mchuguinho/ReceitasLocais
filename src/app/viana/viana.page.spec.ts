import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VianaPage } from './viana.page';

describe('VianaPage', () => {
  let component: VianaPage;
  let fixture: ComponentFixture<VianaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(VianaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
