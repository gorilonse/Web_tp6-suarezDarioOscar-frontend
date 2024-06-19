import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AltaEspectadorComponent } from './alta-espectador.component';

describe('AltaEspectadorComponent', () => {
  let component: AltaEspectadorComponent;
  let fixture: ComponentFixture<AltaEspectadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AltaEspectadorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AltaEspectadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
