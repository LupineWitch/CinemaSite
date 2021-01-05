import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeansesComponentComponent } from './seanses-component.component';

describe('SeansesComponentComponent', () => {
  let component: SeansesComponentComponent;
  let fixture: ComponentFixture<SeansesComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeansesComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeansesComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
