import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetaComicComponent } from './tarjeta-comic.component';

describe('TarjetaComicComponent', () => {
  let component: TarjetaComicComponent;
  let fixture: ComponentFixture<TarjetaComicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TarjetaComicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TarjetaComicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
