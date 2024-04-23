import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RojoesPage } from './rojoes.page';

describe('RojoesPage', () => {
  let component: RojoesPage;
  let fixture: ComponentFixture<RojoesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RojoesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
