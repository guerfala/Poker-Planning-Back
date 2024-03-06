import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsofpackComponent } from './cardsofpack.component';

describe('CardsofpackComponent', () => {
  let component: CardsofpackComponent;
  let fixture: ComponentFixture<CardsofpackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardsofpackComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardsofpackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
