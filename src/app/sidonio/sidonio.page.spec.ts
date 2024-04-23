import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SidonioPage } from './sidonio.page';

describe('SidonioPage', () => {
  let component: SidonioPage;
  let fixture: ComponentFixture<SidonioPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SidonioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
