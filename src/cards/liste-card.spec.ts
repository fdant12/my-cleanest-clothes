import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeCard } from './liste-card';

describe('ListeCard', () => {
  let component: ListeCard;
  let fixture: ComponentFixture<ListeCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListeCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
