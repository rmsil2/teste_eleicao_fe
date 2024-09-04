import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CategoriaPessoaPage } from './categoria-pessoa.page';

describe('CategoriaPessoaPage', () => {
  let component: CategoriaPessoaPage;
  let fixture: ComponentFixture<CategoriaPessoaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriaPessoaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
