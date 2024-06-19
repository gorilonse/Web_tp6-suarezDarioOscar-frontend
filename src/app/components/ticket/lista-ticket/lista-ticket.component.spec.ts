import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaTicketComponent } from './lista-ticket.component';

describe('ListaTicketComponent', () => {
  let component: ListaTicketComponent;
  let fixture: ComponentFixture<ListaTicketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaTicketComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListaTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
