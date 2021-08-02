import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaComicsComponent } from './lista-comics.component';

describe('ListaComicsComponent', () => {
  let component: ListaComicsComponent;
  let fixture: ComponentFixture<ListaComicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaComicsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaComicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
