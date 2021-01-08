import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteScreeningComponent } from './delete-screening.component';

describe('DeleteScreeningComponent', () => {
  let component: DeleteScreeningComponent;
  let fixture: ComponentFixture<DeleteScreeningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteScreeningComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteScreeningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
