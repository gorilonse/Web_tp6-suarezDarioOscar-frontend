import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaEspectadorComponent } from './lista-espectador.component';

describe('ListaEspectadorComponent', () => {
  let component: ListaEspectadorComponent;
  let fixture: ComponentFixture<ListaEspectadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaEspectadorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListaEspectadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
