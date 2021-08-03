import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetaComicFavoritoComponent } from './tarjeta-comic-favorito.component';

describe('TarjetaComicFavoritoComponent', () => {
  let component: TarjetaComicFavoritoComponent;
  let fixture: ComponentFixture<TarjetaComicFavoritoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TarjetaComicFavoritoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TarjetaComicFavoritoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
